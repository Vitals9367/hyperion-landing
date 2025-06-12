"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ContactSection } from "@/components/sections/contact";
import { ProblemsSection } from "@/components/sections/problems-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { ScrollButton } from "@/components/ui/scroll-button";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { VSLSection } from "@/components/sections/vsl-section";
import { SuccessStoriesSection } from "@/components/sections/success-stories-section";
import { TeamSection } from "@/components/sections/team-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { CompanyCarousel } from "@/components/sections/company-carousel";

export default function Home() {
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
          <div>
            <HeroSection />
            {/* <CompanyCarousel /> */}
          </div>

          {/* Solutions Section */}
          <section className="relative w-full overflow-hidden bg-gradient-to-b from-black to-black py-24 lg:py-32">
            <BackgroundEffects />

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <ProblemsSection />

              <div className="my-32 text-center">
                <ScrollButton href="#solutions" text="Want to Solve It?" />
              </div>

              <SolutionsSection />
              <TeamSection />

              <div className="mt-4 text-center">
                <ScrollButton
                  href="#contact"
                  text="Ready to Transform Your Business?"
                />
              </div>

              {/* <SuccessStoriesSection /> */}
            </div>
          </section>

          <div ref={contactRef} id="contact">
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
