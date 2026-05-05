import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ExperienceBento } from "@/components/ExperienceBento";
import { Certifications } from "@/components/Certifications";
import { TechStack } from "@/components/TechStack";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="page-container selection:bg-emerald-accent/30 selection:text-emerald-accent">
      <Navigation />
      
      <div className="space-y-0">
        <Hero />
        <Timeline />
        <ExperienceBento />
        <Certifications />
        <TechStack />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
