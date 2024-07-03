import AboutSection from "@/components/about/About";
import ContactSection from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/projects/Projects";
import QuoteSection from "@/components/quote/Quote";
import SkillsSection from "@/components/skills/Skills";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
