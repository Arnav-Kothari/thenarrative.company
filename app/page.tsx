"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"thesis" | "about" | null>("thesis");

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Navigation Links */}
        <nav className="flex justify-center gap-16 mb-16">
          <button
            onClick={() => setActiveSection(activeSection === "thesis" ? null : "thesis")}
            className={`text-lg font-medium transition-colors ${
              activeSection === "thesis"
                ? "text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Our Thesis
          </button>
          <button
            onClick={() => setActiveSection(activeSection === "about" ? null : "about")}
            className={`text-lg font-medium transition-colors ${
              activeSection === "about"
                ? "text-black underline underline-offset-4"
                : "text-gray-600 hover:text-black"
            }`}
          >
            About Us
          </button>
        </nav>

        {/* Content Area */}
        {activeSection && (
          <article className="max-w-2xl mx-auto">
            {activeSection === "thesis" && (
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-8">
                  "The best way to predict the future is to invent it." - Alan Kay
                </blockquote>

                <p>
                  For most of modern corporate history, communication flowed through layers of media.
                </p>

                <p>
                  Companies built. Media distributed. Audiences consumed.
                </p>

                <p>
                  That structure made sense when distribution was scarce and attention was centralized.
                </p>

                <p>
                  Today, social platforms, podcasts, newsletters, and developer communities have collapsed the distance between builders and their audience.
                </p>

                <p>
                  Companies build. Employees distribute. Audiences consume.
                </p>

                <p>Here's what changed.</p>

                <h2 className="text-2xl font-bold text-black mt-12 mb-6">
                  The cost of translation has collapsed.
                </h2>

                <p>
                  Companies have always created value in long-form.
                </p>

                <p>
                  Products are complex. Releases are nuanced. Systems take time to explain.
                </p>

                <p>
                  That has never changed, and it never will.
                </p>

                <p>
                  What has changed is the cost of translation.
                </p>

                <p>
                  Historically, long-form ideas were locked inside dense formats: PRDs, whitepapers, earnings decks, press releases. Turning that depth into something digestible required intermediaries. Journalists, editors, producers. Distribution was expensive, slow, and gated.
                </p>

                <p>
                  Short-form was not something companies could easily build on.
                </p>

                <p>
                  It required media to slice, frame, and package meaning for the public.
                </p>

                <p>
                  That constraint is gone.
                </p>

                <p>
                  Today, short-form is cheap, flexible, and programmable.
                </p>

                <p>
                  A single product release can now be decomposed into dozens of surface areas: screenshots, diagrams, threads, demos, quotes, clips. Each one exposes a different "endpoint" for understanding, tuned to a specific audience and context.
                </p>

                <p>
                  Short-form is not a downgrade of depth.
                </p>

                <p>
                  It is a compression layer that lets depth travel.
                </p>

                <p>
                  But that layer is unstable by design.
                </p>

                <p>
                  Images outperform text on LinkedIn today. They didn't a year ago.
                </p>

                <p>
                  Threads give way to screenshots. Screenshots to clips. Clips to diagrams.
                </p>

                <p>
                  The dominant unit of meaning keeps shifting.
                </p>

                <p>
                  Creators notice this first because they are forced to.
                </p>

                <p>
                  They live inside the platforms.
                </p>

                <p>
                  They adapt or disappear.
                </p>

                <p>
                  Most companies are still producing excellent long-form work and hoping someone else will translate it into the formats that move.
                </p>

                <p>
                  That "someone else" used to be journalists.
                </p>

                <p>
                  Then it became corporate comms.
                </p>

                <p>
                  Today, the leverage has moved closer to the source.
                </p>

                <p>
                  The teams building the product now have the tools to expose it directly, continuously, and in public.
                </p>

                <p>
                  The only missing piece is knowing how to do that translation well, in real time, on platforms that reward speed, specificity, and relevance.
                </p>

                <p>
                  That is the shift.
                </p>

                <h2 className="text-2xl font-bold text-black mt-12 mb-6">
                  The middle-man has moved inside the company.
                </h2>

                <p>
                  In the past, products moved slowly, and audiences discovered them even more slowly.
                </p>

                <p>
                  A release could take months to matter.
                </p>

                <p>
                  Feedback arrived through sales calls, keynote events, analysts, or quarterly reports.
                </p>

                <p>
                  There was time for distance between building and explaining.
                </p>

                <p>
                  That world is gone.
                </p>

                <p>
                  Software now ships continuously.
                </p>

                <p>
                  AI has collapsed development cycles.
                </p>

                <p>
                  Competitors release similar capabilities weeks apart, sometimes days.
                </p>

                <p>
                  In this environment, explanation cannot lag creation.
                </p>

                <p>
                  Builders understand intent.
                </p>

                <p>
                  They understand tradeoffs.
                </p>

                <p>
                  They know what surprised them, what broke, and what didn't work.
                </p>

                <p>
                  What they often lack is not insight, but a framework for sharing that insight in a way that travels.
                </p>

                <p>
                  The companies with the most mindshare didn't respond by speaking louder.
                </p>

                <p>
                  They responded by speaking closer.
                </p>

                <p>
                  They didn't centralize their voice.
                </p>

                <p>
                  They multiplied it.
                </p>

                <p>
                  Engineers, researchers, designers, and product leads began explaining their work directly, in public, as it evolved.
                </p>

                <p>
                  Not as marketing.
                </p>

                <p>
                  As explanation.
                </p>

                <p>
                  This shift matters because speed has changed the role of distribution.
                </p>

                <p>
                  Distribution is no longer just about awareness.
                </p>

                <p>
                  It is about coordination.
                </p>

                <p>
                  When builders speak in public, they don't just describe products.
                </p>

                <p>
                  They create micro-communities around them.
                </p>

                <p>
                  Those communities test features immediately.
                </p>

                <p>
                  They surface edge cases faster than any internal QA process.
                </p>

                <p>
                  They generate feedback loops that keep pace with development speed.
                </p>

                <p>
                  People who care deeply about a product want proximity to the people building it.
                </p>

                <p>
                  That desire isn't new.
                </p>

                <p>
                  What's new is how critical it has become.
                </p>

                <p>
                  When alternatives are one click away and competitors are shipping just as fast, trust becomes the differentiator.
                </p>

                <p>
                  That trust is built through interaction.
                </p>

                <p>
                  When a builder replies to a comment, answers a question, or acknowledges a use case, the dynamic changes.
                </p>

                <p>
                  The user stops being a passive consumer.
                </p>

                <p>
                  They become involved.
                </p>

                <p>
                  Involvement compounds into trust.
                </p>

                <p>
                  Trust compounds into advocacy.
                </p>

                <p>
                  This is how distribution becomes a competitive advantage in fast-moving markets.
                </p>

                <p>
                  Not through reach alone.
                </p>

                <p>
                  But through feedback loops, created in real-time.
                </p>

                <h2 className="text-2xl font-bold text-black mt-12 mb-6">
                  The opportunity.
                </h2>

                <p>
                  Every great company already has its most powerful distribution engine inside it.
                </p>

                <p>
                  When builders learn how to translate their work into platform-native narratives, companies gain durable brand awareness.
                </p>

                <p>
                  Micro-communities form around real work.
                </p>

                <p>
                  Feedback loops tighten.
                </p>

                <p>
                  Retention improves.
                </p>

                <p>
                  The brand becomes something people feel connected to, not marketed at.
                </p>

                <h2 className="text-2xl font-bold text-black mt-12 mb-6">
                  What we do.
                </h2>

                <p>
                  We operate where narrative power has actually shifted.
                </p>

                <p>
                  Not campaigns. Not press cycles.
                </p>

                <p>
                  X and LinkedIn.
                </p>

                <p>
                  These are no longer "social channels."
                </p>

                <p>
                  They are the primary interface between builders, buyers, media, and talent.
                </p>

                <p>
                  This is where trust is earned in public.
                </p>

                <p>
                  Where beliefs are formed before a sales call happens.
                </p>

                <p>
                  Where brand awareness compounds quietly, over time, through repetition and relevance.
                </p>

                <p>
                  Most leaders already post.
                </p>

                <p>
                  But posting is treated like hygiene.
                </p>

                <p>
                  A thing to do, not a system to win.
                </p>

                <p>
                  So it becomes a cost center.
                </p>

                <p>
                  Low conviction. Low signal. No feedback loop.
                </p>

                <p>
                  The problem isn't effort.
                </p>

                <p>
                  It's execution.
                </p>

                <p>
                  Winning on X and LinkedIn requires an execution-level understanding of:
                </p>

                <ul className="list-none space-y-2 my-4">
                  <li>– what formats actually travel</li>
                  <li>– what language triggers response from the right people</li>
                  <li>– how conversations propagate across micro-communities</li>
                  <li>– when to speak, when to reply, and when to stay silent</li>
                  <li>– how platforms reward behavior week to week, not year to year</li>
                </ul>

                <p>
                  We live inside those dynamics.
                </p>

                <p>
                  We help founders and senior operators build personal brands that feel human, precise, and native to the platforms they're on.
                </p>

                <p>
                  Not polished. Not over-managed.
                </p>

                <p className="mt-12">
                  Talk to us by <a href="mailto:aadit@thenarrative.company" className="text-blue-600 underline hover:text-blue-800">email</a>
                </p>
              </div>
            )}

            {activeSection === "about" && (
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>
                  <span className="font-semibold">Aadit:</span> writes about software and generates 1B views a year on X and LinkedIn.
                </p>
                <p>
                  <span className="font-semibold">Arnav:</span> built software inside a legacy family business, generating $20M a year in revenue.
                </p>
                <p>
                  <span className="font-semibold">Together:</span> we want to give builders a voice inside their companies.
                </p>
                <img
                  src="/team.jpg"
                  alt="Aadit and Arnav"
                  className="w-full max-w-md mx-auto rounded-lg mt-8"
                />

                <p className="mt-8">
                  We work with Fortune 100–500 technology companies to help them capture the gap between value and mindshare.
                </p>

                <p className="mt-12">
                  Talk to us by <a href="mailto:aadit@thenarrative.company" className="text-blue-600 underline hover:text-blue-800">email</a>
                </p>
              </div>
            )}
          </article>
        )}
      </main>
    </div>
  );
}
