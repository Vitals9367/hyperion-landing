import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LeadMagnetHero() {
  return (
    <section className="space-y-6 py-12 text-center md:py-20">
      <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
        Unlock AI Automation Secrets: Free Step-by-Step Guide + Pilot Program
        Invitation
      </h1>
      <p className="text-muted-foreground mx-auto max-w-3xl text-xl md:text-2xl">
        Limited spots available to join our exclusive pilot and transform your
        lead generation and sales processes
      </p>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto">
          Get Your Free Guide
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto">
          Learn More About the Pilot
        </Button>
      </div>
    </section>
  );
}
