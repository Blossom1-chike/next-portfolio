"use client";
import AboutSection from "@/components/about/About";
import ContactSection from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import ProjectSection from "@/components/projects/Projects";
import QuoteSection from "@/components/quote/Quote";
import SkillsSection from "@/components/skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blossom Chikezie - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Blossom Chikezie, a first-class graduate and best graduating student of Babcock University in Software Engineering 2023. Learn about Blossom's projects and experiences."
        />
        <meta
          name="keywords"
          content="Blossom Chikezie, software engineer, portfolio, Babcock University, frontend developer, 18 years, blossom, best graduating student, korensi, prunedge, seventh day adventist, betterchalk"
        />
      </Head>
      <HeroSection />
      <QuoteSection />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
