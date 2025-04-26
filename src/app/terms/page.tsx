import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hyperion Systems",
  description: "Terms and conditions for using Hyperion Systems services",
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
            <div className="bg-secondary/5 dark:bg-secondary/10 rounded-xl p-6">
              <h2 className="mt-0 first:mt-0">Agreement to Terms</h2>
              <p className="text-base leading-7">
                By accessing or using Hyperion Systems' services, you agree to
                be bound by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using our services.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    1
                  </span>
                  Use License
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>
                    Permission is granted to temporarily access our services for
                    personal or business use, subject to the following
                    restrictions:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                      <span>You must not modify or copy our materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                      <span>
                        You must not use the materials for any commercial
                        purpose without authorization
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                      <span>
                        You must not attempt to decompile or reverse engineer
                        any software
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                      <span>
                        You must not remove any copyright or proprietary
                        notations
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    2
                  </span>
                  Account Terms
                </h2>
                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div className="border-border/50 rounded-lg border p-6">
                    <h3 className="text-xl">Account Requirements</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                        <span>
                          Create an account with accurate, complete information
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                        <span>
                          Maintain the security of your account credentials
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-border/50 rounded-lg border p-6">
                    <h3 className="text-xl">Account Responsibilities</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                        <span>Promptly notify us of any security breaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-primary/50 mt-2 h-1.5 w-1.5 rounded-full"></span>
                        <span>
                          Accept responsibility for all activities under your
                          account
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    3
                  </span>
                  Payment Terms
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p>For paid services:</p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                          <span className="text-primary">$</span>
                        </div>
                        <p className="text-base">Fees are payable in advance</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                          <span className="text-primary">↻</span>
                        </div>
                        <p className="text-base">
                          All fees are non-refundable unless specified
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                          <span className="text-primary">⚠</span>
                        </div>
                        <p className="text-base">
                          We may change our fees upon notice
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                          <span className="text-primary">📋</span>
                        </div>
                        <p className="text-base">
                          You are responsible for applicable taxes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-2xl">
                  <span className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-lg text-base font-semibold">
                    4
                  </span>
                  Intellectual Property
                </h2>
                <div className="border-border/50 mt-6 rounded-lg border p-6">
                  <p className="text-base leading-7">
                    The service and its original content, features, and
                    functionality are owned by Hyperion Systems and are
                    protected by international copyright, trademark, patent,
                    trade secret, and other intellectual property laws.
                  </p>
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
                    If you have questions about these Terms, please contact us
                    at:
                  </p>
                  <div className="mt-4 space-y-2 text-base">
                    <p>Email: vitalijus@hyperionaiagency.com</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="bg-secondary/5 dark:bg-secondary/10 mt-12 rounded-xl p-6">
              <h2 className="mt-0">Changes to Terms</h2>
              <p className="mb-0">
                We reserve the right to modify or replace these Terms at any
                time. We will provide notice of any changes by posting the new
                Terms on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
