import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import CapacityPricing from "@/components/CapacityPricing";
import EventsWeHost from "@/components/EventsWeHost";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <CapacityPricing />
      <EventsWeHost />
      <LocationMap />
      <ContactForm />
      <Footer />
    </main>
  );
}
