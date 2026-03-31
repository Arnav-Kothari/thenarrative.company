export default function LogoisumPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background — no overlays, no filters */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Transparent Navigation */}
          <nav className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-6 py-5">
            <span className="font-bold text-[20px] tracking-[-0.5px] text-white">
              Logoisum
            </span>

            <div className="hidden md:flex items-center gap-1">
              {["About", "Works", "Services", "Testimonial"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-[14px] text-white px-4 py-2 rounded-[4px] hover:bg-white/10 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#book"
              className="bg-[#f8f8f8] text-[#171717] font-medium text-[14px] px-5 py-2.5 rounded-[2px] hover:bg-white transition-colors"
            >
              Book A Free Meeting
            </a>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-[250px]">
            {/* Featured in Fortune Badge — liquid glass effect */}
            <div className="mb-10 bg-white/10 backdrop-blur-sm rounded-full p-1.5">
              <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-1.5">
                <span className="text-[#171717] text-[13px] font-medium tracking-wide">
                  Featured in Fortune
                </span>
              </div>
            </div>

            {/* Content Container with Corner Accents */}
            <div className="relative px-8 py-8 sm:px-12 sm:py-10">
              {/* Four corner accents — 7x7 solid white squares */}
              <span className="absolute top-0 left-0 w-[7px] h-[7px] bg-white" />
              <span className="absolute top-0 right-0 w-[7px] h-[7px] bg-white" />
              <span className="absolute bottom-0 left-0 w-[7px] h-[7px] bg-white" />
              <span className="absolute bottom-0 right-0 w-[7px] h-[7px] bg-white" />

              {/* Headline */}
              <h1 className="mb-6">
                <span className="block font-light text-white text-[36px] sm:text-[52px] md:text-[64px] leading-[1.15]">
                  Agency that makes your
                </span>
                <span
                  className="block italic text-white text-[36px] sm:text-[52px] md:text-[64px] leading-[1.15]"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  videos & reels viral
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="max-w-[460px] mx-auto text-white/75 text-[16px] md:text-[17px] font-normal leading-relaxed mb-10">
                Short-form video editing that helps Influencers, Creators, and
                Brands cut through the noise and own their audience&#39;s attention.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#workreel"
                  className="inline-flex items-center gap-2.5 bg-[#f8f8f8] text-[#171717] font-medium text-[15px] px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M0 0L12 7L0 14V0Z" fill="#171717" />
                  </svg>
                  See Our Workreel
                </a>
                <a
                  href="#book"
                  className="inline-flex items-center bg-[#f8f8f8] text-[#171717] font-medium text-[15px] px-7 py-3.5 rounded-[2px] hover:bg-white transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
