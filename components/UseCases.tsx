"use client";

import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      industry: "AI Startup",
      application:
        "Build instant authority and visibility in the AI networking space. Establish credibility with investors and customers from day one.",
      benefit: "Immediate brand recognition and trust",
    },
    {
      industry: "SaaS Brand",
      application:
        "Dominate your niche from day one with a premium domain that speaks to professional connections and B2B services.",
      benefit: "Reduced customer acquisition costs",
    },
    {
      industry: "Venture Firm",
      application:
        "Establish credibility with a powerful brand that signals professionalism and network strength to potential portfolio companies.",
      benefit: "Enhanced brand positioning",
    },
    {
      industry: "Consulting Firm",
      application:
        "Leverage the domain&apos;s professional connotations to attract high-value clients and partnerships.",
      benefit: "Premium brand perception",
    },
    {
      industry: "Professional Network",
      application:
        "Launch a B2B networking platform with a domain that immediately communicates your value proposition.",
      benefit: "Natural SEO advantage",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Strategic Use Cases
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Industry
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Strategic Application & Benefit
                  </th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((useCase, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-semibold text-lg">
                      {useCase.industry}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      <p className="mb-2">{useCase.application}</p>
                      <p className="text-premium-gold font-medium">
                        ✅ {useCase.benefit}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

