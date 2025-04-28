"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ContactSection } from "@/components/sections/contact";
import { FounderSection } from "@/components/sections/founder";
import { AboutSection } from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import BusinessPainSection from "@/components/sections/business-pain";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main className="bg-background relative min-h-screen w-full">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary)_0%,_transparent_35%)] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_var(--secondary)_0%,_transparent_30%)] opacity-5" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-32">
            <HeroSection />
          </div>

          <div className="mb-32">
            <BusinessPainSection />
          </div>

          <div ref={servicesRef} id="services" className="">
            <ServicesSection />
          </div>

          <div ref={contactRef} id="contact">
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
