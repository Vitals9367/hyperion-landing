"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  MessageSquare,
  FileText,
  Phone,
  Workflow,
  Users,
  Clock,
  Zap,
  Target,
  ArrowRight,
  ArrowDown,
  Search,
  MessageCircle,
  Megaphone,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const problems = [
  {
    icon: Search,
    title: "Wasting Precious Time on Cold Prospecting?",
    description:
      "Your team spends hours on manual research and outreach, while qualified buyers wait for your attention.",
  },
  {
    icon: MessageCircle,
    title: "Losing Hot Leads to Communication Gaps?",
    description:
      "Prospects show interest, ask for pricing, then disappear. Your follow-up process is costing you deals.",
  },
  {
    icon: Megaphone,
    title: "Struggling to Scale Outreach Without Huge Costs?",
    description:
      "You need to 10x your outreach, but hiring and training more salespeople isn't financially viable.",
  },
  {
    icon: PhoneCall,
    title: "Buried Under Repetitive Customer Inquiries?",
    description:
      "Your high-value time is consumed by basic scheduling and questions, while growth opportunities wait.",
  },
];

const solutions = [
  {
    icon: AlertTriangle,
    title: "Prometheus",
    description: "Your AI Lead Generation Agent",
    copy: "A dedicated AI researcher that works 24/7 to find and qualify your ideal prospects, delivering them directly to your CRM.",
    responsibilities: [
      "Research and identify ideal prospects",
      "Qualify leads based on custom criteria",
      "Deliver qualified leads to your CRM",
      "Track and optimize lead quality",
    ],
    avatar: "/agents/prometheus.png",
  },
  {
    icon: MessageSquare,
    title: "Hermes",
    description: "Your AI Sales & Communication Agent",
    copy: "Your tireless sales and communication specialist that handles all customer interactions, from prospecting to appointment scheduling.",
    responsibilities: [
      "Handle outbound prospecting",
      "Manage inbound inquiries",
      "Schedule appointments automatically",
      "Optimize response strategies",
    ],
    avatar: "/agents/hermes.png",
    avatarDescription:
      "A dynamic figure in mid-stride, arms spread wide with golden wings at his ankles and a caduceus staff in hand. Dressed in a modern business suit with flowing, ethereal elements, standing in a high-tech office environment. Dramatic lighting from above creates a sense of speed and communication, with digital symbols and messages swirling around him. His pose captures the essence of swift communication and omnipresence, embodying the messenger of the digital age.",
  },
  {
    icon: Users,
    title: "Hestia",
    description: "Your AI Customer Success Agent",
    copy: "A dedicated customer success manager that guides prospects through your sales funnel and ensures a seamless customer journey.",
    responsibilities: [
      "Guide prospects through sales funnel",
      "Automate client onboarding",
      "Monitor customer experience",
      "Track customer journey progress",
    ],
    avatar: "/agents/hestia.png",
    avatarDescription:
      "A nurturing figure in a protective stance, with arms outstretched in a welcoming gesture. Dressed in a blend of modern business attire and flowing robes, surrounded by a warm, golden glow. Standing in a hybrid space that combines elements of a modern office and a welcoming home environment. Digital connections and customer journey paths visible as glowing threads connecting to her. Her pose radiates warmth and trust, embodying the guardian of customer relationships and success.",
  },
];

export function SolutionsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(218,165,32,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,86,49,0.15),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,215,0,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] bg-[size:32px_32px]" />
      </div>

      <div
        className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
        id="challenges"
      >
        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frustrated by{" "}
            <span className="text-gradient">Growth Bottlenecks</span>?
          </h2>
        </motion.div>

        <div className="mt-32 grid gap-24 lg:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-8"
            >
              <motion.div
                className="flex items-center gap-12"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-gold flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <problem.icon className="h-10 w-10 text-black" />
                </motion.div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-tight font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="text-lg text-zinc-400">{problem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 text-center"
        >
          <Link
            href="#solutions"
            className="group inline-flex cursor-pointer flex-col items-center gap-4 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("solutions")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-gradient cursor-pointer text-lg font-semibold">
              Want to Solve It?
            </span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative cursor-pointer"
            >
              <div className="bg-gradient-gold absolute inset-0 cursor-pointer rounded-full opacity-20 blur-xl" />
              <div className="relative cursor-pointer rounded-full border border-zinc-800 bg-black/50 p-4 backdrop-blur-sm">
                <ArrowDown
                  className="text-gradient h-8 w-8 cursor-pointer"
                  color="white"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* VSL Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-48 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See How We <span className="text-gradient">Transform</span>{" "}
            Businesses
          </h2>
          <div className="mx-auto mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-gold rounded-full p-4">
                  <svg
                    className="h-12 w-12 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-48 text-center"
          id="solutions"
        >
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The AI Workforce That <span className="text-gradient">Scales</span>{" "}
            Your Revenue
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Unlock triple the productivity with AI agents expertly handling lead
            generation, outreach, and client management, allowing your business
            to scale without increasing headcount
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                transition: { duration: 0.2 },
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <div className="bg-gradient-gold absolute inset-0 opacity-20" />
                <div className="relative h-full w-full overflow-hidden">
                  <motion.img
                    src={solution.avatar}
                    alt={solution.title}
                    className="relative h-full w-full origin-top object-cover object-top transition-all duration-500 group-hover:scale-[1.2] group-hover:brightness-110 before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 before:group-hover:translate-x-[100%]"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 -bottom-8 bg-gradient-to-b from-black/0 via-black/70 via-[60%] to-black to-[90%] transition-opacity duration-300 group-hover:opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  className="absolute right-0 bottom-0 left-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
                    {solution.title}
                  </h3>
                  <p className="text-gradient text-lg font-medium">
                    {solution.description}
                  </p>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.p
                  className="text-lg text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {solution.copy}
                </motion.p>
                <ul className="mt-6 space-y-3">
                  {solution.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-zinc-300 transition-colors duration-300 group-hover:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="bg-gradient-gold flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-3 w-3 cursor-pointer text-black" />
                      </motion.div>
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Want to see how it would look like in your business? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="#contact"
            className="group inline-flex cursor-pointer flex-col items-center gap-4 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-gradient cursor-pointer text-lg font-semibold">
              Ready to see it work for you?
            </span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative cursor-pointer"
            >
              <div className="bg-gradient-gold absolute inset-0 cursor-pointer rounded-full opacity-20 blur-xl" />
              <div className="relative cursor-pointer rounded-full border border-zinc-800 bg-black/50 p-4 backdrop-blur-sm">
                <ArrowDown
                  className="text-gradient h-8 w-8 cursor-pointer"
                  color="white"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Case Studies Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-48"
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real <span className="text-gradient">Success</span> Stories
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
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
            ].map((caseStudy, index) => (
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
        </motion.div> */}

        {/* Testimonials Section */}
        {/* <motion.div
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
            {[
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
            ].map((testimonial, index) => (
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
                <p className="mt-6 text-lg text-zinc-300">
                  {testimonial.quote}
                </p>
                <div className="text-gradient mt-6 font-semibold">
                  {testimonial.results}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
