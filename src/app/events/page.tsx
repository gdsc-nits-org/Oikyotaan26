// src/app/events/page.tsx
import HeroSection from "./components/HeroSection";
import EventCard from "./components/EventCard";
import eventsData from "../../data/events.json"; 

export default function EventsPage() {
  const events = Array.isArray(eventsData) ? eventsData : [];

  return (
    <main className="w-full min-h-screen bg-[#8A3123] overflow-x-hidden">
      <HeroSection />

      {/* 1. items-start pins the cards to the LEFT side */}
      {/* 2. pl-[20px] lg:pl-[80px] sets the distance from the left edge */}
      <section className="w-full flex flex-col items-start gap-1 md:gap-2 py-16 md:py-24 px-4 lg:pl-[120px]">
          {events.map((event, index) => (
            <EventCard
              key={event.id || index}
              title={event.title}
              description={event.description}
              image={event.image || "/events/girl.svg"}
              reverse={index % 2 !== 0}
            />
          ))}
      </section>
    </main>
  );
}