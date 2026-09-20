import CapabilitiesSection from "@/components/CapabilitiesSection";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>
      <Hero />

       <PhilosophySection/>
       <ProductsSection/>
       <CapabilitiesSection/>
       <ProcessSection/>
       <FinalCTA/>
       
    </>
  );
}