"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface SuccessStory {
  type: "case-study" | "testimonial";
  title: string;
  company: string;
  quote?: string;
  results?: string[];
  image: string;
  author?: {
    name: string;
    role: string;
    image: string;
  };
}

const successStories: SuccessStory[] = [
  {
    type: "case-study",
    title: "From 50 to 500 Leads Monthly",
    company: "Enterprise SaaS",
    results: [
      "500+ qualified leads monthly",
      "75% reduction in manual tasks",
      "3x increase in sales team productivity",
    ],
    image: "/case-studies/saas-company.jpg",
  },
  {
    type: "testimonial",
    title: "Game-Changing Automation",
    company: "TechCorp",
    quote:
      "We've seen a 3x increase in qualified leads since implementing their automation stack. The AI-powered outreach has completely transformed our sales process.",
    image: "/testimonials/sarah-chen.jpg",
    author: {
      name: "Sarah Chen",
      role: "VP of Sales",
      image: "/testimonials/sarah-chen.jpg",
    },
  },
  {
    type: "case-study",
    title: "40% Revenue Growth in 90 Days",
    company: "B2B Services",
    results: [
      "40% revenue growth in 90 days",
      "60% faster deal closure",
      "85% reduction in missed follow-ups",
    ],
    image: "/case-studies/b2b-services.jpg",
  },
  {
    type: "testimonial",
    title: "Exceptional ROI",
    company: "GrowthTech",
    quote:
      "The automation solution has been a game-changer for our sales team. We've seen a 40% increase in conversion rates and significantly reduced our operational costs.",
    image: "/testimonials/michael-rodriguez.jpg",
    author: {
      name: "Michael Rodriguez",
      role: "CEO",
      image: "/testimonials/michael-rodriguez.jpg",
    },
  },
];

export function SuccessStoriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_0%,_transparent_70%)] opacity-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-gold/[0.08] ring-primary/10 mb-8 inline-flex items-center rounded-full px-6 py-2.5 shadow-sm ring-1">
            <span className="bg-gradient-gold bg-clip-text text-sm font-semibold text-transparent">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Real <span className="text-gradient">Results</span> from Real
            Clients
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={story.image}
                  alt={story.company}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {story.title}
                      </h3>
                      <p className="text-gradient font-semibold">
                        {story.company}
                      </p>
                    </div>
                    {story.type === "testimonial" && (
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {story.type === "testimonial" && story.author && (
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-zinc-800">
                      <Image
                        src={story.author.image}
                        alt={story.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {story.author.name}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {story.author.role}
                      </p>
                    </div>
                  </div>
                )}

                {story.quote ? (
                  <p className="text-sm text-zinc-300 italic">
                    "{story.quote}"
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {story.results?.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-zinc-300"
                      >
                        <span className="text-primary mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
