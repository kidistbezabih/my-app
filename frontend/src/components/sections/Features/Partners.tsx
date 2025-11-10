import React from 'react';
import { motion } from 'framer-motion';
import { PARTNERS } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Partners & Ecosystem</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships that accelerate customer outcomes and platform capabilities.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PARTNERS.map((group) => (
            <motion.div key={group.category} variants={fadeInUp} className="p-6 rounded-xl bg-[#F2F4F5] border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {group.items.map((i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
