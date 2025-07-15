import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import WhatWeDoSection from "@/components/what-we-do-section";
import PortfolioSection from "@/components/portfolio-section";
import BrandValueSection from "@/components/brand-value-section";
import CalendarSection from "@/components/calendar-section";
import MockupSection from "@/components/mockup-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <BrandValueSection />
      <CalendarSection />
      <WhatWeDoSection />
      <MockupSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
