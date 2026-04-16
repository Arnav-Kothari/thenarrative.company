import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const SALESFORCE_VOICE = `You are drafting public reply options that @salesforce could post in response to a tweet.

Voice and posture (Salesforce's X engagement tenets):
- Lead with perspective, not promotion. Add something to the conversation; don't pitch.
- Speak with informed confidence. Never dismissive, never correcting; we add, we don't correct.
- Sound like a trusted expert in the room: curious, sharp, worth listening to.
- Prioritize AI, agents, industry transformation, enterprise future of work.
- No product pitches. No hashtags. No links. No emojis unless natural.
- Keep each reply to 1-2 sentences, under 240 characters.
- CRITICAL: Never use em dashes (—) or en dashes (–). Use a hyphen (-), comma, or period instead. This is non-negotiable.
- Avoid the "X, not Y" contrast pattern (e.g. "A system, not a calendar"). State what the thing IS directly.
- Goal: drive a reply from the original author.

Return ONLY a JSON array of exactly 3 objects:
[
  {"angle": "short label (3-6 words) describing the take", "reply": "the actual tweet reply text"},
  ...
]

Each angle should take a genuinely different approach (e.g. one zooms out to the industry, one adds a concrete data point or example, one asks a sharp question that invites their response). No two replies should sound the same.`;

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing ANTHROPIC_API_KEY" }, { status: 500 });
  }

  const { post } = (await req.json()) as {
    post: {
      id: string;
      text: string;
      author: { username: string; name: string };
    };
  };

  const client = new Anthropic({ apiKey });

  try {
    const msg = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 800,
      system: SALESFORCE_VOICE,
      messages: [
        {
          role: "user",
          content: `Original post by ${post.author.name} (@${post.author.username}):
"""
${post.text}
"""

Draft 3 distinct reply angles from @salesforce. Return ONLY the JSON array.`,
        },
      ],
    });

    const raw = msg.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();
    const jsonMatch = raw.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("no JSON array in response");
    const angles = (JSON.parse(jsonMatch[0]) as { angle: string; reply: string }[]).map((a) => ({
      angle: a.angle.replace(/[—–]/g, "-"),
      reply: a.reply.replace(/[—–]/g, "-"),
    }));
    return NextResponse.json({ angles });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "unknown" },
      { status: 500 }
    );
  }
}
