"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the free guide?",
    answer:
      "The guide includes a comprehensive video tutorial, ready-to-use templates, actionable checklists, and step-by-step instructions for implementing AI automation in your business.",
  },
  {
    question: "How long does it take to implement the automation?",
    answer:
      "Most businesses can implement the basic automation within 1-2 weeks. The exact timeline depends on your specific needs and current processes.",
  },
  {
    question: "What makes the pilot program exclusive?",
    answer:
      "The pilot program is limited to a select number of businesses to ensure we can provide personalized support and attention to each participant. You'll get direct access to our automation experts and priority implementation support.",
  },
  {
    question: "Do I need technical expertise to use the guide?",
    answer:
      "No technical expertise is required. The guide is designed for business owners and managers with no coding experience. We provide all the necessary tools and support to implement the automation.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our clients typically see a 50-70% reduction in manual tasks, 3x faster lead processing, and improved conversion rates. Results may vary based on your specific implementation and business needs.",
  },
];

export function LeadMagnetFAQ() {
  return (
    <section className="py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Get answers to common questions about our guide and pilot program.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
