import React from 'react';
import { motion } from 'framer-motion';
import { ANALYST_REPORTS } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const AnalystReports: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Analyst Reports</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Independent recognition across cloud security, compliance, and identity.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {ANALYST_REPORTS.map((r) => (
            <motion.div key={r.title} variants={fadeInUp} className="p-6 rounded-xl border border-gray-200">
              <div className="text-sm text-blue-700 font-medium">{r.source}</div>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-600">{r.summary}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
