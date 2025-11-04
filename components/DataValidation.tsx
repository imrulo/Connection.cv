"use client";

import { motion } from "framer-motion";
import { getDomainInfo } from "@/lib/utils";

export default function DataValidation() {
  const domainInfo = getDomainInfo();

  const keywordData = [
    { keyword: "professional networking", volume: "12,100", cpc: "$3.45" },
    { keyword: "business connections", volume: "8,900", cpc: "$2.80" },
    { keyword: "B2B networking", volume: "6,500", cpc: "$4.20" },
    { keyword: "professional connections", volume: "4,400", cpc: "$2.95" },
  ];

  const comparableSales = [
    { domain: "Connect.io", sale: "$85,000", year: "2023" },
    { domain: "Network.pro", sale: "$45,000", year: "2022" },
    { domain: "LinkHub.com", sale: "$120,000", year: "2023" },
    { domain: "ConnectNow.biz", sale: "$28,000", year: "2022" },
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
            Market Data & Validation
          </h2>

          {/* Keyword Volume & CPC */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Keyword Volume & CPC Analysis
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Keyword
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Monthly Volume
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Avg. CPC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {keywordData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                        {row.keyword}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {row.volume}
                      </td>
                      <td className="px-6 py-4 text-premium-gold font-semibold">
                        {row.cpc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparable Sales */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Comparable Premium Domain Sales
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Domain
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Sale Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparableSales.map((sale, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                        {sale.domain}
                      </td>
                      <td className="px-6 py-4 text-premium-gold font-semibold text-lg">
                        {sale.sale}
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                        {sale.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Valuation */}
          <div className="bg-gradient-to-r from-premium-gold/20 to-yellow-400/20 dark:from-premium-gold/10 dark:to-yellow-400/10 border-2 border-premium-gold rounded-xl p-8 text-center">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Comparable sales suggest an estimated value range of{" "}
              <span className="text-premium-gold text-2xl sm:text-3xl">
                {domainInfo.valuation}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

