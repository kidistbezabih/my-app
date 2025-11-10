import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {COMPANY_STATS.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{s.value}</div>
              <div className="mt-1 text-gray-600 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
