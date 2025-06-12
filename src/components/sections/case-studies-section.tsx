"use client";

import { motion } from "framer-motion";

interface CaseStudy {
  title: string;
  company: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
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
    title: "40% Revenue Growth in 90 Days",
    company: "B2B Services",
    results: [
      "40% revenue growth in 90 days",
      "60% faster deal closure",
      "85% reduction in missed follow-ups",
    ],
    image: "/case-studies/b2b-services.jpg",
  },
];

export function CaseStudiesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-48"
      id="case-studies"
    >
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Real <span className="text-gradient">Success</span> Stories
      </h2>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm"
          >
            <div className="relative h-48 w-full">
              <div className="bg-gradient-gold absolute inset-0 opacity-20" />
              <img
                src={caseStudy.image}
                alt={caseStudy.company}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {caseStudy.title}
                </h3>
                <p className="text-gradient font-semibold">
                  {caseStudy.company}
                </p>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-center text-zinc-300">
                    <span className="text-primary mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
