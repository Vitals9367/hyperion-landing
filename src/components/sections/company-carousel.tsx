"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Company 1", logo: "/logos/company1.svg" },
  { name: "Company 2", logo: "/logos/company2.svg" },
  { name: "Company 3", logo: "/logos/company3.svg" },
  { name: "Company 4", logo: "/logos/company4.svg" },
  { name: "Company 5", logo: "/logos/company5.svg" },
  { name: "Company 6", logo: "/logos/company6.svg" },
  { name: "Company 7", logo: "/logos/company7.svg" },
  { name: "Company 8", logo: "/logos/company8.svg" },
];

export function CompanyCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Create a duplicated array for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of a single set of logos
      const singleSetWidth = containerRef.current.scrollWidth / 2;
      setContainerWidth(singleSetWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black pt-8">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary)_0%,_transparent_70%)] opacity-5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_transparent_0%,_rgba(0,0,0,0.8)_10%,_rgba(0,0,0,0.8)_90%,_transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-medium text-gray-400">
            Join the companies who trust Hyperion
          </h2>
        </div>

        {/* Logo Strip */}
        <div className="relative h-16 w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

          {/* Animated Logos */}
          <motion.div
            ref={containerRef}
            className="absolute flex h-full items-center"
            animate={{
              x: [0, -containerWidth],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            onAnimationComplete={() => {
              // Reset position instantly when animation completes
              if (containerRef.current) {
                containerRef.current.style.transform = "translateX(0)";
              }
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex h-8 w-32 items-center justify-center px-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
