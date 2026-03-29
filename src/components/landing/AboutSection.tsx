import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#763023] flex flex-col items-center py-20 px-4 md:px-10 overflow-hidden font-sans">

      {/* Top Decorative Border Simulation */}
      <div className="absolute top-0 left-0 w-full h-[120px] flex drop-shadow-md z-10" style={{ backgroundImage: 'radial-gradient(circle at 15px -5px, transparent 15px, white 16px, white 20px, #427546 21px)', backgroundSize: '30px 30px', backgroundRepeat: 'repeat-x' }}>
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
      <div className="relative mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 z-20 hover:z-30">

        {/* ABOUT Stamp */}
        <div className="relative p-2 bg-white rotate-[-8deg] drop-shadow-xl transition-transform z-20" style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))" }}>
          <div className="absolute -inset-[6px] bg-[#FFFFFF]" style={{ maskImage: "radial-gradient(circle at 8px 8px, transparent 6px, black 6.5px)", maskSize: "16px 16px", maskPosition: "-6px -6px", WebkitMaskImage: "radial-gradient(circle at 6px 6px, transparent 6px, black 6.5px)", WebkitMaskSize: "16px 16px", WebkitMaskPosition: "-6px -6px" }}></div>
          <div className="relative w-full h-full bg-[#E4A01A] px-8 py-6 md:px-8 md:py-10 flex items-center justify-center pointer-events-none">
            <h1
              className="text-black text-2xl md:text-5xl lg:text-6xl leading-none text-center w-full tracking-[0.08em] font-black"
              style={{ fontFamily: "Naluka, sans-serif" }}
            >ABOUT</h1>
          </div>
        </div>

        {/* NITS Stamp */}
        <div className="relative p-2 bg-white rotate-[8deg] md:mt-16 -mt-3 md:-ml-8 drop-shadow-xl transition-transform z-30" style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))" }}>
          <div className="absolute -inset-[6px] bg-[#FFFFFF]" style={{ maskImage: "radial-gradient(circle at 6px 6px, transparent 6px, black 6.5px)", maskSize: "16px 16px", maskPosition: "-6px -6px", WebkitMaskImage: "radial-gradient(circle at 6px 6px, transparent 6px, black 6.5px)", WebkitMaskSize: "16px 16px", WebkitMaskPosition: "-6px -6px" }}></div>
          <div className="relative w-full h-full bg-[#E4A01A] px-8 py-6 md:px-10 md:py-8 flex items-center justify-center pointer-events-none">
            <h1
              className="text-black text-2xl md:text-5xl lg:text-6xl leading-none text-center w-full tracking-[0.04em] font-black"
              style={{ fontFamily: "Naluka, sans-serif" }}
            >NITS</h1>
          </div>
        </div>

      </div>

      {/* BIG FRAME WITH DECORATIVE GODDESSES */}
      <div className="relative w-full sm:max-w-[85%] md:max-w-[750px] lg:max-w-[880px] xl:max-w-[980px] 2xl:max-w-[1050px] z-20 mt-16 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] flex justify-center items-center">

        {/* Left Goddess (Facing Center) */}
        <div className="absolute -left-[10%] sm:-left-[16%] md:-left-[20%] lg:-left-[22%] -bottom-[15%] md:-bottom-[20%] lg:-bottom-[22%] z-30 w-[120px] sm:w-[160px] md:w-[210px] lg:w-[250px] xl:w-[280px] pointer-events-none">
          <Image
            src="/landing/pic2.png"
            alt="Left Art Goddess"
            width={400}
            height={400}
            className="w-full h-auto drop-shadow-2xl scale-x-[-1]"
            priority
          />
        </div>

        {/* Right Goddess (Facing Center) */}
        <div className="absolute -right-[10%] sm:-right-[16%] md:-right-[20%] lg:-right-[22%] -top-[15%] md:-top-[20%] lg:-top-[22%] z-30 w-[120px] sm:w-[160px] md:w-[210px] lg:w-[250px] xl:w-[280px] pointer-events-none">
          <Image
            src="/landing/pic2.png"
            alt="Right Art Goddess"
            width={400}
            height={400}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* The Frame Image */}
        <div className="relative w-full inline-block z-10 w-full max-w-full">

          {/* Dark Background panel sliding cleanly BEHIND the transparent hole of the wood frame */}
          <div className="absolute top-[3%] bottom-[3%] left-[2%] right-[2%] bg-[#331818] z-0 rounded-sm" />

          {/* The Outer Wood Frame image with transparent center */}
          <img
            src="/events/big2.png"
            alt="outer-frame"
            className="block w-full h-auto relative z-10 pointer-events-none"
          />

          {/* Text Content Boundary matching the chalkboard safe-area exactly */}
          <div
            className="absolute z-20 top-[10%] bottom-[10%] left-[8%] right-[8%] md:top-[12%] md:bottom-[12%] md:left-[10%] md:right-[10%] flex flex-col  items-center justify-center p-2 sm:p-4 md:px-8 overflow-hidden"
          >
            <div className="w-full h-full overflow-y-auto custom-scrollbar flex items-center justify-center">
              <p className="text-[#FFFFFF] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[19px] xl:text-xl 2xl:text-2xl leading-[1.6] md:leading-relaxed lg:leading-[2] xl:leading-[2.2] text-justify w-full font-Questrial tracking-wide pb-1">
                A bright future requires a bright start. NITS abides by this mantra. The institute believes in equipping students with the knowledge and skills in their chosen streams, inculcate values, identify hidden talents, and provide opportunities for students to realize their full potential. It facilitates the requisite support and encouragement via various cultural and academic activities to shape the body and soul. It has transformed into a sought out centre of learning.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Brochure Button */}
      <div className="relative mt-10 mb-10 md:mt-28 z-20 hover:scale-[1.03] transition-transform cursor-pointer">
        <div className="relative bg-[#D89F19] border-[6px] md:border-[6px] border-[#8a6316] px-10 md:px-20 py-2 sm:py-3 md:py-4 flex items-center justify-center">
          <span
            className="text-black mt-2 text-2xl md:text-5xl lg:text-6xl leading-none text-center w-full tracking-[0.08em] font-black"
            style={{ fontFamily: "Naluka" }}
          >
            BROCHURE
          </span>
        </div>
      </div>

    </section>
  );
}
