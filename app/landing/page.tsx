export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08090a]">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        {/* Gradient background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Transparent Nav */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-20">
          <span className="text-[13px] font-medium tracking-[0.15em] uppercase text-white/70">
            The Narrative Company
          </span>
          <div className="hidden md:flex items-center gap-1">
            {["Thesis", "Services", "Results", "Team"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-medium text-white/50 px-4 py-2 rounded-[4px] hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:aadit@thenarrative.company"
            className="bg-[#f8f8f8] text-[#171717] font-medium text-[13px] px-5 py-2 rounded-[2px] hover:bg-white transition-colors"
          >
            Talk to us
          </a>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Liquid glass badge */}
          <div className="inline-flex mb-10 bg-white/[0.06] backdrop-blur-sm rounded-full p-1">
            <div className="bg-white/[0.08] backdrop-blur-md rounded-full px-5 py-1.5 border border-white/10">
              <span className="text-white/70 text-[12px] font-medium tracking-[0.1em] uppercase">
                Executive Social Advisory
              </span>
            </div>
          </div>

          {/* Headline with corner accents */}
          <div className="relative inline-block">
            {/* Corner accents */}
            <span className="absolute -top-4 -left-6 w-[7px] h-[7px] bg-white/30" />
            <span className="absolute -top-4 -right-6 w-[7px] h-[7px] bg-white/30 hidden md:block" />

            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-light leading-[1.08] mb-10 tracking-[-0.02em] text-white">
              Your company creates
              <br />
              enormous value.
              <br />
              <span
                className="italic text-white/85"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The world should know.
              </span>
            </h1>

            <span className="absolute -bottom-2 -left-6 w-[7px] h-[7px] bg-white/30" />
          </div>

          <p className="text-[17px] md:text-[19px] text-white/40 max-w-[540px] mb-12 leading-relaxed font-light">
            We build the systems that turn company moments into durable public
            mindshare. For Fortune 500 technology leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="mailto:aadit@thenarrative.company"
              className="inline-flex items-center gap-3 bg-[#f8f8f8] text-[#171717] text-[14px] font-medium px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 text-white/50 text-[14px] font-medium px-7 py-3.5 border border-white/10 rounded-[2px] hover:bg-white/5 hover:text-white/70 transition-all"
            >
              Read our thesis
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20" />
        </div>
      </section>

      {/* ============================================= */}
      {/* THE SHIFT                                     */}
      {/* ============================================= */}
      <section id="thesis" className="relative bg-[#0d0e10] text-white py-28 md:py-40 px-6 md:px-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="max-w-[680px] mx-auto">
          {/* Section label with glass pill */}
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              The Shift
            </span>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-normal leading-[1.15] mb-14 italic text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Distribution moved inside the company.
          </h2>
          <div className="space-y-6 text-white/50 text-[17px] leading-[1.75]">
            <p>
              For most of corporate history, communication flowed through layers
              of media. Companies built. Media distributed. Audiences consumed.
            </p>
            <p>
              That structure made sense when distribution was scarce and
              attention was centralized.
            </p>
            <p>
              Today, social platforms have collapsed the distance between
              builders and their audience. The cost of translating complex work
              into formats that travel has dropped to near zero. Short-form is
              no longer a downgrade of depth — it is a compression layer that
              lets depth travel.
            </p>
            <p>
              But most companies are still producing excellent work and hoping
              someone else will translate it. That someone used to be
              journalists. Then corporate comms.
            </p>
            <p>
              Today, the leverage has moved closer to the source. The teams
              building the product have the tools to expose it directly,
              continuously, and in public.
            </p>
            <p className="text-white/80 font-medium">
              The only missing piece is knowing how to do it well.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHAT WE DO                                    */}
      {/* ============================================= */}
      <section id="services" className="relative bg-[#08090a] text-white py-28 md:py-40 px-6 md:px-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(120,119,198,0.06),transparent)]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              What We Do
            </span>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-normal leading-[1.15] mb-20 italic text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            We build executive presence
            <br className="hidden sm:block" /> on X and LinkedIn.
          </h2>

          {/* Glass cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Moments",
                desc: "High-impact content built around your most important events — product launches, earnings, keynotes, org changes. Each one meticulously planned and orchestrated for maximum reach.",
              },
              {
                title: "Amplification",
                desc: "Coordinated distribution across influencer networks, C-suite voices, corporate accounts, and internal teams. Not broadcasting. Cascading — designed so every reshare extends the moment\u2019s surface area.",
              },
              {
                title: "Intelligence",
                desc: "Platform-native strategy informed by real-time algorithm dynamics, engagement data, and a network of 10,000+ influential voices. We know what formats travel, what language triggers response, and when to speak.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2px] p-8 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group"
              >
                {/* Corner accents */}
                <span className="absolute top-3 left-3 w-[5px] h-[5px] bg-white/20 group-hover:bg-white/40 transition-colors" />
                <span className="absolute top-3 right-3 w-[5px] h-[5px] bg-white/20 group-hover:bg-white/40 transition-colors" />
                <span className="absolute bottom-3 left-3 w-[5px] h-[5px] bg-white/20 group-hover:bg-white/40 transition-colors" />
                <span className="absolute bottom-3 right-3 w-[5px] h-[5px] bg-white/20 group-hover:bg-white/40 transition-colors" />

                <h3 className="text-[14px] font-semibold tracking-[0.1em] uppercase mb-5 text-white/80">
                  {card.title}
                </h3>
                <p className="text-white/40 text-[15px] leading-[1.75]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* HOW WE WORK                                   */}
      {/* ============================================= */}
      <section className="relative bg-[#0d0e10] text-white py-28 md:py-40 px-6 md:px-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="max-w-[680px] mx-auto">
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              How We Work
            </span>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-normal leading-[1.15] mb-14 italic text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Not an agency. An operating system.
          </h2>
          <div className="space-y-6 text-white/50 text-[17px] leading-[1.75]">
            <p>
              Most social strategies fail because they treat distribution like
              hygiene — a thing to do, not a system to win.
            </p>
            <p>We don&#39;t run campaigns. We don&#39;t manage your social.</p>
            <p>
              We embed alongside your team and build a distribution engine that
              compounds over time. Real-time execution. Platform-native formats.
              Data-driven iteration.
            </p>
            <p className="text-white/80 font-medium">
              Every post, reply, and moment is part of a larger system designed
              to earn trust in public.
            </p>
          </div>

          {/* Process steps with glass treatment */}
          <div className="mt-20">
            {[
              {
                num: "01",
                title: "Understand your narrative",
                desc: "We study your company, your market, and what your leadership actually believes. We find the throughline that connects product, vision, and public conversation.",
              },
              {
                num: "02",
                title: "Map the surface area",
                desc: "Every event, launch, and inflection point becomes a distribution opportunity. We build the timeline, identify the right voices, and plan the cascade.",
              },
              {
                num: "03",
                title: "Execute in real-time",
                desc: "Platform-native content. Influencer outreach. Corporate coordination. Employee amplification. Each moment is orchestrated, measured, and iterated on.",
              },
              {
                num: "04",
                title: "Compound over time",
                desc: "Trust is not built in a single post. We create systems that let mindshare accumulate — so every moment builds on the last.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex gap-6 md:gap-8 py-8 border-t border-white/[0.06] first:border-t-0 group"
              >
                <span className="text-[13px] font-medium text-white/15 pt-0.5 shrink-0 group-hover:text-white/30 transition-colors">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white/75 mb-2 group-hover:text-white/90 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-[15px] leading-[1.7]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* RESULTS                                       */}
      {/* ============================================= */}
      <section id="results" className="relative bg-[#08090a] text-white py-28 md:py-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        {/* Glow behind metrics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              Results
            </span>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-normal leading-[1.15] mb-20 italic text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A single moment, orchestrated.
          </h2>

          {/* Glass metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                num: "350K",
                desc: "impressions on a single orchestrated moment — the highest in 12 months",
              },
              {
                num: "10K",
                desc: "LinkedIn engagements on a single executive post",
              },
              {
                num: "70+",
                desc: "influencers activated across X in a single coordinated push",
              },
              {
                num: "27%",
                desc: "of total reach driven by orchestrated quote reshares alone",
              },
            ].map((metric) => (
              <div
                key={metric.num}
                className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2px] p-6 md:p-8"
              >
                <span className="absolute top-3 left-3 w-[5px] h-[5px] bg-white/15" />
                <span className="absolute top-3 right-3 w-[5px] h-[5px] bg-white/15" />
                <p className="text-[36px] md:text-[48px] font-light leading-none mb-4 tracking-[-0.02em] text-white/90">
                  {metric.num}
                </p>
                <p className="text-white/30 text-[13px] leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] pt-8">
            <p className="text-white/20 text-[14px]">
              Organic pickup by TechCrunch and Business Insider. No paid
              promotion.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHY THIS MATTERS                              */}
      {/* ============================================= */}
      <section className="relative bg-[#0d0e10] text-white py-28 md:py-40 px-6 md:px-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="max-w-[680px] mx-auto">
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              Why This Matters
            </span>
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-normal leading-[1.15] mb-14 italic text-white/90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Trust is the new moat.
          </h2>
          <div className="space-y-6 text-white/50 text-[17px] leading-[1.75]">
            <p>
              When alternatives are one click away and competitors ship just as
              fast, trust becomes the differentiator.
            </p>
            <p>
              That trust is built through interaction. When a leader replies to a
              comment, answers a question, or acknowledges a use case — the
              dynamic changes. The audience stops being passive. They become
              involved.
            </p>
            <p>
              Involvement compounds into trust. Trust compounds into advocacy.
            </p>
            <p>
              This is how distribution becomes a competitive advantage in
              fast-moving markets. Not through reach alone — but through
              feedback loops, created in real-time.
            </p>
            <p className="text-white/80 font-medium">
              Every great company already has its most powerful distribution
              engine inside it. We help you turn it on.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TEAM                                          */}
      {/* ============================================= */}
      <section id="team" className="relative bg-[#08090a] text-white py-28 md:py-40 px-6 md:px-12">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex mb-10 bg-white/[0.04] backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/[0.06]">
            <span className="text-white/40 text-[11px] font-medium tracking-[0.25em] uppercase">
              The Team
            </span>
          </div>

          {/* Photo with corner accents */}
          <div className="relative inline-block mb-16">
            <span className="absolute -top-2 -left-2 w-[7px] h-[7px] bg-white/25" />
            <span className="absolute -top-2 -right-2 w-[7px] h-[7px] bg-white/25" />
            <span className="absolute -bottom-2 -left-2 w-[7px] h-[7px] bg-white/25" />
            <span className="absolute -bottom-2 -right-2 w-[7px] h-[7px] bg-white/25" />
            <img
              src="/team.jpg"
              alt="Aadit Sheth and Arnav Kothari"
              className="w-full max-w-[640px] rounded-[2px]"
            />
          </div>

          {/* Glass bio cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2px] p-8">
              <span className="absolute top-3 left-3 w-[5px] h-[5px] bg-white/15" />
              <span className="absolute top-3 right-3 w-[5px] h-[5px] bg-white/15" />
              <h3 className="text-[16px] font-semibold mb-4 text-white/80">
                Aadit Sheth
              </h3>
              <p className="text-white/40 text-[15px] leading-[1.75]">
                Writes about software and technology. Generates 1B+ views per
                year across X and LinkedIn. Lives inside the platforms —
                understands what travels, what triggers response, and how
                conversations propagate across micro-communities.
              </p>
            </div>
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2px] p-8">
              <span className="absolute top-3 left-3 w-[5px] h-[5px] bg-white/15" />
              <span className="absolute top-3 right-3 w-[5px] h-[5px] bg-white/15" />
              <h3 className="text-[16px] font-semibold mb-4 text-white/80">
                Arnav Kothari
              </h3>
              <p className="text-white/40 text-[15px] leading-[1.75]">
                Tufts CS. Ex EY-Parthenon. Built and scaled technology systems
                inside a multi-generational enterprise across five countries.
                Brings operational rigor, data infrastructure, and strategic
                precision to every engagement.
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-10">
            <p className="text-white/50 text-[17px] leading-[1.75] max-w-[560px]">
              We sit at the intersection of creator-native distribution and
              enterprise operations. We give Fortune 500 leaders a voice that
              feels human, earns trust, and compounds into durable mindshare.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER CTA                                    */}
      {/* ============================================= */}
      <footer className="relative bg-[#08090a] text-white py-32 md:py-44 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        {/* CTA glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.06),transparent)]" />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Corner accents on CTA block */}
          <div className="relative inline-block px-6 py-4">
            <span className="absolute top-0 left-0 w-[7px] h-[7px] bg-white/20" />
            <span className="absolute top-0 right-0 w-[7px] h-[7px] bg-white/20" />
            <span className="absolute bottom-0 left-0 w-[7px] h-[7px] bg-white/20" />
            <span className="absolute bottom-0 right-0 w-[7px] h-[7px] bg-white/20" />

            <h2
              className="text-[32px] md:text-[48px] font-normal leading-[1.15] italic text-white/90"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Close the gap between
              <br />
              value and mindshare.
            </h2>
          </div>

          <div className="mt-12 mb-20">
            <a
              href="mailto:aadit@thenarrative.company"
              className="inline-flex items-center gap-3 bg-[#f8f8f8] text-[#171717] text-[14px] font-medium px-8 py-4 rounded-[2px] hover:bg-white transition-colors"
            >
              aadit@thenarrative.company
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-[13px]">
              We work with Fortune 100-500 technology companies.
            </p>
            <p className="text-white/20 text-[13px]">
              &copy; 2026 The Narrative Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
