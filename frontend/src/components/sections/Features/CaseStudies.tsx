import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Enterprise outcomes across regulated and large‑scale environments.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CASE_STUDIES.map((c) => (
            <motion.div key={c.customer} variants={fadeInUp} className="p-6 rounded-xl bg-[#F2F4F5] border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{c.customer}</h3>
              <p className="mt-2 text-sm text-gray-500">Challenge: {c.challenge}</p>
              <p className="mt-2 text-gray-700">Results: {c.results}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
