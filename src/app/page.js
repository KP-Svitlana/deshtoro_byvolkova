import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { OurProjectsSection } from "@/components/OurProjectsSection";
import { OurServicesSection } from "@/components/OurServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurProjectsSection/>
      <OurServicesSection/>
      <ReviewsSection/>
    </main>
  );
}
