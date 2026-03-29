import Image from "next/image";

export default function AboutOikyotaan() {
  return (
    <section className="relative w-full min-h-screen bg-[#763023] flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden font-sans">

      {/* Top Decoration: Swastik Image */}
      <div className="w-full flex justify-center items-center opacity-90 z-10 mb-6 sm:mb-8 mt-4 select-none">
        <Image src="/landing/swastik.png" alt="Swastik Decoration" width={300} height={50} className="h-4 sm:h-6 md:h-10 w-auto object-contain" />
      </div>

      {/* Top Right Blossom */}
      <div className="absolute top-[0px] sm:top-0 right-0 w-[120px] sm:w-[180px] md:w-[260px] lg:w-[350px] opacity-90 z-20 pointer-events-none">
        <Image src="/landing/flower2.png" alt="Blossom Branch" width={400} height={300} className="w-full h-auto object-contain scale-x-[-1]" />
      </div>
     <div className="relative mt-10 md:mt-16 flex items-center justify-center z-20" style={{ minHeight: "160px" }}>

        {/* ABOUT Stamp */}
        <div className="relative w-[100px] sm:w-[220px] md:w-[270px] lg:w-[320px] drop-shadow-xl transition-transform duration-300 z-30 rotate-[-12deg] mr-[-8px] sm:mr-[-20px] md:mr-[-40px]">
          <img src="/landing/stamp.png" alt="Stamp" className="relative z-0 w-full h-auto" />
          <div className="absolute top-[16%] bottom-[16%] left-[10%] right-[10%] bg-[#D59115] z-10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] rotate-[5deg]"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none rotate-[-1.5deg]">
            <h2 className="pt-2 text-[25px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-black font-black leading-none tracking-[0.08em]" style={{ fontFamily: "Naluka, sans-serif" }}>ABOUT</h2>
          </div>
        </div>

        {/* OIKYOTAAN Stamp — overlaps the first */}
        <div className="relative w-[100px] sm:w-[220px] md:w-[270px] lg:w-[320px] drop-shadow-xl transition-transform duration-300 z-20 rotate-[8deg] mt-8 md:mt-16">
          <img src="/landing/stamp.png" alt="Stamp" className="relative z-0 w-full h-auto" />
          <div className="absolute top-[16%] bottom-[16%] left-[10%] right-[10%] bg-[#D59115] z-10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.2)] rotate-[5deg]"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none rotate-[-1.5deg]">
            <h2 className="pt-2 text-[12px] sm:text-[26px] md:text-[32px] lg:text-[38px] text-black font-black leading-none tracking-[0.04em]" style={{ fontFamily: "Naluka, sans-serif" }}>OIKYOTAAN</h2>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-[1200px] mt-12 sm:mt-16 md:mt-24 z-30 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="relative bg-[#DFAC53] p-2 sm:p-3 md:p-4 drop-shadow-2xl"
            style={{
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5), 5px 10px 15px rgba(0,0,0,0.6)",
              backgroundImage: "linear-gradient(45deg, #B57F32 0%, #D8A546 50%, #9F6923 100%)"
            }}
          >
            <div className="bg-[#291715] flex items-center justify-center overflow-hidden">
              <Image
                src="/landing/pic4.png"
                alt="Oikyotaan Event Art"
                width={500}
                height={700}
                className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="relative w-full lg:w-[60%] text-[#EDEDED] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-justify tracking-wide z-10">

          <p className="mb-4 sm:mb-6">
            The Bengali New Year, or Pohela Boishakh, symbolises rejuvenation and renewed life. It is that time of the year when we all get to hear the sweet call of the cuckoo, feel the soothing sensation of the southern breeze, mango flowers start appearing and the heart of Bengal seems to attain a new vigour, brought about by the blessings of Spring. Oikyotaan &quot;musical harmony&quot; is an annual event of NIT Silchar which is dedicated to the frolic and cultural celebration of the Bengali New Year. Since it is the harvest season, people pray to Lord Ganesha and Goddess Laxmi for God&apos;s blessings on their lives and households. Many prayers are chanted on this day because people believe it will bring them peace, good health, long lives, and then stable lives.
          </p>

          <p>
            Oikyotaan is a cultural festival that celebrates the diversity and creativity of our Bengali community. It will feature music, dance, art and more from talented performers and artists. Oikyotaan is a common podium of celebration for all those whose hearts ardently love the &quot;Bangaliana&quot; spirit - so do join us on the 26th of April, this year as we welcome the new year with pomp, joy, music and dance!
          </p>

          {/* 🦉 Owl FIXED */}
          <div className="
            absolute
            top-[-40px] right-[-10px]
            sm:top-[-30px] sm:right-[-20px]
            md:top-[0%] md:-right-[25%]
            lg:top-[10%] lg:-right-[35%] 2xl:-right-[40%]
            w-[70px] sm:w-[100px] md:w-[130px] lg:w-[160px]
            z-40 pointer-events-none hover:scale-110 transition-transform duration-500
            rotate-[-15deg] hidden md:block
          ">
            <Image
              src="/landing/owl.png"
              alt="Decorative Owl"
              width={200}
              height={300}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
}