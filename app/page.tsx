import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Pillars from "@/app/components/Pillars";
import DarkSection from "@/app/components/DarkSection";
import Pricing from "@/app/components/Pricing";
import JourneyMap from "@/app/components/JourneyMap";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pillars />
      <DarkSection />
      <Pricing />
      <JourneyMap />
      <Footer />
    </main>
  );
}
