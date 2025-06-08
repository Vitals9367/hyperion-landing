import { CheckCircle2 } from "lucide-react";

const problems = [
  "Manual lead generation taking up too much time",
  "Inconsistent outreach and follow-up processes",
  "Slow onboarding of new leads and customers",
  "Difficulty scaling your sales process",
];

const benefits = [
  "Step-by-step video tutorial on AI automation",
  "Ready-to-use templates and scripts",
  "Actionable checklists and workflows",
  "Exclusive access to our pilot program",
  "Priority support and implementation guidance",
];

export function LeadMagnetFeatures() {
  return (
    <section className="grid gap-12 py-12 md:grid-cols-2">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">The Problem</h2>
        <p className="text-muted-foreground text-lg">
          Many businesses struggle with inefficient processes that drain
          resources and slow down growth.
        </p>
        <ul className="space-y-4">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="bg-destructive/10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                <span className="text-destructive text-sm">!</span>
              </div>
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">What You'll Get</h2>
        <p className="text-muted-foreground text-lg">
          Our comprehensive guide and pilot program will help you transform your
          business processes.
        </p>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-primary h-6 w-6 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
