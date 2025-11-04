"use client";

import { motion } from "framer-motion";

export default function MarketProof() {
  const platforms = [
    { name: "NameBio", logo: "📊" },
    { name: "Afternic", logo: "💼" },
    { name: "Sedo", logo: "🌍" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            As Seen On
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Premium domains like this are featured on leading marketplaces
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{platform.logo}</div>
                <div className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {platform.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

