"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface Certification {
  image: string;
  alt: string;
}

const teamMember: TeamMember = {
  name: "Vitalijus Alšauskas",
  role: "Founder",
  image: "/profile.png",
  social: {
    linkedin: "https://www.linkedin.com/in/vitalijusalsauskas/",
    twitter: "https://x.com/alsauskas_v",
    github: "",
  },
};

const certifications: Certification[] = [
  // {
  //   image: "/certifications/ai-expert.png",
  //   alt: "AI Expert Certification",
  // },
  // {
  //   image: "/certifications/azure-ai.png",
  //   alt: "Microsoft Azure AI Engineer",
  // },
  // {
  //   image: "/certifications/automation.png",
  //   alt: "Enterprise Automation Expert",
  // },
  // {
  //   image: "/certifications/cloud-architect.png",
  //   alt: "Cloud Solutions Architect",
  // },
];

export function TeamSection() {
  return (
    <section className="relative mt-32 w-full overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The Mind Behind <span className="text-gradient">Hyperion</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left Column - Team Description & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Building the Future of AI
              </h3>
              <p className="text-lg text-zinc-400">
                We believe in the power of AI to democratize technology and make
                advanced automation accessible to businesses of all sizes. Our
                approach combines cutting-edge AI with practical business
                understanding to deliver real, measurable results.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-black/50"
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute right-0 bottom-0 left-0 p-2 text-center text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {cert.alt}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Team Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500/90 to-green-500/90 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition-all hover:from-yellow-500 hover:to-green-500 hover:ring-white/20"
              >
                Want to join the team?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Team Member Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="group relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/20 to-green-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

              {/* Image Container */}
              <div className="relative h-full w-full">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-white">
                        {teamMember.name}
                      </h3>
                      <p className="text-gradient text-lg font-semibold">
                        {teamMember.role}
                      </p>
                    </div>
                    {/* Social Links */}
                    <div className="flex gap-4">
                      {teamMember.social.linkedin && (
                        <a
                          href={teamMember.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-black/50 p-2.5 text-white ring-1 ring-white/10 transition-all hover:bg-yellow-500 hover:ring-white/20"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {teamMember.social.twitter && (
                        <a
                          href={teamMember.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-black/50 p-2.5 text-white ring-1 ring-white/10 transition-all hover:bg-yellow-500 hover:ring-white/20"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
