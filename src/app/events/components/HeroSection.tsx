"use client";
// import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        @keyframes pendulumLeft {
          0% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
          100% {
            transform: rotate(-8deg);
          }
        }

        @keyframes pendulumRight {
          0% {
            transform: rotate(8deg);
          }
          50% {
            transform: rotate(-8deg);
          }
          100% {
            transform: rotate(8deg);
          }
        }

        .pendulum-left {
          transform-origin: top center;
          animation: pendulumLeft 3s ease-in-out infinite;
        }

        .pendulum-right {
          transform-origin: top center;
          animation: pendulumRight 3s ease-in-out infinite;
        }

        @keyframes dropBounce {
          0% {
            transform: translateY(-200px);
            opacity: 0;
          }
          60% {
            transform: translateY(20px); /* overshoot below final */
            opacity: 1;
          }
          80% {
            transform: translateY(-10px); /* bounce up */
          }
          100% {
            transform: translateY(0); /* final position */
          }
        }

        .drop-bounce {
          animation: dropBounce 1s ease-out;
        }

        .drop-bounce-delay {
          animation: dropBounce 1s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
      `}</style>

      <section className="relative flex w-full justify-center overflow-hidden bg-[#8A3123]">
        <div className="relative flex w-full max-w-[1200px] flex-col items-center px-6 pt-16 pb-10 sm:px-6 sm:pt-20 md:px-0 md:pt-38">
          {/* Left Decorations */}
          <img
            src="/events/left.svg"
            alt="decorations"
            className="pendulum-left absolute top-10 left-[4px] w-[80px] min-[380px]:left-[12px] min-[380px]:w-[95px] min-[770px]:hidden min-[1000px]:block sm:left-[10px] sm:w-[110px] md:top-16 md:left-[15px] md:w-[320px]"
          />

          {/* Right Decorations */}
          <img
            src="/events/right.svg"
            alt="decorations"
            className="pendulum-right absolute top-10 right-[4px] w-[80px] min-[380px]:right-[12px] min-[380px]:w-[95px] min-[770px]:hidden min-[1000px]:block sm:right-[10px] sm:w-[110px] md:top-16 md:right-[15px] md:w-[320px]"
          />

          {/* Hero Text + Bus */}
          <div className="flex flex-col items-center text-white">
            <h1
              className="drop-bounce text-[26px] tracking-[0.04em] sm:text-[32px] md:text-[60px]"
              style={{ fontFamily: "Naluka" }}
            >
              {"Oikyotaan'26"}
            </h1>

            <h2
              className="drop-bounce-delay -mt-1 translate-x-[4px] text-center text-[34px] tracking-[0.19em] min-[380px]:translate-x-[2px] min-[380px]:tracking-[0.21em] sm:translate-x-0 sm:text-[48px] sm:tracking-[0.04em] md:-mt-3 md:text-[100px]"
              style={{
                fontFamily: "Naluka",
                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            >
              EVENTS
            </h2>

            <img
              src="/events/bus.svg"
              alt="bus"
              className="-mt-[52px] w-[180px] sm:-mt-[60px] sm:w-[220px] md:-mt-[146px] md:w-[460px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
