import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { OurProjectsSection } from "@/components/OurProjectsSection";
import { OurServicesSection } from "@/components/OurServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurProjectsSection/>
      <OurServicesSection/>
    </main>
  );
}
