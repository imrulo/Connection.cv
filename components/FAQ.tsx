"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getDomainInfo } from "@/lib/utils";

export default function FAQ() {
  const domainInfo = getDomainInfo();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is this domain valuable?",
      answer: `${domainInfo.displayName} is valuable because it combines semantic clarity with brand authority. The word "Connection" is immediately recognizable and relevant to professional networking, B2B services, and relationship-building industries. The .cv TLD offers unique positioning, and the domain's memorability and SEO potential make it a strategic digital asset.`,
    },
    {
      question: "Who benefits most from owning this domain?",
      answer: `This domain is ideal for AI startups, SaaS companies, venture firms, consulting businesses, and professional networking platforms. Any organization looking to establish instant credibility and reduce customer acquisition costs through natural SEO will benefit from owning ${domainInfo.displayName}.`,
    },
    {
      question: "How do I make an offer?",
      answer: `You can reach out via WhatsApp at the link provided, or email directly at imrulo.eth@proton.me. All serious inquiries are welcome, and we'll work with you to find a fair price based on comparable sales and market valuation.`,
    },
    {
      question: "How is ownership transferred?",
      answer: `Ownership transfer is conducted securely through Escrow.com. Once terms are agreed upon, funds are held in escrow, the domain is transferred to your account, and payment is released to the seller. This process typically takes 3-5 business days and ensures complete security for both parties.`,
    },
    {
      question: "What happens post-purchase?",
      answer: `After the transaction is complete, you'll receive full access to the domain registrar account. You can immediately point the domain to your hosting, configure DNS settings, and begin building your brand. We provide full support throughout the transfer process.`,
    },
    {
      question: "Is this a one-time opportunity?",
      answer: `Yes, premium domains of this quality are rare and highly sought after. Once sold, this opportunity will not be available again. We recommend acting quickly if you're interested, as we've received multiple inquiries this week.`,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-600 dark:text-gray-400 flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

