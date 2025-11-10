import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const Awards: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Awards & Recognition</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Industry leadership and customer recognition across the portfolio.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {AWARDS.map((a) => (
            <motion.div key={a.name} variants={fadeInUp} className="p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{a.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{a.year}</p>
              {a.details ? <p className="mt-2 text-gray-700">{a.details}</p> : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
