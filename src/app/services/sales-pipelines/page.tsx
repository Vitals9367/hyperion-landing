import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Sales Pipelines | Hyperion",
  description:
    "Convert 40% more leads into clients with our AI-powered sales pipeline automation. Never miss an opportunity with personalized follow-ups and perfectly timed touchpoints.",
};

const features = [
  {
    title: "Smart Pipeline Automation",
    description:
      "Automate your entire sales pipeline with AI-powered workflows that ensure no opportunity falls through the cracks.",
    icon: Target,
  },
  {
    title: "Personalized Follow-ups",
    description:
      "Create perfectly timed, personalized follow-up sequences that engage prospects at the right moment with the right message.",
    icon: MessageSquare,
  },
  {
    title: "Pipeline Analytics",
    description:
      "Track and optimize your sales pipeline with real-time analytics and AI-powered insights to improve conversion rates.",
    icon: Zap,
  },
];

const benefits = [
  "Convert 40% more leads into clients",
  "Reduce follow-up time by 80%",
  "Never miss a sales opportunity",
  "Personalize outreach at scale",
  "Track pipeline performance in real-time",
  "Optimize conversion rates with AI insights",
];

export default function SalesPipelinesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Automated{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                Sales Pipelines
              </span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400">
              Convert 40% more leads into clients with our AI-powered sales
              pipeline automation. Never miss an opportunity with personalized
              follow-ups and perfectly timed touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm"
              >
                <div className="bg-gradient-gold mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Key Benefits
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              See how our sales pipeline automation can transform your agency's
              conversion rates
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-black/50 p-6 backdrop-blur-sm"
              >
                <div className="bg-gradient-gold flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-black" />
                </div>
                <p className="text-lg font-medium text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Scale Your Sales Pipeline?
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              Book a free strategy call to see how we can help you automate your
              sales pipeline and convert more leads.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="group bg-gradient-gold hover:shadow-primary/20 relative h-12 overflow-hidden rounded-full px-8 text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center text-base font-semibold">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] transition-transform duration-300 group-hover:translate-x-full" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
