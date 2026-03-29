import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full text-black flex flex-col font-sans overflow-hidden">
      
      {/* Background layer: uses footerbg.png combining it with a fallback beige color */}
      <div 
        className="absolute inset-0 z-0 bg-[#F4EBE0]"
        style={{
          backgroundImage: "url('/landing/footerbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      {/* Top Decorative Border */}
      <div 
        className="relative w-full h-[30px] md:h-[40px] z-10 drop-shadow-md bg-[#66281C]"
        style={{
          backgroundImage: "url('/landing/footerRibbon.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x"
        }}
      ></div>

      {/* Left Lotus Vine */}
      <div className="absolute top-[30px] md:top-[40px] left-0 sm:left-[2%] md:left-[5%] w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] z-10 pointer-events-none opacity-90">
         <img src="/landing/threeLotus.png" alt="Left Lotus Vine" className="w-full h-auto object-contain" />
      </div>

      {/* Right Lotus Vine (Mirrored) */}
      <div className="absolute top-[30px] md:top-[40px] right-0 sm:right-[2%] md:right-[5%] w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] z-10 pointer-events-none opacity-90">
         <img src="/landing/threeLotus.png" alt="Right Lotus Vine" className="w-full h-auto object-contain scale-x-[-1]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-12 pb-10 px-4 md:px-20 min-h-[400px]">
        
        {/* Center Logo/Emblem */}
        <div className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] mb-12 flex justify-center -mt-4 hover:scale-105 transition-transform">
          {/* using logo.png */}
          <img src="/landing/logo.png" alt="Oikyotaan Emblem" className="w-full h-auto object-contain" />
        </div>

        {/* Info Columns: Address/Phone (Left), Socials (Right) */}
        <div className="w-full max-w-[850px] flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 mt-4 font-semibold text-base md:text-lg">
          
          {/* Left Side: Address & Phone */}
          <div className="flex flex-col gap-6 md:w-1/2 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>NIT Silchar, Assam, India &nbsp; 788010</span>
            </div>
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="tracking-widest">03842-228479</span>
            </div>
          </div>

          {/* Right Side: Social Media */}
          {/* Flex end wrapper, but internal items are flex-start aligned to form a clean vertical column */}
          <div className="flex flex-col md:w-1/2 items-center md:items-end w-full">
            <div className="flex flex-col gap-6 items-start">
              <div className="flex items-center gap-4 cursor-pointer hover:text-amber-900 transition-colors">
                <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
                <span className="text-xl">Facebook</span>
              </div>
              <div className="flex items-center gap-4 cursor-pointer hover:text-amber-900 transition-colors">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xl">Instagram</span>
              </div>
            </div>
          </div>

        </div>

        {/* Collaboration Badge */}
        <div className="mt-20 md:mt-24 flex flex-col items-center gap-3">
          <span className="text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#000]">DESIGNED AND DEVELOPED IN COLLABORATION WITH</span>
          <div className="flex items-center gap-3">
            <img src="/landing/gdgc.png" alt="GDGC Logo" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
            <span className="text-sm md:text-base font-black tracking-widest text-[#000]">GDGC NIT SILCHAR</span>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="relative z-10 w-full bg-[#66281C] text-[#F3E5D8] py-3 md:py-4 flex justify-center items-center text-xs md:text-[15px] font-medium tracking-widest border-t border-[#461910]">
        All Rights Reserved ©Oikyotaan, NIT Silchar
      </div>
      
    </footer>
  );
}
