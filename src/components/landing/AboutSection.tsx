"use client";
import Image from "next/image";

export default function AboutSection() {
  const openBrochureLink = () => {
    void window.open(
      "https://drive.google.com/file/d/YOUR_FILE_ID/view",
      "_blank",
    );
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#763023] px-4 py-20 font-sans md:px-10">
      {/* Top Decorative Border Simulation */}
      <div
        className="absolute top-0 left-0 z-10 flex h-[120px] w-full drop-shadow-md"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15px -5px, transparent 15px, white 16px, white 20px, #427546 21px)",
          backgroundSize: "30px 30px",
          backgroundRepeat: "repeat-x",
        }}
      >
        <Image
          src="/landing/ribbon.png"
          alt="Navbar Ribbon"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Decorative Stamps - ABOUT NITS */}
      <div
        className="relative z-20 mt-10 flex items-center justify-center md:mt-16"
        style={{ minHeight: "160px" }}
      >
        {/* ABOUT Stamp */}
        <div className="relative z-30 mr-[-8px] w-[100px] rotate-[-12deg] drop-shadow-xl transition-transform duration-300 sm:mr-[-20px] sm:w-[220px] md:mr-[-40px] md:w-[270px] lg:w-[320px]">
          <img
            src="/landing/stamp.png"
            alt="Stamp"
            className="relative z-0 h-auto w-full"
          />
          <div className="absolute top-[16%] right-[10%] bottom-[16%] left-[10%] z-10 rotate-[7deg] bg-[#D59115] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]"></div>
          <div className="pointer-events-none absolute inset-0 z-20 flex rotate-[-1.5deg] items-center justify-center">
            <h2
              className="pt-2 text-[25px] leading-none font-black tracking-[0.08em] text-black sm:text-[36px] md:text-[42px] lg:text-[48px]"
              style={{ fontFamily: "Naluka, sans-serif" }}
            >
              ABOUT
            </h2>
          </div>
        </div>

        {/* NITS Stamp — overlaps the first */}
        <div className="relative z-20 mt-8 mr-[-30px] w-[100px] rotate-[8deg] drop-shadow-xl sm:w-[220px] md:mt-16 md:mr-[-50px] md:w-[270px] lg:w-[320px]">
          <img
            src="/landing/stamp.png"
            alt="Stamp"
            className="relative z-0 h-auto w-full"
          />
          <div className="absolute top-[16%] right-[10%] bottom-[16%] left-[10%] z-10 rotate-[5deg] bg-[#D59115] shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)]"></div>
          <div className="pointer-events-none absolute inset-0 z-20 flex rotate-[5deg] items-center justify-center">
            <h2
              className="pt-2 text-[25px] leading-none font-black tracking-[0.08em] text-black sm:text-[26px] md:text-[42px] lg:text-[48px]"
              style={{ fontFamily: "Naluka, sans-serif" }}
            >
              NITS
            </h2>
          </div>
        </div>
      </div>

      {/* BIG FRAME WITH DECORATIVE GODDESSES */}
      <div className="relative z-20 mt-16 flex w-full items-center justify-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] sm:max-w-[85%] md:max-w-[750px] lg:max-w-[880px] xl:max-w-[980px] 2xl:max-w-[1050px]">
        {/* Left Goddess (Facing Center) */}
        <div className="pointer-events-none absolute -bottom-[15%] -left-[10%] z-30 w-[120px] sm:-left-[16%] sm:w-[160px] md:-bottom-[20%] md:-left-[20%] md:w-[210px] lg:-bottom-[22%] lg:-left-[22%] lg:w-[250px] xl:w-[280px]">
          <Image
            src="/landing/pic2.png"
            alt="Left Art Goddess"
            width={400}
            height={400}
            className="h-auto w-full scale-x-[-1] drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Goddess (Facing Center) */}
        <div className="pointer-events-none absolute -top-[15%] -right-[10%] z-30 w-[120px] sm:-right-[16%] sm:w-[160px] md:-top-[20%] md:-right-[20%] md:w-[210px] lg:-top-[22%] lg:-right-[22%] lg:w-[250px] xl:w-[280px]">
          <Image
            src="/landing/pic2.png"
            alt="Right Art Goddess"
            width={400}
            height={400}
            className="h-auto w-full drop-shadow-2xl"
            priority
          />
        </div>

        {/* The Frame Image */}
        <div className="relative z-10 inline-block w-full max-w-full">
          {/* Dark Background panel sliding cleanly BEHIND the transparent hole of the wood frame */}
          <div className="absolute top-[3%] right-[2%] bottom-[3%] left-[2%] z-0 rounded-sm bg-[#331818]" />

          {/* The Outer Wood Frame image with transparent center */}
          <img
            src="/events/big2.png"
            alt="outer-frame"
            className="pointer-events-none relative z-10 block h-auto w-full"
          />

          {/* Text Content Boundary matching the chalkboard safe-area exactly */}
          <div className="absolute top-[10%] right-[8%] bottom-[10%] left-[8%] z-20 flex flex-col items-center justify-center overflow-hidden p-2 sm:p-4 md:top-[12%] md:right-[10%] md:bottom-[12%] md:left-[10%] md:px-8">
            <div className="custom-scrollbar flex h-full w-full items-center justify-center overflow-y-auto">
              <p className="font-Questrial w-full pb-1 text-justify text-[12px] leading-[1.6] tracking-wide text-[#FFFFFF] sm:text-[14px] md:text-[16px] md:leading-relaxed lg:text-[19px] lg:leading-[2] xl:text-xl xl:leading-[2.2] 2xl:text-2xl">
                A bright future requires a bright start. NITS abides by this
                mantra. The institute believes in equipping students with the
                knowledge and skills in their chosen streams, inculcate values,
                identify hidden talents, and provide opportunities for students
                to realize their full potential. It facilitates the requisite
                support and encouragement via various cultural and academic
                activities to shape the body and soul. It has transformed into a
                sought out centre of learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Button */}
      <div
        className="relative z-20 mt-10 mb-10 cursor-pointer transition-transform hover:scale-[1.03] md:mt-28"
        onClick={openBrochureLink}
      >
        <div className="relative flex items-center justify-center border-[6px] border-[#8a6316] bg-[#D89F19] px-10 py-2 sm:py-3 md:border-[6px] md:px-20 md:py-4">
          <span
            className="mt-2 w-full text-center text-2xl leading-none font-black tracking-[0.08em] text-black md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Naluka" }}
          >
            BROCHURE
          </span>
        </div>
      </div>
    </section>
  );
}
