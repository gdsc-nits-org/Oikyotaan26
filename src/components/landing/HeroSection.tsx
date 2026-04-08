"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        @keyframes cloudMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(150%);
          }
        }

        @keyframes cloudMoveReverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-150%);
          }
        }

        .cloud-move {
          animation: cloudMove 60s linear infinite;
        }

        .cloud-move-slow {
          animation: cloudMove 90s linear infinite;
        }

        .cloud-move-fast {
          animation: cloudMove 40s linear infinite;
        }

        .cloud-move-reverse {
          animation: cloudMoveReverse 60s linear infinite;
        }
      `}</style>

      <section className="relative h-[800px] w-full overflow-hidden sm:h-[1000px] md:h-[1200px] lg:h-screen">
        {/* Main Full-Cover Background */}
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Image
            src="/landing/heroBg.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Clouds (Spread on mobile, Unified ceiling on desktop) */}
        <img
          src="/landing/cloud5.png"
          alt="Cloud"
          className="cloud-move pointer-events-none absolute top-[0%] left-1/2 z-[16] w-[130%] max-w-[650px] -translate-x-1/2 opacity-95 drop-shadow-sm sm:top-[0%] sm:w-[70%] md:top-[-2%] md:w-[45%]"
        />

        {/* Cloud 1 - Now hidden on mobile, visible on sm and up */}
        <img
          src="/landing/cloud1.png"
          alt="Cloud"
          className="cloud-move-slow pointer-events-none absolute top-[18%] left-[-30%] z-[2] hidden w-[90%] max-w-[700px] opacity-90 sm:top-[0%] sm:left-[-10%] sm:block sm:w-[90%] md:top-[-2%] md:left-[0%] md:z-[15] md:w-[45%]"
        />

        <img
          src="/landing/cloud6.png"
          alt="Cloud"
          className="cloud-move-reverse pointer-events-none absolute top-[0%] right-[-20%] z-[2] w-[80%] max-w-[550px] opacity-90 sm:right-[-10%] sm:w-[80%] md:top-[-2%] md:right-[5%] md:z-[15] md:w-[35%]"
        />
        <img
          src="/landing/cloud3.png"
          alt="Cloud"
          className="cloud-move-reverse pointer-events-none absolute top-[60%] left-[-10%] z-[2] w-[80%] max-w-[450px] opacity-80 sm:top-[5%] sm:left-[20%] sm:w-[60%] md:top-[5%] md:left-[25%] md:z-[15] md:w-[30%]"
        />
        {/* Background Sticks */}
        <img
          src="/landing/stick 3.png"
          alt="Stick"
          className="absolute top-[25%] left-[-10%] z-[5] h-[30%] w-[25%] rotate-[-15deg] object-contain opacity-90 md:top-[20%] md:left-[-2%] md:h-[50%] md:w-[15%]"
        />
        <img
          src="/landing/stick 4.png"
          alt="Stick"
          className="absolute top-[25%] right-[-10%] z-[5] h-[30%] w-[25%] rotate-[20deg] object-contain opacity-90 md:top-[20%] md:right-[0%] md:h-[60%] md:w-[12%]"
        />

        {/* Center Badge */}
        <div className="absolute top-[-2%] left-1/2 z-[12] w-[75vw] max-w-[850px] min-w-[280px] -translate-x-1/2 drop-shadow-2xl sm:w-[60vw] md:top-[0%] md:w-[38vw] md:min-w-[380px]">
          <Image
            src="/landing/oikyotaanHandle.png"
            alt="Oikyotaan Badge"
            width={10000}
            height={1000}
            className="hero-wiggle-alt h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Left Artwork */}
        <div className="absolute top-[22%] left-[-1%] z-[10] w-[45vw] max-w-[450px] min-w-[170px] drop-shadow-2xl sm:w-[40vw] md:top-[8%] md:left-[5%] md:w-[25vw] md:min-w-[280px]">
          <img
            src="/landing/leftImage.png"
            alt="Art Left"
            className="hero-wiggle h-auto w-full object-contain"
          />
        </div>

        {/* Right Artwork */}
        <div className="absolute top-[22%] right-[-1%] z-[10] w-[45vw] max-w-[450px] min-w-[170px] drop-shadow-2xl sm:w-[40vw] md:top-[8%] md:right-[5%] md:w-[28vw] md:min-w-[280px]">
          <img
            src="/landing/rightImage.png"
            alt="Art Right"
            className="hero-wiggle-slow h-auto w-full object-contain"
          />
        </div>

        {/* Front Clouds Overlaying Elements */}
        {/* <img src="/landing/cloud4.png" alt="Cloud" className="absolute top-[50%] md:top-[60%] right-[0%] md:right-[20%] w-[70%] md:w-[30%] max-w-[500px] z-[15] opacity-90 pointer-events-none" /> */}
        {/* <img src="/landing/cloud3.png" alt="Cloud" className="absolute top-[50%] md:top-[50%] left-[-10%] md:left-[10%] w-[80%] md:w-[35%] max-w-[600px] z-[15] opacity-95 pointer-events-none" /> */}

        {/* Bottom Cab */}
        <div className="absolute bottom-[1%] left-1/2 z-[20] w-[50vw] max-w-[500px] min-w-[220px] -translate-x-1/2 drop-shadow-xl sm:w-[50vw] md:bottom-[4%] md:w-[30vw] md:min-w-[320px]">
          <img
            src="/landing/cab.png"
            alt="Vintage Taxi"
            className="hero-wiggle-cab h-auto w-full object-contain"
          />
        </div>

        {/* Bottom Decorative Red Strip */}
        <div className="absolute bottom-0 left-0 z-[50] h-[15px] w-full bg-gradient-to-r from-[#7B1113] via-[#D12B2B] to-[#7B1113] md:h-[25px]">
          {/* Leaf pattern overlay if required can be repeated */}
          <div
            className="pointer-events-none h-full w-full bg-repeat-x opacity-20"
            style={{
              backgroundImage: 'url("/landing/flower.png")',
              backgroundSize: "contain",
            }}
          />
        </div>

        {/* Wavy bottom element just above the red strip to mimic the transition */}
        <div className="absolute bottom-[15px] left-0 z-[49] h-[6px] w-full bg-[#EBD8A9] md:bottom-[25px]"></div>

        {/* Scroll down indicator */}
        <div className="absolute right-[2%] bottom-[2%] z-[50] flex animate-bounce flex-col items-center text-white drop-shadow-lg md:right-[4%] md:bottom-[8%]">
          <span
            className="mb-1 text-[10px] font-bold tracking-widest uppercase md:text-sm"
            style={{
              fontFamily: "'Naluka', cursive",
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Scroll down
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white drop-shadow-lg md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
