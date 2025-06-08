import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, FileText, Users, Zap } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Get Your Free Guide",
    description:
      "Download our comprehensive guide and start learning about AI automation implementation.",
  },
  {
    icon: CheckCircle2,
    title: "Apply for the Pilot",
    description:
      "Fill out a quick application to join our exclusive pilot program.",
  },
  {
    icon: Users,
    title: "Onboarding Call",
    description:
      "Schedule a personalized onboarding call with our automation experts.",
  },
  {
    icon: Zap,
    title: "Implementation",
    description:
      "Get hands-on support to implement AI automation in your business.",
  },
];

export function LeadMagnetProcess() {
  return (
    <section className="py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Our simple 4-step process makes it easy to get started with AI
          automation.
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <step.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 transform md:block">
                  <ArrowRight className="text-muted-foreground h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
