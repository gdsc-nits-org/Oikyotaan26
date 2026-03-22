export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#8A3123] flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[1200px] pt-16 sm:pt-20 md:pt-38 pb-10 flex flex-col items-center">

        {/* Left Decorations */}
        <img
          src="/events/left.svg"
          alt="decorations"
          className="absolute left-[10px] md:left-[15px] top-10 md:top-16  w-[90px] sm:w-[110px] md:w-[320px]"
        />

        {/* Right Decorations */}
        <img
          src="/events/right.svg"
          alt="decorations"
          className="absolute right-[10px] md:right-[15px] top-10 md:top-16  w-[90px] sm:w-[110px] md:w-[320px]"
        />

        {/* Hero Text + Bus */}
        <div className="flex flex-col items-center text-white">

          <h1
            className="tracking-[0.04em] text-[26px] sm:text-[32px] md:text-[60px]
"
            style={{ fontFamily: "Naluka" }}
          >
            Oikyotaan'26
          </h1>

          <h2
            className="tracking-[0.04em] text-[34px] sm:text-[48px] md:text-[100px] -mt-1 md:-mt-3 text-center"
            style={{
              fontFamily: "Naluka",
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
            }}
          >
            EVENTS
          </h2>

          <img
            src="/events/bus.svg"
            alt="bus"
            className="w-[180px] sm:w-[220px] md:w-[460px] -mt-[52px] sm:-mt-[60px] md:-mt-[146px]"
          />

        </div>

      </div>
    </section>
  );
}