"use client";

export default function SponsorsSection() {
  const sponsors = [
    "https://res.cloudinary.com/dludtk5vz/image/upload/q_auto/f_auto/v1775663931/ccf4d448-51ec-47d3-b2cf-83c99b050a69_noqbwe.jpg",
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#763023] font-sans">
      {/* 🌸 Top Left Decoration */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 w-[200px] opacity-90 sm:w-[280px] md:w-[350px] lg:w-[450px]">
        <img
          src="/landing/flower.png"
          alt="Blossom Branch"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-30 flex w-full flex-grow flex-col items-center justify-center gap-24 py-20 md:gap-40 md:py-32">
        {/* 🏷️ TOP STAMP (TITLE ONLY) */}
        <div className="relative flex flex-col items-center">
          <div className="relative z-20 w-[220px] drop-shadow-xl transition-transform duration-300 hover:scale-105 sm:w-[260px] md:w-[320px] lg:w-[380px]">
            <img
              src="/landing/stamp.png"
              alt="Stamp Background"
              className="relative z-0 h-auto w-full rotate-[-10deg]"
            />

            <div className="absolute top-[16%] right-[10%] bottom-[16%] left-[10%] z-10 rotate-[-1.5deg] bg-[#D59115] shadow-[inner_0_2px_8px_rgba(0,0,0,0.2)]"></div>

            <div className="pointer-events-none absolute inset-0 z-20 flex rotate-[-1.5deg] flex-col items-center justify-center">
              <h1
                className="pt-2 text-[26px] leading-none font-black tracking-[0.08em] text-black sm:pt-4 sm:text-[32px] md:text-[40px] lg:text-[48px]"
                style={{ fontFamily: "Naluka, sans-serif" }}
              >
                SPONSORS
              </h1>
            </div>
          </div>

          {/* 🎐 Decorative Fans */}
          <div className="pointer-events-none absolute right-[-15%] bottom-[-20%] z-30 w-[110px] sm:right-[-20%] sm:w-[140px] md:right-[-25%] md:w-[180px] lg:w-[220px]">
            <img
              src="/landing/baisakhi_pakha.png"
              alt="Baisakhi Fans"
              className="h-auto w-full drop-shadow-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* 💼 MIDDLE STAMP (SPONSOR LOGOS) */}
        <div className="relative flex flex-col items-center">
          <div className="relative z-20 w-[220px] rotate-[1.5deg] drop-shadow-xl transition-transform duration-300 hover:scale-105 sm:w-[260px] md:w-[320px] lg:w-[380px]">
            <img
              src="/landing/stamp.png"
              alt="Stamp Background"
              className="relative z-0 h-auto w-full rotate-[-10deg]"
            />

            {/* Yellow area */}
            <div className="absolute top-[16%] right-[10%] bottom-[16%] left-[10%] z-10 rotate-[-1.25deg] bg-[#ffffff] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]"></div>

            {/*  SPONSOR LOGOS */}
            <div className="absolute inset-0 z-20 flex flex-wrap items-center justify-center gap-3 px-4 py-6 rotate-[-1.25deg]">
              {sponsors.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Sponsor ${i}`}
                  className="h-[80%] w-[80%] object-cover transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
