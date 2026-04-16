import type { XPost } from "../x-posts/route";

// Real tweets sourced via web search from accounts on the April 10K list,
// used as the demo pool. Each post links to the actual tweet on X.
// Text excerpts reflect the first ~3 sentences of each tweet.

type SeedTemplate = Omit<XPost, "id" | "created_at"> & {
  url: string;
};

export const SEED_TEMPLATES: SeedTemplate[] = [
  {
    text:
      "Another week on the road meeting with a couple dozen IT and AI leaders from large enterprises across banking, media, retail, healthcare, consulting, tech, and sports, to discuss agents in the enterprise. Some quick takeaways: Clear that we're moving from chat era of AI to agents that use tools, process data, and start to execute real work in the enterprise.",
    author: { id: "u1", username: "levie", name: "Aaron Levie" },
    metrics: { like_count: 2840, reply_count: 142, retweet_count: 520, quote_count: 68 },
    url: "https://x.com/levie/status/2043426157367095397",
  },
  {
    text:
      "One corollary to the fact that AI agents take real work to setup in company at scale, is that the role of the forward deployed engineer - or whatever it gets called in the future - isn't going away any time soon. When a vendor sells any kind of agents into an organization, you're going to need people who bridge product and the customer's reality.",
    author: { id: "u1", username: "levie", name: "Aaron Levie" },
    metrics: { like_count: 3120, reply_count: 178, retweet_count: 640, quote_count: 82 },
    url: "https://x.com/levie/status/2044225408972009842",
  },
  {
    text:
      "Had meetings and a dinner with 20+ enterprise AI and IT leaders today. Lots of interesting conversations around the state of AI in large enterprises, especially regulated businesses. Here are some of general trends: Agents are clearly the big thing. Enterprises moving from experimentation into targeted automation of specific workflows.",
    author: { id: "u1", username: "levie", name: "Aaron Levie" },
    metrics: { like_count: 2440, reply_count: 118, retweet_count: 430, quote_count: 52 },
    url: "https://x.com/levie/status/2034484203522261293",
  },
  {
    text:
      "It's clear that AI agents will be the biggest users of software in the future, and by extension computers as well. We are going to need so much infrastructure to build out to scale agents in enterprise. And all software will have to become API-first as a result.",
    author: { id: "u1", username: "levie", name: "Aaron Levie" },
    metrics: { like_count: 4210, reply_count: 232, retweet_count: 890, quote_count: 124 },
    url: "https://x.com/levie/status/2030049511398330663",
  },
  {
    text:
      "Wow, this tweet went very viral! I wanted share a possibly slightly improved version of the tweet in an 'idea file'. The idea of the idea file is that in this era of LLM agents, there is less of a point/need of sharing the specific code/app, you just share the idea, then the other person's agent customizes it for their context.",
    author: { id: "u2", username: "karpathy", name: "Andrej Karpathy" },
    metrics: { like_count: 9820, reply_count: 412, retweet_count: 1640, quote_count: 188 },
    url: "https://x.com/karpathy/status/2040470801506541998",
  },
  {
    text:
      "I packaged up the 'autoresearch' project into a new self-contained minimal repo if people would like to play over the weekend. It's basically nanochat LLM training core stripped down to a single-GPU, one file version of ~630 lines of code, then layered with agents doing research on top.",
    author: { id: "u2", username: "karpathy", name: "Andrej Karpathy" },
    metrics: { like_count: 7240, reply_count: 298, retweet_count: 1180, quote_count: 96 },
    url: "https://x.com/karpathy/status/2030371219518931079",
  },
  {
    text:
      "It is hard to communicate how much programming has changed due to AI in the last 2 months: not gradually and over time in the 'progress as usual' way, but specifically this last December. There are a number of asterisks but imo coding agents basically didn't work before December.",
    author: { id: "u2", username: "karpathy", name: "Andrej Karpathy" },
    metrics: { like_count: 12800, reply_count: 540, retweet_count: 2210, quote_count: 310 },
    url: "https://x.com/karpathy/status/2026731645169185220",
  },
  {
    text:
      "CLIs are super exciting precisely because they are a 'legacy' technology, which means AI agents can natively and easily use them, combine them, interact with them via the entire terminal toolkit. Ask your Claude/Codex agent to install a new CLI and chain it into existing ones, and it just works.",
    author: { id: "u2", username: "karpathy", name: "Andrej Karpathy" },
    metrics: { like_count: 6420, reply_count: 238, retweet_count: 980, quote_count: 84 },
    url: "https://x.com/karpathy/status/2026360908398862478",
  },
  {
    text:
      "Peter Steinberger is joining OpenAI to drive the next generation of personal agents. He is a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people. We expect this will quickly become core to our product direction.",
    author: { id: "u3", username: "sama", name: "Sam Altman" },
    metrics: { like_count: 14200, reply_count: 680, retweet_count: 2810, quote_count: 340 },
    url: "https://x.com/sama/status/2023150230905159801",
  },
  {
    text:
      "coffee ☕",
    author: { id: "u4", username: "naval", name: "Naval" },
    metrics: { like_count: 8120, reply_count: 420, retweet_count: 210, quote_count: 88 },
    url: "https://x.com/naval",
  },
  {
    text:
      "gym 💪",
    author: { id: "u5", username: "chamath", name: "Chamath Palihapitiya" },
    metrics: { like_count: 3420, reply_count: 210, retweet_count: 74, quote_count: 22 },
    url: "https://x.com/chamath",
  },
  {
    text:
      "thinking about spring",
    author: { id: "u6", username: "paulg", name: "Paul Graham" },
    metrics: { like_count: 2100, reply_count: 190, retweet_count: 40, quote_count: 22 },
    url: "https://x.com/paulg",
  },
];

function randomDelayMinutes(idx: number): number {
  // Spread initial batch across the last ~18 hours, deterministic by index.
  return (idx * 47) % 1080;
}

export function generateSeedPosts(count: number, startIndex = 0): XPost[] {
  const now = Date.now();
  const posts: XPost[] = [];
  for (let i = 0; i < count; i++) {
    const poolIdx = (startIndex + i) % SEED_TEMPLATES.length;
    const t = SEED_TEMPLATES[poolIdx];
    const ageMin = randomDelayMinutes(startIndex + i);
    const createdAt = new Date(now - ageMin * 60_000).toISOString();
    posts.push({
      id: `seed-${t.author.username}-${startIndex + i}-${now.toString(36)}`,
      text: t.text,
      created_at: createdAt,
      author: t.author,
      metrics: t.metrics,
      url: t.url,
    });
  }
  return posts;
}

export const SEED_POSTS: XPost[] = generateSeedPosts(SEED_TEMPLATES.length);
