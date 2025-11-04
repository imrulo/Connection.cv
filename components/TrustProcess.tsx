"use client";

import { motion } from "framer-motion";

export default function TrustProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Secure Transaction Process
          </h2>

          <div className="space-y-8">
            {/* Escrow.com */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🔒</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Secure Escrow Service
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                All transactions are conducted through{" "}
                <strong className="text-premium-gold">Escrow.com</strong>, the
                world&apos;s most trusted domain escrow service. This ensures
                complete security, transparency, and peace of mind for both
                parties.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-premium-gold/10 to-yellow-400/10 dark:from-premium-gold/5 dark:to-yellow-400/5 rounded-xl p-8 border border-premium-gold/30">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                &quot;Flawless acquisition experience — secure, transparent, and
                fast. The escrow process was seamless, and the domain transfer
                completed without any issues. Highly recommended.&quot;
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                — Previous Buyer
              </p>
            </div>

            {/* Bundle Offer */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border-2 border-premium-gold">
              <p className="text-lg sm:text-xl text-gray-900 dark:text-white text-center font-semibold">
                💼 Interested in multiple domains? Ask about{" "}
                <span className="text-premium-gold">portfolio pricing</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

