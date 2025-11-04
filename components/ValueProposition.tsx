"use client";

import { motion } from "framer-motion";
import { getDomainInfo } from "@/lib/utils";

export default function ValueProposition() {
  const domainInfo = getDomainInfo();

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why {domainInfo.displayName} is a{" "}
            <span className="text-premium-gold">Premium Investment</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This domain represents more than a web address—it&apos;s a strategic
            asset that positions your brand at the forefront of professional
            networking and B2B services. With exceptional memorability and
            inherent authority, {domainInfo.displayName} delivers immediate
            credibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Brand Authority",
              description:
                "Instant credibility and trust from day one. A premium domain name signals professionalism and establishes your brand as a leader in the networking and connection space.",
              icon: "🏆",
            },
            {
              title: "SEO Advantage",
              description:
                "High organic potential. The domain&apos;s semantic clarity and keyword relevance provide a natural boost to search engine rankings, reducing acquisition costs and accelerating growth.",
              icon: "📈",
            },
            {
              title: "Market Versatility",
              description:
                "Cross-industry adaptability. Whether you&apos;re launching a B2B platform, professional networking service, or consulting firm, this domain fits seamlessly.",
              icon: "🌐",
            },
            {
              title: "Appreciation",
              description:
                "Long-term digital asset growth. Premium domains have historically appreciated in value, making this a strategic investment that compounds over time.",
              icon: "💎",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

