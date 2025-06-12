"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    description:
      "Professional certification for designing distributed systems on AWS",
    image: "/certifications/aws-solutions-architect.png",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2023",
    description:
      "Expert certification for cloud architecture and infrastructure design",
    image: "/certifications/google-cloud-architect.png",
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    year: "2023",
    description:
      "Advanced certification for Azure cloud architecture and solutions",
    image: "/certifications/azure-solutions-architect.png",
  },
  {
    name: "Certified AI Professional",
    issuer: "Stanford University",
    year: "2023",
    description: "Specialized certification in AI and machine learning",
    image: "/certifications/stanford-ai.png",
  },
  {
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    year: "2023",
    description: "Professional certification in agile project management",
    image: "/certifications/scrum-master.png",
  },
  {
    name: "Certified Information Systems Security Professional",
    issuer: "ISC2",
    year: "2023",
    description: "Advanced certification in information security",
    image: "/certifications/cissp.png",
  },
];

export function CertificationsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-48"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our <span className="text-gradient">Expertise</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Backed by industry-leading certifications and continuous learning
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-zinc-800 bg-black/50 p-6 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                <div className="bg-gradient-gold absolute inset-0 opacity-20" />
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h3>
                  <span className="text-sm text-zinc-400">{cert.year}</span>
                </div>
                <p className="text-gradient mt-1 text-sm font-medium">
                  {cert.issuer}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{cert.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Verified Certification</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/50 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm">
          <Award className="h-4 w-4 text-yellow-500" />
          <span>Continuously expanding our expertise</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
