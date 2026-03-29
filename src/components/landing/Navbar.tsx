"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[60px] md:h-[80px] bg-[#E6C27A] flex items-center justify-between px-6 md:px-12 relative z-[100] border-b-2 border-black/10">
      {/* Left Logo (Owl with Pen) */}
      <div className="relative h-10 w-24 md:h-14 md:w-32 flex items-center pl-2">
        <Image src="/landing/logo.png" alt="Oikyotaan Logo" fill className="object-contain object-left" priority />
      </div>

      {/* Navigation Items (Desktop) */}
      <div className="hidden md:flex flex-row space-x-8 pr-10 text-lg lg:text-xl font-bold tracking-widest text-black" style={{ fontFamily: "'Naluka', cursive" }}>
        <Link href="/" className="hover:text-amber-900 transition-colors">HOME</Link>
        <Link href="/artist" className="hover:text-amber-900 transition-colors">ARTIST</Link>
        <Link href="/events" className="hover:text-amber-900 transition-colors">EVENTS</Link>
        <Link href="/gallery" className="hover:text-amber-900 transition-colors">GALLERY</Link>
        <Link href="/team" className="text-[#A83232] drop-shadow-sm">TEAM</Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center z-[110]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none p-1 transition-transform active:scale-95">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`absolute top-[60px] left-0 w-full bg-[#E6C27A] shadow-2xl flex flex-col items-center gap-6 py-8 border-t-2 border-black/10 transition-all duration-300 origin-top transform md:hidden z-[95] ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`} 
        style={{ fontFamily: "'Naluka', cursive" }}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-widest text-black hover:text-amber-900">HOME</Link>
        <Link href="/artist" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-widest text-black hover:text-amber-900">ARTIST</Link>
        <Link href="/events" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-widest text-black hover:text-amber-900">EVENTS</Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-xl font-bold tracking-widest text-black hover:text-amber-900">GALLERY</Link>
        <Link href="/team" onClick={() => setIsOpen(false)} className="text-2xl font-black tracking-widest text-[#A83232] drop-shadow-sm border-t border-black/10 pt-4 w-1/2 text-center">TEAM</Link>
      </div>

      {/* Decorative Wavy Border at Bottom */}
      <div className="absolute left-0 bottom-[10px] translate-y-full w-full z-[90]">
        <Image 
          src="/landing/navbar.png" 
          alt="Navbar Ribbon" 
          width={1920} 
          height={80} 
          className="w-full h-auto object-cover" 
          priority 
        />
      </div>
    </nav>
  );
}
