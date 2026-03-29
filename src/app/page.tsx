import Navbar from "~/components/landing/Navbar";
import HeroSection from "~/components/landing/HeroSection";
import AboutSection from "~/components/landing/AboutSection";
import AboutOikyotaan from "~/components/landing/AboutOikyotaan";
import SponsorsSection from "~/components/landing/SponsorsSection";
import Footer from "~/components/landing/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white custom-scrollbar overflow-x-hidden relative text-[#2A2A2A]">
      {/* Absolute Navbar matching reference layout */}
      <div className="absolute top-0 w-full z-[100]">
        <Navbar />
      </div>

      <HeroSection />
      <AboutSection />
      <AboutOikyotaan />
      <SponsorsSection />
      <Footer />
    </main>
  );
}