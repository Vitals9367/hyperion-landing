import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Onboarding & Management Automation | Hyperion",
  description:
    "Streamline your client onboarding process with our AI-powered automation. Reduce manual work, improve client satisfaction, and scale your agency efficiently.",
};

const features = [
  {
    title: "Automated Onboarding Workflows",
    description:
      "Create custom onboarding sequences that automatically guide clients through your process, from initial contact to project kickoff.",
    icon: CheckCircle2,
  },
  {
    title: "Client Portal & Dashboard",
    description:
      "Provide clients with a professional portal to track progress, submit feedback, and access resources 24/7.",
    icon: Users,
  },
  {
    title: "Time-Saving Automation",
    description:
      "Reduce manual tasks by up to 80% with automated document collection, contract management, and communication.",
    icon: Clock,
  },
];

const benefits = [
  "Reduce onboarding time by 60%",
  "Improve client satisfaction scores",
  "Eliminate manual data entry",
  "Scale your client base without hiring",
  "Maintain consistent quality across all clients",
  "Reduce onboarding errors by 90%",
];

export default function ClientOnboardingPage() {
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
              Client Onboarding & Management{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                Workflow Automation
              </span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400">
              Transform your client onboarding process with AI-powered
              automation. Reduce manual work, improve client satisfaction, and
              scale your agency efficiently.
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
              See how our client onboarding automation can transform your
              agency's operations
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
              Ready to Transform Your Client Onboarding?
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              Book a free strategy call to see how we can help you automate your
              client onboarding process.
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
