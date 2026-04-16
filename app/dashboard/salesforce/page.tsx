"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./demo.css";

type Post = {
  id: string;
  text: string;
  created_at: string;
  author: { id: string; username: string; name: string; profile_image_url?: string };
  metrics: { like_count: number; reply_count: number; retweet_count: number; quote_count: number };
  url: string;
};

type Score = { id: string; score: number; rationale: string; flags: string[] };
type Angle = { angle: string; reply: string };

const DEFAULT_RUBRIC_PLACEHOLDER = `Edit the scoring rubric here. The default is loaded server-side and reflects Salesforce's community engagement tenets. Paste a custom rubric to override.`;

const DEMO_REVEAL_MS = 8000;
const LIVE_POLL_MS = 60_000;
const DEMO_INITIAL_VISIBLE = 3;

function timeAgo(date: Date | null, now: Date): string {
  if (!date) return "-";
  const sec = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  return `${hr}h ago`;
}

export default function SalesforceDemoPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [scores, setScores] = useState<Record<string, Score>>({});
  const [angles, setAngles] = useState<Record<string, Angle[]>>({});

  const [threshold, setThreshold] = useState(70);
  const [rubricOpen, setRubricOpen] = useState(false);
  const [rubric, setRubric] = useState("");
  const [mode, setMode] = useState<"live" | "demo">("demo");
  const [source, setSource] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [now, setNow] = useState<Date>(new Date());

  const [scoringIds, setScoringIds] = useState<Set<string>>(new Set());
  const [anglesLoading, setAnglesLoading] = useState<Record<string, boolean>>({});
  const [copiedIds, setCopiedIds] = useState<Set<string>>(new Set());
  const [err, setErr] = useState<string | null>(null);

  const isInitialized = useRef(false);
  const rubricRef = useRef("");
  useEffect(() => {
    rubricRef.current = rubric;
  }, [rubric]);

  const visiblePosts = useMemo(() => allPosts.slice(0, visibleCount), [allPosts, visibleCount]);
  const sortedPosts = useMemo(() => {
    const cutoff = now.getTime() - 48 * 60 * 60 * 1000;
    return [...visiblePosts]
      .filter((p) => new Date(p.created_at).getTime() >= cutoff)
      .sort((a, b) => (scores[b.id]?.score ?? -1) - (scores[a.id]?.score ?? -1));
  }, [visiblePosts, scores, now]);

  // tick for "last sync Xs ago"
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  async function doFetch(modeOverride?: "live" | "demo") {
    const m = modeOverride ?? mode;
    try {
      const r = await fetch(`/api/x-posts?max=25&mode=${m}`);
      const data = await r.json();
      const incoming: Post[] = data.posts ?? [];
      setSource(data.source ?? null);
      if (data.error) setErr(`X API: ${data.error} - using seed posts.`);
      else if (data.warning) setErr(data.warning);
      else setErr(null);

      if (!isInitialized.current) {
        isInitialized.current = true;
        setAllPosts(incoming);
        setVisibleCount(
          m === "demo" ? Math.min(DEMO_INITIAL_VISIBLE, incoming.length) : incoming.length
        );
      } else {
        setAllPosts((prev) => {
          const existing = new Set(prev.map((p) => p.id));
          const newOnes = incoming.filter((p) => !existing.has(p.id));
          if (newOnes.length === 0) return prev;
          setVisibleCount((c) => c + newOnes.length);
          return [...newOnes, ...prev];
        });
      }
      setLastSync(new Date());
    } catch (e) {
      setErr(e instanceof Error ? e.message : "fetch failed");
    }
  }

  async function streamOneDemoPost() {
    try {
      const r = await fetch("/api/x-posts/stream");
      const data = await r.json();
      const post = data.post as Post | undefined;
      if (!post) return;
      setAllPosts((prev) => [post, ...prev]);
      setVisibleCount((c) => c + 1);
      setLastSync(new Date());
    } catch {
      // silent - keeps trying next tick
    }
  }

  async function scoreBatch(batch: Post[]) {
    try {
      const r = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ posts: batch, rubric: rubricRef.current || undefined }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "scoring failed");
      setScores((prev) => {
        const next = { ...prev };
        for (const s of d.scores as Score[]) next[s.id] = s;
        return next;
      });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "scoring failed");
    } finally {
      setScoringIds((prev) => {
        const next = new Set(prev);
        batch.forEach((p) => next.delete(p.id));
        return next;
      });
    }
  }

  // reset + initial fetch whenever mode changes
  useEffect(() => {
    setAllPosts([]);
    setVisibleCount(0);
    setScores({});
    setAngles({});
    setCopiedIds(new Set());
    setScoringIds(new Set());
    isInitialized.current = false;
    void doFetch(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // auto-reveal (demo) or auto-poll (live) - runs continuously, never stops
  useEffect(() => {
    const delay = mode === "demo" ? DEMO_REVEAL_MS : LIVE_POLL_MS;
    const handle = setInterval(() => {
      if (mode === "demo") {
        if (visibleCount < allPosts.length) {
          setVisibleCount((v) => Math.min(v + 1, allPosts.length));
        } else {
          void streamOneDemoPost();
        }
      } else {
        void doFetch("live");
      }
    }, delay);
    return () => clearInterval(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, allPosts.length, visibleCount]);

  // resync when tab becomes visible again (after laptop sleep / tab switch)
  useEffect(() => {
    function onVisible() {
      if (document.visibilityState !== "visible") return;
      if (mode === "live") void doFetch("live");
      else void streamOneDemoPost();
    }
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // auto-score newly visible posts
  useEffect(() => {
    const unscored = visiblePosts.filter((p) => !scores[p.id] && !scoringIds.has(p.id));
    if (unscored.length === 0) return;
    setScoringIds((s) => {
      const next = new Set(s);
      unscored.forEach((p) => next.add(p.id));
      return next;
    });
    void scoreBatch(unscored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visiblePosts]);

  async function generateAngles(post: Post) {
    setAnglesLoading((s) => ({ ...s, [post.id]: true }));
    try {
      const r = await fetch("/api/angles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "angles failed");
      const newAngles = d.angles as Angle[];
      setAngles((s) => ({ ...s, [post.id]: newAngles }));

      const score = scores[post.id]?.score ?? 0;
      const clip = [
        `Score: ${score}`,
        `Post_URL: ${post.url}`,
        ...newAngles.map((a, i) => `Angle ${i + 1}: ${a.reply}`),
      ].join("\n");
      try {
        await navigator.clipboard.writeText(clip);
        setCopiedIds((s) => new Set(s).add(post.id));
      } catch {
        // clipboard blocked - silent
      }
    } catch (e) {
      setErr(e instanceof Error ? e.message : "angles failed");
    } finally {
      setAnglesLoading((s) => ({ ...s, [post.id]: false }));
    }
  }

  const isStreaming = mode === "live" || visibleCount < allPosts.length;
  const aboveCount = sortedPosts.filter((p) => (scores[p.id]?.score ?? 0) >= threshold).length;
  const scoringAny = scoringIds.size > 0;

  return (
    <div className="sf-demo">
      <div className="sf-eyebrow">Salesforce · X engagement pipeline</div>
      <h1 className="sf-title">From the top 10K to the right reply.</h1>
      <p className="sf-sub">
        A monthly-refreshed 10K list feeds an X list. Posts stream in continuously, get scored
        against Salesforce's engagement tenets with Claude, and the ones worth answering surface
        with 3 on-voice reply angles. Approve-to-send routes the best ones to Slack.
      </p>

      {err && <div className="sf-err">{err}</div>}

      {/* Section 1: Source */}
      <section className="sf-section">
        <div className="sf-section-head">
          <span className="sf-section-num">01</span>
          <span className="sf-section-title">Source</span>
          <span className="sf-section-hint">
            <span className={`sf-live-dot ${isStreaming ? "on" : ""}`} />
            {isStreaming ? "streaming" : "caught up"} · last sync {timeAgo(lastSync, now)}
          </span>
        </div>
        <div className="sf-card">
          <div className="sf-source-grid">
            <div>
              <div className="sf-stat-label">Top profiles</div>
              <div className="sf-stat-value">10,000</div>
              <div className="sf-stat-note">ranked by adjusted network value, April refresh</div>
            </div>
            <div>
              <div className="sf-stat-label">X list</div>
              <div className="sf-stat-value">Live</div>
              <div className="sf-stat-note">
                <a
                  href="https://x.com/i/lists/144748104"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  a16z partners ↗
                </a>
              </div>
            </div>
            <div>
              <div className="sf-stat-label">Cadence</div>
              <div className="sf-stat-value">Continuous</div>
              <div className="sf-stat-note">
                {mode === "live"
                  ? `polls X every ${LIVE_POLL_MS / 1000}s · 48h rolling window`
                  : `streams seeded posts · 48h rolling window`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Controls */}
      <section className="sf-section">
        <div className="sf-section-head">
          <span className="sf-section-num">02</span>
          <span className="sf-section-title">Pipeline</span>
          <span className="sf-section-hint">rubric editable</span>
        </div>
        <div className="sf-card">
          <div className="sf-controls">
            <div className="sf-threshold" style={{ marginRight: 8 }}>
              Source
              <button
                className="sf-btn ghost"
                style={{ padding: "8px 14px" }}
                onClick={() => setMode((m) => (m === "live" ? "demo" : "live"))}
              >
                {mode === "live" ? "Live X API" : "Demo data"}
              </button>
            </div>
            <div className="sf-threshold">
              Threshold
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
              />
              <strong style={{ color: "var(--accent)", fontSize: 14 }}>{threshold}</strong>
            </div>
            <button className="sf-btn ghost" onClick={() => setRubricOpen((v) => !v)}>
              {rubricOpen ? "Hide rubric" : "Show rubric"}
            </button>
          </div>
          {rubricOpen && (
            <textarea
              className="sf-rubric"
              style={{ marginTop: 16 }}
              value={rubric}
              onChange={(e) => setRubric(e.target.value)}
              placeholder={DEFAULT_RUBRIC_PLACEHOLDER}
            />
          )}
        </div>
      </section>

      {/* Section 3: Feed */}
      <section className="sf-section">
        <div className="sf-section-head">
          <span className="sf-section-num">03</span>
          <span className="sf-section-title">Scored feed</span>
          <span className="sf-section-hint">
            rolling 48h window · {sortedPosts.length} posts · {aboveCount} above threshold
            {scoringAny ? ` · scoring ${scoringIds.size}` : ""}
            {source ? ` · ${source}` : ""}
          </span>
        </div>

        {sortedPosts.length === 0 && (
          <div className="sf-empty">
            <span className="sf-loading" />
            Waiting for posts…
          </div>
        )}

        {sortedPosts.map((p) => {
          const s = scores[p.id];
          const isScoring = scoringIds.has(p.id);
          const above = (s?.score ?? 0) >= threshold;
          const postAngles = angles[p.id];
          const isLoadingAngles = anglesLoading[p.id];
          return (
            <div key={p.id} className={`sf-post ${s ? (above ? "above" : "below") : ""}`}>
              <div className="sf-score">
                <div className={`sf-score-num ${above ? "hi" : ""}`}>
                  {isScoring ? <span className="sf-loading" /> : s ? s.score : "—"}
                </div>
                <div className="sf-score-label">Score</div>
              </div>

              <div className="sf-post-body">
                <div className="sf-post-author">
                  <strong>{p.author.name}</strong>
                  <span className="handle">@{p.author.username}</span>
                </div>
                <div className="sf-post-text">{p.text}</div>
                <div className="sf-post-meta">
                  <span>♡ {p.metrics.like_count}</span>
                  <span>↺ {p.metrics.retweet_count}</span>
                  <span>💬 {p.metrics.reply_count}</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    open on X ↗
                  </a>
                  <span>{timeAgo(new Date(p.created_at), now)}</span>
                </div>
                {s && <div className="sf-rationale">{s.rationale}</div>}
                {s && s.flags.length > 0 && (
                  <div className="sf-flags">
                    {s.flags.map((f) => (
                      <span key={f} className="sf-flag">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="sf-post-actions">
                {above && (
                  <button
                    className="sf-btn"
                    onClick={() => generateAngles(p)}
                    disabled={isLoadingAngles}
                  >
                    {isLoadingAngles ? <span className="sf-loading" /> : null}
                    {isLoadingAngles
                      ? "Drafting…"
                      : copiedIds.has(p.id)
                      ? "Copied ✓"
                      : "Draft 3 angles"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
