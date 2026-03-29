import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-screen overflow-hidden">

      {/* Main Full-Cover Background */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <Image src="/landing/heroBg.png" alt="Hero Background" fill className="object-cover object-center" priority />
      </div>

      {/* Clouds (Spread on mobile, Unified ceiling on desktop) */}
      <img src="/landing/cloud5.png" alt="Cloud" className="absolute top-[5%] sm:top-[2%] md:top-[8%] left-1/2 -translate-x-1/2 w-[130%] sm:w-[70%] md:w-[45%] max-w-[650px] z-[16] opacity-95 pointer-events-none drop-shadow-sm" />

      {/* Cloud 1 - Now hidden on mobile, visible on sm and up */}
      <img src="/landing/cloud1.png" alt="Cloud" className="hidden sm:block absolute top-[28%] md:top-[8%] left-[-30%] sm:left-[-10%] md:left-[0%] w-[90%] sm:w-[90%] md:w-[45%] max-w-[700px] z-[2] md:z-[15] opacity-90 pointer-events-none" />

      <img src="/landing/cloud6.png" alt="Cloud" className="absolute top-[2%] md:top-[8%] right-[-20%] sm:right-[-10%] md:right-[5%] w-[80%] sm:w-[80%] md:w-[35%] max-w-[550px] z-[2] md:z-[15] opacity-90 pointer-events-none" />
      <img src="/landing/cloud3.png" alt="Cloud" className="absolute top-[70%] sm:top-[15%] md:top-[15%] left-[-10%] sm:left-[20%] md:left-[25%] w-[80%] sm:w-[60%] md:w-[30%] max-w-[450px] z-[2] md:z-[15] opacity-80 pointer-events-none" />
      {/* Background Sticks */}
      <img src="/landing/stick 3.png" alt="Stick" className="absolute top-[35%] md:top-[30%] left-[-10%] md:left-[-2%] w-[25%] md:w-[15%] h-[30%] md:h-[50%] z-[5] object-contain rotate-[-15deg] opacity-90" />
      <img src="/landing/stick 4.png" alt="Stick" className="absolute top-[35%] md:top-[30%] right-[-10%] md:right-[0%] w-[25%] md:w-[12%] h-[30%] md:h-[60%] z-[5] object-contain rotate-[20deg] opacity-90" />

      {/* Center Badge */}
      <div className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 w-[75vw] sm:w-[60vw] md:w-[38vw] max-w-[850px] min-w-[280px] md:min-w-[380px] z-[12] drop-shadow-2xl">
        <Image src="/landing/oikyotaanHandle.png" alt="Oikyotaan Badge" width={10000} height={1000} className="hero-wiggle-alt w-full h-auto object-contain" priority />
      </div>

      {/* Left Artwork */}
      <div className="absolute top-[32%] md:top-[18%] left-[-1%] md:left-[5%] w-[45vw] sm:w-[40vw] md:w-[25vw] max-w-[450px] min-w-[170px] md:min-w-[280px] z-[10] drop-shadow-2xl">
        <img src="/landing/leftImage.png" alt="Art Left" className="hero-wiggle w-full h-auto object-contain" />
      </div>

      {/* Right Artwork */}
      <div className="absolute top-[32%] md:top-[18%] right-[-1%] md:right-[5%] w-[45vw] sm:w-[40vw] md:w-[28vw] max-w-[450px] min-w-[170px] md:min-w-[280px] z-[10] drop-shadow-2xl">
        <img src="/landing/rightImage.png" alt="Art Right" className="hero-wiggle-slow w-full h-auto object-contain" />
      </div>

      {/* Front Clouds Overlaying Elements */}
      {/* <img src="/landing/cloud4.png" alt="Cloud" className="absolute top-[50%] md:top-[60%] right-[0%] md:right-[20%] w-[70%] md:w-[30%] max-w-[500px] z-[15] opacity-90 pointer-events-none" /> */}
      {/* <img src="/landing/cloud3.png" alt="Cloud" className="absolute top-[50%] md:top-[50%] left-[-10%] md:left-[10%] w-[80%] md:w-[35%] max-w-[600px] z-[15] opacity-95 pointer-events-none" /> */}

      {/* Bottom Cab */}
      <div className="absolute bottom-[1%] md:bottom-[4%] left-1/2 -translate-x-1/2 w-[50vw] sm:w-[50vw] md:w-[30vw] max-w-[500px] min-w-[220px] md:min-w-[320px] z-[20] drop-shadow-xl">
        <img src="/landing/cab.png" alt="Vintage Taxi" className="hero-wiggle-cab w-full h-auto object-contain" />
      </div>

      {/* Bottom Decorative Red Strip */}
      <div className="absolute bottom-0 left-0 w-full h-[15px] md:h-[25px] bg-gradient-to-r from-[#7B1113] via-[#D12B2B] to-[#7B1113] z-[50]">
        {/* Leaf pattern overlay if required can be repeated */}
        <div className="w-full h-full opacity-20 bg-repeat-x pointer-events-none" style={{
          backgroundImage: 'url("/landing/flower.png")',
          backgroundSize: 'contain'
        }} />
      </div>

      {/* Wavy bottom element just above the red strip to mimic the transition */}
      <div className="absolute bottom-[15px] md:bottom-[25px] left-0 w-full h-[6px] bg-[#EBD8A9] z-[49]"></div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-[2%] md:bottom-[8%] right-[2%] md:right-[4%] z-[50] flex flex-col items-center animate-bounce text-white drop-shadow-lg">
        <span className="font-bold tracking-widest text-[10px] md:text-sm mb-1 uppercase" style={{ fontFamily: "'Naluka', cursive", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>Scroll down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-8 md:w-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
