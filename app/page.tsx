"use client";
import AboutSection from "@/components/about/About";
import ContactSection from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/projects/Projects";
import QuoteSection from "@/components/quote/Quote";
import SkillsSection from "@/components/skills/Skills";
import { handleScrollAnimation, throttle } from "@/utils/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
   const scrollElements = document.querySelectorAll(".js-scroll");

    window.addEventListener("scroll", () => {
      throttle(handleScrollAnimation, 50, scrollElements);
    });

    return () => {
      window.addEventListener("scroll", () => {
        throttle(handleScrollAnimation, 50, scrollElements);
      });
    };
  },[]);
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
