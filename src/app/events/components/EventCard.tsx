export default function EventCard({ title, description, image, reverse = false }) {
  return (
    <div className="w-full flex justify-center md:justify-start">
      
      {/* 🔥 SHADOW WRAPPER - Hidden on mobile */}
      <div className="relative w-full md:w-fit -mt-20 md:mt-0">

        <div className="absolute inset-0 pointer-events-none z-0 hidden md:flex items-center">
          <div className="relative w-full md:w-[950px] lg:w-[1100px] h-[520px]">
            <div
              className="absolute inset-0 blur-lg opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.8) 100%)",
              }}
            />
          </div>
        </div>

        {/* 💡 CONTENT WRAPPER */}
        <div
          className={`relative z-10 flex flex-col md:flex-row items-center w-full md:w-fit gap-0 ${
            reverse ? "md:flex-row-reverse md:-ml-32 lg:-ml-40" : ""
          }`}
        >

          {/* SMALL FRAME - Shadow opacity increased to 0.85 */}
          <div
            className={`relative w-[280px] sm:w-[320px] md:w-[380px] h-[400px] md:h-[520px] flex-shrink-0 z-40 
            drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)] md:drop-shadow-none -mb-16 md:mb-0 ${
              reverse ? "md:-ml-52" : ""
            }`}
          >
            <img
              src="/events/small2.png"
              alt="frame"
              className="absolute inset-0 w-full h-full object-contain z-50 pointer-events-none"
            />

            <div className="absolute inset-x-[6.5%] inset-y-[4%] md:inset-[6%] z-10 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover scale-[1.08] md:scale-100 object-center"
              />
            </div>
          </div>

          {/* BIG FRAME */}
<div
  className={`relative h-[520px] w-full md:w-[950px] lg:w-[1100px] z-20 
  drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] md:drop-shadow-none ${
    reverse ? "md:mr-8" : "md:-ml-44"
  }`}
>
  {/* 🔥 FIGMA UPDATE: Removed justify-center, added padding-top, and enabled internal scroll */}
  <div 
    className="absolute top-[30.8%] bottom-[31.5%] inset-x-[6%] md:inset-y-[10%] md:inset-x-[18%] 
    bg-[#331818] flex flex-col items-center z-10 px-5 md:px-12 py-5 md:py-10 overflow-hidden"
  >
    {/* Heading: Locked to the top */}
    <h3
      className="text-[#F3CA4E] text-2xl md:text-5xl lg:text-6xl mb-3 md:mb-6 leading-none text-center w-full"
      style={{ fontFamily: "Naluka, sans-serif" }}
    >
      {title}
    </h3>

    
    {/* Description Container: Fills width and scrolls if text is too long */}
<div className="w-full h-full overflow-y-auto custom-scrollbar pr-1">
  <p className="text-white text-[12px] md:text-sm lg:text-[18px] leading-relaxed w-full text-justify px-4">
    {description}
  </p>
</div>
  </div>

  <img
    src="/events/big2.png"
    alt="outer-frame"
    className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
  />
</div>
        </div>
      </div>
    </div>
  );
}