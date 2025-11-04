"use client";

import { motion } from "framer-motion";
import { getDomainInfo } from "@/lib/utils";

export default function Provenance() {
  const domainInfo = getDomainInfo();

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Domain Provenance
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Originally registered in <strong>{domainInfo.year}</strong>,{" "}
              {domainInfo.displayName} has been privately held and meticulously
              maintained. This domain represents a rare opportunity to acquire a
              premium digital asset with a clean history and strong brand
              potential.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Now exclusively available for acquisition, this domain offers
              immediate brand recognition and a foundation for long-term digital
              success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

