import Navbar from "~/components/landing/Navbar";
import HeroSection from "~/components/landing/HeroSection";
import AboutSection from "~/components/landing/AboutSection";
import AboutOikyotaan from "~/components/landing/AboutOikyotaan";
import SponsorsSection from "~/components/landing/SponsorsSection";


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white custom-scrollbar overflow-x-hidden relative text-[#2A2A2A]">

      <HeroSection />
      <AboutSection />
      <AboutOikyotaan />
      <SponsorsSection />
    </main>
  );
}