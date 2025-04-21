import Image from "next/image";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types";

interface ResultsSectionProps extends SectionProps {
  count: {
    efficiency: number;
    revenue: number;
    downtime: number;
    savings: number;
  };
}

export function ResultsSection({ isVisible, count }: ResultsSectionProps) {
  return (
    <section className="bg-white py-20 md:py-24" id="results">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            Client Success
          </div>
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            Real Results for Real Businesses
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
            See how our AI solutions have transformed operations and driven
            growth
          </p>
        </motion.div>

        <div className="space-y-12">
          {isVisible && (
            <>
              <motion.div
                className="overflow-hidden rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                      E-commerce
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      Global Shop Direct
                    </h3>

                    <div className="mb-6 space-y-4">
                      <p className="text-sm text-gray-600">
                        "Hyperion's AI automation tools transformed our customer
                        service operations, reducing response times by 80% while
                        handling 3x the volume."
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white p-3 text-center">
                          <p className="text-xl font-bold text-emerald-600">
                            {count.efficiency}%
                          </p>
                          <p className="text-xs text-gray-600">
                            Faster response time
                          </p>
                        </div>
                        <div className="rounded-lg bg-white p-3 text-center">
                          <p className="text-xl font-bold text-emerald-600">
                            {count.revenue}%
                          </p>
                          <p className="text-xs text-gray-600">
                            Increase in sales
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/images/case-study-1.jpg"
                      alt="E-commerce Case Study"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-2xl bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative order-2 h-64 md:order-1 md:h-auto">
                    <Image
                      src="/images/case-study-2.jpg"
                      alt="Manufacturing Case Study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 p-8 md:order-2 md:p-10">
                    <div className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                      Manufacturing
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      Precision Industries
                    </h3>

                    <div className="mb-6 space-y-4">
                      <p className="text-sm text-gray-600">
                        "The predictive maintenance AI from Hyperion reduced our
                        downtime by 45% and extended equipment lifespan by 30%,
                        resulting in massive cost savings."
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white p-3 text-center">
                          <p className="text-xl font-bold text-emerald-600">
                            {count.downtime}%
                          </p>
                          <p className="text-xs text-gray-600">Less downtime</p>
                        </div>
                        <div className="rounded-lg bg-white p-3 text-center">
                          <p className="text-xl font-bold text-emerald-600">
                            ${count.savings.toFixed(1)}M
                          </p>
                          <p className="text-xs text-gray-600">
                            Annual savings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
