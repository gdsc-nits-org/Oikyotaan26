import Image from "next/image";

export default function SponsorsSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#763023] flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* Top Left Decoration: Blossom Branch */}
      {/* Positioned strictly on the left boundary as per reference */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] opacity-90 z-10 pointer-events-none">
         {/* using standard img for flexibility, or you can use next/image */}
         <img src="/landing/flower.png" alt="Blossom Branch" className="w-full h-auto object-contain" />
      </div>

      <div className="w-full flex-grow flex flex-col items-center justify-center gap-24 md:gap-40 z-30 relative py-20 md:py-32">
        
        {/* Top SPONSORS Stamp with Fans */}
        <div className="relative flex flex-col items-center">
          
          {/* The Stamp */}
          <div className="relative w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] drop-shadow-xl hover:scale-105 transition-transform duration-300 z-20">
            <img src="/landing/stamp.png" alt="Stamp Background" className="relative z-0 w-full h-auto rotate-[-10deg]"  />
            
            <div className="absolute top-[16%] bottom-[16%] left-[10%] right-[10%] bg-[#D59115] z-10 shadow-[inner_0_2px_8px_rgba(0,0,0,0.2)] rotate-[-1.5deg]"></div>
            
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none flex-col rotate-[-1.5deg]">
              <h1 className="pt-2 sm:pt-4 text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-black font-black leading-none tracking-[0.08em]" style={{ fontFamily: "Naluka, sans-serif" }}>
                SPONSORS
              </h1>
            </div>
          </div>

          {/* Decorative Fans */}
          {/* Grouped and absolutely pinned to the bottom right of the stamp */}
          <div className="absolute bottom-[-20%] right-[-15%] sm:right-[-20%] md:right-[-25%] z-30 pointer-events-none w-[110px] sm:w-[140px] md:w-[180px] lg:w-[220px]">
             <img src="/landing/baisakhi_pakha.png" alt="Baisakhi Fans" className="w-full h-auto drop-shadow-lg hover:scale-110 transition-transform duration-500" />
          </div>

        </div>

        {/* Middle Straight SPONSORS Stamp */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] drop-shadow-xl hover:scale-105 transition-transform duration-300 z-20">
            <img src="/landing/stamp.png" alt="Stamp Background" className="relative z-0 w-full h-auto rotate-[-10deg]" />
            
            <div className="absolute top-[16%] bottom-[16%] left-[10%] right-[10%] bg-[#D59115] z-10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] rotate-[-1.5deg]"></div>
            
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none flex-col rotate-[-1.5deg]">
              <h1 className="pt-2 sm:pt-4 text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-black font-black leading-none tracking-[0.08em]" style={{ fontFamily: "Naluka, sans-serif" }}>
                SPONSORS
              </h1>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
