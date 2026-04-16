import { NextResponse } from "next/server";
import { SEED_POSTS } from "../_lib/seedPosts";

export const runtime = "nodejs";

const X_API_BASE = "https://api.twitter.com/2";

export type XPost = {
  id: string;
  text: string;
  created_at: string;
  author: {
    id: string;
    username: string;
    name: string;
    profile_image_url?: string;
  };
  metrics: {
    like_count: number;
    reply_count: number;
    retweet_count: number;
    quote_count: number;
    impression_count?: number;
  };
  url: string;
};

async function xFetch(path: string, token: string) {
  const res = await fetch(`${X_API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`X API ${res.status}: ${body.slice(0, 400)}`);
  }
  return res.json();
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const max = url.searchParams.get("max") ?? "25";
  const mode = url.searchParams.get("mode") ?? "live";

  if (mode === "demo") {
    return NextResponse.json({ posts: SEED_POSTS, source: "seed" });
  }

  const token = process.env.X_BEARER_TOKEN;
  const listId = process.env.X_LIST_ID;

  if (!token || !listId) {
    return NextResponse.json(
      { error: "Missing X_BEARER_TOKEN or X_LIST_ID in .env.local" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    max_results: max,
    "tweet.fields": "created_at,public_metrics,author_id,lang",
    expansions: "author_id",
    "user.fields": "username,name,profile_image_url",
  });

  try {
    const data = await xFetch(`/lists/${listId}/tweets?${params.toString()}`, token);
    const users: Record<string, XPost["author"]> = {};
    for (const u of data.includes?.users ?? []) {
      users[u.id] = {
        id: u.id,
        username: u.username,
        name: u.name,
        profile_image_url: u.profile_image_url,
      };
    }
    const posts: XPost[] = (data.data ?? [])
      .filter((t: { lang?: string }) => !t.lang || t.lang === "en")
      .map((t: {
        id: string;
        text: string;
        created_at: string;
        author_id: string;
        public_metrics: {
          like_count: number;
          reply_count: number;
          retweet_count: number;
          quote_count: number;
          impression_count?: number;
        };
      }) => {
        const author = users[t.author_id] ?? {
          id: t.author_id,
          username: "unknown",
          name: "Unknown",
        };
        return {
          id: t.id,
          text: t.text,
          created_at: t.created_at,
          author,
          metrics: t.public_metrics,
          url: `https://x.com/${author.username}/status/${t.id}`,
        };
      });

    if (posts.length === 0) {
      return NextResponse.json({
        posts: [],
        source: "live",
        warning:
          "X returned 0 posts for this list. If the list is private, the bearer token can't read it - make it public or use OAuth user auth.",
      });
    }
    return NextResponse.json({ posts, source: "live" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown error";
    return NextResponse.json({ error: msg, posts: SEED_POSTS, source: "seed-fallback" });
  }
}
