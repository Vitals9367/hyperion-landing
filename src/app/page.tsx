"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { BusinessPainSection } from "@/components/sections/business-pain";
import { ProcessSection } from "@/components/sections/process";
import { ContactSection } from "@/components/sections/contact";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full bg-white">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#dcfce7_0%,_transparent_35%)] opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_#dcfce7_0%,_transparent_30%)] opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <BusinessPainSection />

          <div ref={servicesRef} id="services">
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
