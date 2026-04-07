import type { CSSProperties } from "react";
import Logo from "../components/Logo";

// ─── Brand tokens (pulled straight from brand.html) ──
const bg = "#F6F1E9";
const bg2 = "#EDE7DB";
const ink = "#15130E";
const text2 = "#6B6157";
const accent = "#C96A2B";
const border = "#DDD7CC";
const ivory = "#F6F1E9";

// ─── Shared styles ──
const pageLabel: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 10,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: accent,
  marginBottom: 48,
  display: "flex",
  alignItems: "center",
  gap: 12,
  fontWeight: 400,
};

const pageTitle: CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 500,
  fontSize: 48,
  lineHeight: 1.1,
  color: ink,
  marginBottom: 24,
};

const sectionHeading: CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 500,
  fontSize: 28,
  lineHeight: 1.2,
  color: ink,
  marginBottom: 12,
};

const body: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 300,
  fontSize: 15,
  lineHeight: 1.75,
  color: text2,
  maxWidth: 680,
};

const conceptLabel: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  color: accent,
  marginBottom: 10,
};

const conceptMeta: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: 1.7,
  color: text2,
};

const conceptStageBase: CSSProperties = {
  width: "100%",
  minHeight: 360,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 48,
  border: `1px solid ${border}`,
};

// ─── PAGE ──────────────────────────────────────────────────────
// Both lockups on this page come from the shared <Logo /> component
// in app/components/Logo.tsx. This page is the component's home spec.
export default function LogoPage() {
  return (
    <main
      style={{
        background: bg,
        color: ink,
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        fontWeight: 300,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ─── Header ─────────────────────────────────── */}
      <section
        style={{
          padding: "100px 64px 64px",
          borderBottom: `1px solid ${border}`,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={pageLabel}>
          <span style={{ display: "block", width: 24, height: 1, background: accent }} />
          Logo — The System
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 92,
            lineHeight: 1.02,
            color: ink,
            marginBottom: 32,
          }}
        >
          A mark for
          <br />
          The Narrative Company.
        </h1>
        <p style={{ ...body, marginBottom: 16 }}>
          Three-word company names are a design problem. They run long inline, they look bottom-heavy stacked, and the
          last word (almost always a category word like <em>Company</em>, <em>Club</em>, <em>Co.</em>) wants to
          disappear. The best three-word marks solve this with a two-piece system: a horizontal wordmark that carries
          the name wherever space allows, and a reduced mark that takes over the moment horizontal space runs out.
          Think The North Face wordmark paired with the Half Dome curve, or Apple&apos;s wordmark paired with the
          apple silhouette.
        </p>
        <p style={body}>
          The Narrative Company already has a signature visual device: the 1px amber bar that sits above the wordmark.
          The bar is the brand. The system below preserves the wordmark as the anchor and extends it into one reduced
          mark - an italic serif &ldquo;N.&rdquo; monogram - so the logo can hold its own from a 16px favicon to a
          sixteen-foot event backdrop. Two lockups. Nothing more.
        </p>
      </section>

      {/* ─── 01 · Primary wordmark ─────────────────── */}
      <ConceptSection
        number="01"
        title="Primary Wordmark"
        note="The default"
        description="The anchor. Inter 400, uppercase, 0.4em tracking, with a 1px amber bar above. Used for headers, footers, decks, business cards, email signatures, proposal covers, and anywhere horizontal space is generous. This is the canonical form - use it unless you physically cannot fit it."
      >
        <Stage>
          <Logo variant="wordmark" tone="ink" size={20} />
        </Stage>
        <Stage dark>
          <Logo variant="wordmark" tone="ivory" size={20} />
        </Stage>
      </ConceptSection>

      {/* ─── 02 · Serif monogram (reduced mark) ─── */}
      <ConceptSection
        number="02"
        title={`"N." Monogram`}
        note="The reduced mark"
        description="A single italic Cormorant Garamond N followed by an amber period, with the signature bar above, sitting on a warm cream surface. Three reasons it&apos;s the right reduced mark: (1) it uses the display typeface from the brand system, so it feels of-a-piece with every headline on the site; (2) the italic N earns its ownability - italic serif capitals are rare in logo marks, and this one carries the editorial voice of the brand; (3) the period is functional - narrative arcs end in a period, and putting it in amber makes it the same element as the bar. One mark, two instances of the brand accent. The cream surface is the canonical form - use it for favicons, app icons, social avatars, embossed stationery, and anywhere horizontal space collapses."
        recommended
      >
        <Stage cream>
          <Logo variant="monogram" tone="ink" size={140} />
        </Stage>
        <Stage dark>
          <Logo variant="monogram" tone="ivory" size={140} />
        </Stage>
      </ConceptSection>

      {/* ─── SMALL-CONTEXT TESTS ───────────────────── */}
      <section
        style={{
          padding: "100px 64px",
          borderBottom: `1px solid ${border}`,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={pageLabel}>
          <span style={{ display: "block", width: 24, height: 1, background: accent }} />
          Small-context tests
        </div>
        <h2 style={pageTitle}>Does it hold at 16px?</h2>
        <p style={{ ...body, marginBottom: 48 }}>
          A logo has to survive the two cruelest tests: the favicon and the avatar. Both are square, both are tiny,
          and both sit next to competing marks. The serif monogram is designed for exactly this.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginBottom: 64 }}>
          {/* Favicon simulations at 16, 32, 48, 96 */}
          {[16, 32, 48, 96].map((px) => (
            <div key={px} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  width: 140,
                  height: 140,
                  background: bg,
                  border: `1px solid ${border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: px,
                    height: px,
                    background: bg2,
                    border: `1px solid ${border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "relative", paddingTop: Math.max(2, px * 0.08) }}>
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: px * 0.4,
                        height: 1,
                        background: accent,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontWeight: 500,
                        fontSize: px * 0.72,
                        lineHeight: 0.9,
                        color: ink,
                      }}
                    >
                      N<span style={{ color: accent }}>.</span>
                    </span>
                  </div>
                </div>
              </div>
              <span style={{ ...conceptMeta, fontSize: 11 }}>{px}×{px} px</span>
            </div>
          ))}
        </div>

        {/* Avatar row — cream (primary), then ivory, ink, amber */}
        <h3 style={{ ...sectionHeading, marginTop: 32 }}>Avatars</h3>
        <p style={{ ...body, marginBottom: 32 }}>
          Square social avatars on the four brand surfaces. Cream is the canonical tile - warmer than ivory, softer
          than ink, and it&apos;s the surface the monogram was designed against. The other three are there for
          contrast tests and for moments when the environment forces a different background.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          <AvatarTile bgColor={bg2} inkColor={ink} accentColor={accent} label="Cream — primary" />
          <AvatarTile bgColor={ivory} inkColor={ink} accentColor={accent} label="Ivory" />
          <AvatarTile bgColor={ink} inkColor={ivory} accentColor={accent} label="Ink" />
          <AvatarTile bgColor={accent} inkColor={ivory} accentColor="rgba(246,241,233,0.6)" label="Amber" />
        </div>
      </section>

      {/* ─── SYSTEM SUMMARY ────────────────────────── */}
      <section
        style={{
          padding: "100px 64px 140px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div style={pageLabel}>
          <span style={{ display: "block", width: 24, height: 1, background: accent }} />
          System summary
        </div>
        <h2 style={pageTitle}>When to use which</h2>
        <p style={{ ...body, marginBottom: 48 }}>
          Two lockups, one signature device (the amber bar), two typefaces (Cormorant Garamond italic + Inter 400).
          The wordmark is the default - use it unless you physically cannot fit it. The monogram takes over only when
          horizontal space collapses.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <thead>
            <tr>
              {["Mark", "Role", "Use where", "Minimum size"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: text2,
                    padding: "12px 20px",
                    borderBottom: `1px solid ${border}`,
                    fontWeight: 400,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["01 · Inline wordmark", "Primary", "Headers, footers, decks, print, email signatures, proposal covers", "80px wide"],
              ["02 · Serif monogram N.", "Reduced", "Favicons, avatars, stationery, tiny UI chrome, watermarks", "16×16 px"],
            ].map(([mark, role, use, min]) => (
              <tr key={mark}>
                <td style={{ padding: 20, borderBottom: `1px solid ${border}`, fontSize: 13, color: ink, fontWeight: 400 }}>{mark}</td>
                <td style={{ padding: 20, borderBottom: `1px solid ${border}`, fontSize: 13, color: accent, fontFamily: "monospace" }}>{role}</td>
                <td style={{ padding: 20, borderBottom: `1px solid ${border}`, fontSize: 13, color: text2 }}>{use}</td>
                <td style={{ padding: 20, borderBottom: `1px solid ${border}`, fontSize: 13, color: text2, fontFamily: "monospace" }}>{min}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

// ─── small sub-components ─────────────────────────────────────
function ConceptSection({
  number,
  title,
  note,
  description,
  recommended,
  children,
}: {
  number: string;
  title: string;
  note: string;
  description: string;
  recommended?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: "80px 64px",
        borderBottom: `1px solid ${border}`,
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
        <div>
          <div style={conceptLabel}>{number} — {note}</div>
          <h3 style={{ ...sectionHeading, fontSize: 36, marginBottom: 20 }}>{title}</h3>
          <p style={{ ...body, fontSize: 14, marginBottom: 20 }}>{description}</p>
          {recommended && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                border: `1px solid ${accent}`,
                color: accent,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
              }}
            >
              Reduced form
            </div>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>{children}</div>
      </div>
    </section>
  );
}

function Stage({
  children,
  dark,
  cream,
}: {
  children: React.ReactNode;
  dark?: boolean;
  cream?: boolean;
}) {
  const style: CSSProperties = { ...conceptStageBase };
  if (dark) style.background = ink;
  else if (cream) style.background = bg2;
  else style.background = bg;
  return <div style={style}>{children}</div>;
}

function AvatarTile({
  bgColor,
  inkColor,
  accentColor,
  label,
}: {
  bgColor: string;
  inkColor: string;
  accentColor: string;
  label: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          aspectRatio: "1 / 1",
          background: bgColor,
          border: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", paddingTop: 10 }}>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 48,
              height: 1,
              background: accentColor,
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 96,
              lineHeight: 0.9,
              color: inkColor,
            }}
          >
            N<span style={{ color: accentColor }}>.</span>
          </span>
        </div>
      </div>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: text2,
        }}
      >
        {label}
      </span>
    </div>
  );
}
