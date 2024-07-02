import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/projects/Projects";
import QuoteSection from "@/components/quote/Quote";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <ProjectSection />
    </div>
  );
}
