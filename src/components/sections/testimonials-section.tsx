"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  results: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We've seen a 3x increase in qualified leads since implementing their automation stack. Game-changing.",
    author: "Sarah Chen",
    role: "VP of Sales, TechCorp",
    results: "3x More Qualified Leads",
    image: "/testimonials/sarah-chen.jpg",
  },
  {
    quote:
      "The AI-powered outreach has completely transformed our sales process. We're closing deals faster than ever.",
    author: "Michael Rodriguez",
    role: "Sales Director, GrowthLabs",
    results: "40% Faster Deal Closure",
    image: "/testimonials/michael-rodriguez.jpg",
  },
  {
    quote:
      "Their solution helped us scale our sales team without hiring more reps. ROI was achieved in just 2 months.",
    author: "Emma Thompson",
    role: "CEO, ScaleUp Solutions",
    results: "2x Sales Team Efficiency",
    image: "/testimonials/emma-thompson.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-48"
    >
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        What Our <span className="text-gradient">Clients</span> Say
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-zinc-800">
                <div className="bg-gradient-gold absolute inset-0 opacity-20" />
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.author}
                </h3>
                <p className="text-sm text-zinc-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-6 text-lg text-zinc-300">{testimonial.quote}</p>
            <div className="text-gradient mt-6 font-semibold">
              {testimonial.results}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
