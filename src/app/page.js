import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { OurProjectsSection } from "@/components/OurProjectsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurProjectsSection/>
    </main>
  );
}
