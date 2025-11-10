import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CARDS } from '../../../lib/constants';
import { fadeInUp, staggerContainer, hoverLift } from '../../../lib/animations';

export const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Portfolio Companies</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Market‑leading solutions across cloud security, compliance, identity, infrastructure, and ERP.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO_CARDS.map((card) => (
            <motion.a
              key={card.name}
              href={card.href}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="block h-full p-6 rounded-xl bg-[#F2F4F5] border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{card.name}</h3>
              </div>
              <p className="mt-1 text-sm text-blue-600 font-medium">{card.tagline}</p>
              <p className="mt-3 text-gray-600">{card.blurb}</p>
              <span className="mt-4 inline-block text-blue-700 font-medium">Learn more →</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
