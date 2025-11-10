import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const Leadership: React.FC = () => {
  return (
    <section className="py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leadership & Governance</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Seasoned enterprise leaders guiding market‑defining innovation.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {LEADERSHIP.map((leader) => (
            <motion.div key={leader.name} variants={fadeInUp} className="p-6 rounded-xl bg-[#F2F4F5] border border-gray-200">
              <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                {leader.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{leader.name}</h3>
              <p className="text-sm text-blue-700 font-medium">{leader.role}</p>
              <p className="mt-2 text-gray-600">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
