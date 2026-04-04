"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';

// --- Reusable Image Frame Component ---
const Frame = ({ src, alt, extraClasses = "" }: { src?: string; alt?: string, extraClasses?: string }) => {
  return (
    <div 
      className={`relative w-[12rem] md:w-[20rem] shrink-0 ${extraClasses}`}
      style={{ WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} 
    >
     <Image 
  src={src ?? "/photog/Frame1.png"} 
  alt={alt ?? "Oikyotaan Gallery Photo"} 
  className="block h-auto w-full object-contain border-[2px] border-transparent" 
/>
    </div>
  );
};

// --- Gallery Data Setup ---
const galleryData = [
  { topImg: "/photog/Frame1.png", bottomImg: "/photog/marquee/Frame16.png" },
  { topImg: "/photog/marquee/Frame11.png", bottomImg: "/photog/Frame.png" },
  { topImg: "/photog/Frame1.png", bottomImg: "/photog/marquee/Frame11.png" },
  { topImg: "/photog/marquee/Frame12.png", bottomImg: "/photog/Frame.png" },
  { topImg: "/photog/Frame1.png", bottomImg: "/photog/marquee/Frame17.png" },
  { topImg: "/photog/marquee/Frame13.png", bottomImg: "/photog/Frame.png" },
  { topImg: "/photog/Frame1.png", bottomImg: "/photog/marquee/Frame18.png" },
  { topImg: "/photog/marquee/Frame14.png", bottomImg: "/photog/Frame.png" },
  { topImg: "/photog/Frame1.png", bottomImg: "/photog/marquee/Frame19.png" },
  { topImg: "/photog/marquee/Frame15.png", bottomImg: "/photog/Frame.png" },
];

const infiniteGallery = [...galleryData, ...galleryData];

export default function PhotoGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  
  const isHovered = useRef(false);
  const currentPos = useRef(0);
  const targetPos = useRef(0);
  
  const [dropAmount, setDropAmount] = useState(45);
  const dimensions = useRef({ halfWidth: 0, itemWidth: 320, yRatio: 45 / 320 });

  useEffect(() => {
    let animationId: number;

    const updateDimensions = () => {
      if (!trackRef.current) return;
      const el = trackRef.current;
      if (el.children.length > 0) {
        const itemWidth = el.children[0]!.getBoundingClientRect().width;
        const halfWidth = itemWidth * galleryData.length;
        
        const currentDrop = window.innerWidth < 768 ? 25 : 45;
        setDropAmount(currentDrop);
        
        dimensions.current = {
          itemWidth,
          halfWidth,
          yRatio: currentDrop / itemWidth, 
        };
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const loop = () => {
      if (!trackRef.current) return;
      
      const { halfWidth, yRatio } = dimensions.current;
      
      if (!isHovered.current) {
        targetPos.current += 0.5; 
      }

      currentPos.current += (targetPos.current - currentPos.current) * 0.08;

      if (currentPos.current >= halfWidth) {
        currentPos.current -= halfWidth;
        targetPos.current -= halfWidth;
      } else if (currentPos.current <= 0) {
        currentPos.current += halfWidth;
        targetPos.current += halfWidth;
      }

      const x = currentPos.current;
      const y = currentPos.current * yRatio;
      
      trackRef.current.style.transform = `translate3d(-${x}px, -${y}px, 0)`;

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = dimensions.current.itemWidth * 2; 
    if (direction === 'left') {
      targetPos.current -= scrollAmount;
    } else {
      targetPos.current += scrollAmount;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#7a2822] text-white font-sans overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes softFloat {
          0% { transform: translateY(0px) rotate(var(--rotation)); }
          50% { transform: translateY(-10px) rotate(var(--rotation)); }
          100% { transform: translateY(0px) rotate(var(--rotation)); }
        }
        .animate-float {
          animation: softFloat 4s ease-in-out infinite;
        }
      `}} />

      {/* Header Section */}
      <header className="relative mx-auto w-full max-w-7xl px-4 pt-12 pb-8 text-center flex flex-col items-center">
        <Image alt='' src="/photog/image20.png" className="animate-float absolute left-2 sm:left-4 lg:left-8 top-10 sm:top-12 lg:top-16 w-16 sm:w-24 md:w-32 lg:w-34 h-auto object-contain" style={{ '--rotation': '-15deg' } as React.CSSProperties} />
        <Image alt='' src="/photog/image25.png" className="animate-float absolute left-1 sm:left-12 lg:left-24 top-28 sm:top-36 md:top-44 lg:top-52 w-16 sm:w-24 md:w-32 lg:w-34 h-auto object-contain" style={{ '--rotation': '-5deg', animationDelay: '1s' } as React.CSSProperties} />
        <Image alt='' src="/photog/image23.png" className="animate-float absolute right-4 sm:right-16 lg:right-28 top-20 sm:top-24 lg:top-30 w-16 sm:w-24 md:w-32 lg:w-34 h-auto object-contain" style={{ '--rotation': '15deg', animationDelay: '0.5s' } as React.CSSProperties} />
        <Image alt='' src="/photog/image17.png" className="animate-float absolute right-2 sm:right-4 lg:right-8 top-48 sm:top-56 md:top-64 lg:top-72 w-16 sm:w-24 md:w-32 lg:w-34 h-auto object-contain" style={{ '--rotation': '5deg', animationDelay: '1.5s' } as React.CSSProperties} />

        <div className="relative z-10 mx-auto inline-flex flex-col items-center">
          <h2 className="mt-12 md:mt-20 -mb-10 md:-mb-37 font-normal text-sm md:text-xl uppercase tracking-[0.2em] text-[#f0eadd] self-start " style={{ fontFamily: 'Naluka, serif' }}>
            Oikyotaan
          </h2>
          
          <h1 className="flex items-center text-5xl md:text-6xl lg:text-8xl font-normal tracking-tight text-[#f0eadd] drop-shadow-xl" style={{ fontFamily: 'Naluka, serif' }}>
            <span className="mt-8 md:mt-35">PHOTO </span>
            
            <div className="relative -mx-2 md:-mx-5 flex h-28 w-28 md:h-75 md:w-76 shrink-0 items-center justify-center overflow-hidden">
               <Image src="/photog/god.png" alt="Center Fig" className="h-full w-full object-contain" />
            </div> 
            
            <span className="text-3xl md:text-4xl lg:text-6xl mt-8 md:mt-35 -ml-2 md:-ml-7">26&apos;</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl ml-0 md:ml-20 font-normal tracking-widest text-[#f0eadd] drop-shadow-xl" style={{ fontFamily: 'Naluka, serif' }}>
            GALLERY
          </h1>
          
          <div className="absolute -bottom-10 sm:-bottom-[10%] lg:-bottom-[10%] -left-[5%] sm:-left-[8%] lg:-left-[10%] flex w-20 sm:w-32 md:w-40 lg:w-45 h-auto -rotate-12 items-center justify-center">
             <Image src="/photog/Group.png" alt="Owl Mask" className="h-auto w-full object-contain" />
          </div>
        </div>
      </header>

      {/* Navigation Controls */}
      {/* Changed top-[55%] to top-[70%] on mobile; kept md:top-[65%] */}
      <div className="absolute top-[88%] md:top-[90%] z-50 flex w-full justify-center gap-22 md:gap-34 pointer-events-none">
        <button 
          onClick={() => handleScroll('left')}
          className="pointer-events-auto flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-lg md:text-2xl text-[#7a2822] backdrop-blur-md transition-all hover:scale-110 hover:bg-white/40 active:scale-95 shadow-lg"
          aria-label="Scroll left"
        >
          &#9664;
        </button>
        <button 
          onClick={() => handleScroll('right')}
          className="pointer-events-auto flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-lg md:text-2xl text-[#7a2822] backdrop-blur-md transition-all hover:scale-110 hover:bg-white/40 active:scale-95 shadow-lg"
          aria-label="Scroll right"
        >
          &#9654;
        </button>
      </div>

      {/* Gallery Scroll Section */}
      {/* Changed pb-[400px] to pb-[150px] on mobile to remove extra dead space but keep a bottom margin */}
      <main className="relative mt-24 md:mt-16 w-full pb-[150px] md:pb-[300px]">
        <div 
          ref={trackRef}
          className="flex w-max items-start gap-0 will-change-transform"
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
          onTouchStart={() => isHovered.current = true}
          onTouchEnd={() => isHovered.current = false}
        >
          {infiniteGallery.map((col, idx) => (
            <div 
              key={idx} 
              className="flex shrink-0 flex-col gap-0"
              style={{ transform: `translateY(${idx * dropAmount}px)` }}
            >
              {/* Top Layer */}
              <Frame src={col.topImg} />
              
              {/* Bottom Layer */}
              <Frame src={col.bottomImg} extraClasses="-translate-x-6 md:-translate-x-12" />
            </div>
          ))}
        </div>
        <Footer />
      </main>

    </div>
  );
}