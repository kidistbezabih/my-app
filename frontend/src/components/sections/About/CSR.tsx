import React from 'react';
import { motion } from 'framer-motion';
import { CSR } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const CSRSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CSR & Sustainability</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Environmental responsibility, social impact, and rigorous governance.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CSR.map((group) => (
            <motion.div key={group.heading} variants={fadeInUp} className="p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">{group.heading}</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
                {group.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
