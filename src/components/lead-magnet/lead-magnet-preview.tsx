import { Card } from "@/components/ui/card";

export function LeadMagnetPreview() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Preview Your Free Guide</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Get a sneak peek at the valuable content you'll receive, including our
          step-by-step guide and templates.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="bg-muted relative flex aspect-video items-center justify-center">
            <div className="text-muted-foreground p-4 text-center">
              <p className="text-lg font-medium">Video Tutorial Preview</p>
              <p className="text-sm">Step-by-step guide to AI automation</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Step-by-Step Video Tutorial
            </h3>
            <p className="text-muted-foreground">
              Learn how to implement AI automation in your business with our
              comprehensive video guide.
            </p>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="bg-muted relative flex aspect-video items-center justify-center">
            <div className="text-muted-foreground p-4 text-center">
              <p className="text-lg font-medium">Templates Preview</p>
              <p className="text-sm">Ready-to-use automation templates</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold">
              Ready-to-Use Templates
            </h3>
            <p className="text-muted-foreground">
              Get access to our collection of proven templates and scripts for
              immediate implementation.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
