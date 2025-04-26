import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hyperion Systems",
  description:
    "Privacy policy and data handling practices for Hyperion Systems",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background relative min-h-screen w-full py-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary)_0%,_transparent_35%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_var(--secondary)_0%,_transparent_30%)] opacity-5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-display text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
            <div className="bg-secondary/5 dark:bg-secondary/10 rounded-xl p-6">
              <h2 className="mt-0 first:mt-0">Introduction</h2>
              <p className="text-base leading-7">
                At Hyperion Systems, we take your privacy seriously. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our services.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    1
                  </span>
                  Information We Collect
                </h2>
                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div className="border-border/50 rounded-lg border p-6">
                    <h3 className="text-xl">Personal Information</h3>
                    <p>
                      We may collect personal information that you provide to
                      us, including but not limited to:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Name and contact information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Business information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Payment information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Communication preferences
                      </li>
                    </ul>
                  </div>
                  <div className="border-border/50 rounded-lg border p-6">
                    <h3 className="text-xl">Usage Information</h3>
                    <p>
                      We automatically collect certain information about your
                      device when you use our services, including:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Log and usage data
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Device information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Location information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                        Cookies and tracking technologies
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    2
                  </span>
                  How We Use Your Information
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>We use the information we collect to:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Provide and maintain our services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Improve user experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Process transactions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Send administrative information
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Respond to inquiries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Marketing communications
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    3
                  </span>
                  Information Sharing
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>We may share your information with:</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Service providers and business partners
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Legal and regulatory authorities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Professional advisors
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Business transferees in case of merger or acquisition
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    4
                  </span>
                  Your Rights
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>You have the right to:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Access your personal information
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Correct inaccurate information
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Request deletion of your information
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Object to processing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-primary/50 h-1.5 w-1.5 rounded-full"></span>
                      Withdraw consent
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    5
                  </span>
                  Contact Us
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>
                    If you have questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <div className="mt-4 space-y-2 text-base">
                    <p>Email: vitalijus@hyperionaiagency.com</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="bg-secondary/5 dark:bg-secondary/10 mt-12 rounded-xl p-6">
              <h2 className="mt-0">Changes to This Policy</h2>
              <p className="mb-0">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
