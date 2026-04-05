type EventCardProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  smallText?: boolean;
  tightTitle?: boolean;
};

// import Image from "next/image";

export default function EventCard({ title, description, image, reverse = false, smallText = false, tightTitle = false }: EventCardProps) {
  return (
    <div className="w-full flex justify-center -mb-20 min-[390px]:-mb-15 md:mb-0">
      
      <div className="relative w-full max-w-[1135px] mx-auto">
        <div className="relative w-full md:w-fit -mt-20 md:mt-0">

          {/* DESKTOP SHADOW */}
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

          {/* CONTENT WRAPPER */}
          <div
            className={`relative z-10 flex flex-col md:flex-row items-center w-full md:w-fit gap-0 ${
              reverse ? "md:flex-row-reverse md:-ml-32 lg:-ml-40" : ""
            }`}
          >

            {/* SMALL FRAME */}
            <div
              className={`relative w-[280px] sm:w-[320px] md:w-[380px] h-[400px] md:h-[520px] flex-shrink-0 z-40 
              scale-x-[1.05] scale-y-[0.92] origin-bottom
              min-[350px]:scale-x-[1.20] 
              md:scale-100
              drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)] md:drop-shadow-none 
              mb-[-120px] 
              min-[390px]:mb-[-107px] 
              min-[470px]:mb-[-95px] 
              min-[540px]:mb-[-90px] 
              min-[650px]:mb-[-90px] 
              md:mb-0 ${
                reverse ? "md:-ml-52" : ""
              }`}
            >

              <img
                src="/events/small2.png"
                className="absolute inset-0 w-full h-full object-contain z-50 pointer-events-none min-[540px]:hidden md:block"
                alt=""
              />

              <div className="absolute inset-y-[2px] inset-x-[2px] md:inset-x-[13.5px] z-[60] pointer-events-none border-[3px] md:border-[4px] border-[#331818] min-[540px]:hidden md:block" />

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
              className={`relative h-[520px] w-full min-[470px]:w-[90%] min-[540px]:w-full md:w-[950px] lg:w-[1100px] z-20 
              drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] md:drop-shadow-none ${
                reverse ? "md:mr-8" : "md:-ml-44"
              }`}
            >

              {/* CONTENT */}
              <div
                className="absolute 
                top-[30.8%] bottom-[31.5%] 
                min-[380px]:top-[28%] min-[380px]:bottom-[28%]
                min-[470px]:top-[28%] min-[470px]:bottom-auto min-[470px]:h-[44%]
                md:top-[10%] md:bottom-[10%] md:h-auto
                inset-x-[1%] 
                min-[380px]:inset-x-[2%] 
                md:inset-x-[14%] lg:inset-x-[16%]
                bg-[#331818] 
                flex flex-col items-center 
                gap-2 min-[350px]:gap-3 md:gap-6 
                z-10 px-5 md:px-12 pt-5.5 min-[380px]:pt-7 min-[400px]:pt-5.5 pb-5 md:py-10 min-[540px]:px-6
                overflow-hidden"
              >

                <h3
                  className={`
                    text-[#F3CA4E] 
                    tracking-[0.06em] sm:tracking-normal
                    ${
                      tightTitle
                        ? "text-[17px] min-[350px]:text-[16px] min-[380px]:text-[24px]"
                        : smallText
                        ? "text-[16px] min-[380px]:text-[18px] sm:text-[20px]"
                        : "text-[18px] min-[380px]:text-[30px]"
                    }
                    md:text-5xl lg:text-6xl 
                    mt-[6px] md:mt-0
                    mb-[6px] md:mb-6
                    leading-tight text-center w-full
                  `}
                  style={{ fontFamily: "Naluka, sans-serif" }}
                >
                  {title}
                </h3>

                <div className="w-full flex-1 overflow-hidden pr-1">
                  <p
                    className={`text-white w-full text-justify px-[8px] sm:px-[10px] md:px-4 lg:px-10 
                    ${
                      tightTitle
                        ? "text-[9px] min-[350px]:text-[10.5px] min-[380px]:text-[11.5px] md:text-sm lg:text-[18px] leading-[1.2]"
                        : smallText
                        ? "text-[8.5px] min-[380px]:text-[10px] min-[400px]:text-[11px] sm:text-[11.5px] md:text-[13px] lg:text-[17px] leading-[1.3]"
                        : "text-[9.5px] min-[380px]:text-[10px] md:text-sm lg:text-[18px] leading-[1.3]"
                    }`}
                  >
                    {description}
                  </p>
                </div>

              </div>

              {/* FRAME */}
              <div className="absolute inset-0 z-20 pointer-events-none">

                {/* MOBILE */}
                <div className="flex md:hidden items-center justify-center w-full h-full min-[540px]:hidden">
                  <div className="relative inline-block">
                    <img
                      src="/events/big2.png"
                      alt="outer-frame"
                      className="block w-full h-auto"
                    />
                    <div className="absolute inset-0 border-[3px] border-[#331818]" />
                  </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block absolute inset-0">
                  <img
                    src="/events/big2.png"
                    alt="outer-frame"
                    className="w-full h-full object-contain"
                  />
                  <div
                    className="absolute 
                    top-[0.3%] bottom-[0.4%] 
                    left-[16%] right-[15.6%] 
                    border-[4px] border-[#331818]"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}