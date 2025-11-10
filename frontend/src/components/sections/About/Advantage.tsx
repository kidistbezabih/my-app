import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';
import { ADVANTAGE_POINTS } from '../../../lib/constants';
import { fadeInUp, staggerContainer } from '../../../lib/animations';

export const Advantage: React.FC = () => {
  return (
    <section className="py-24 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The AxionOre Advantage</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Purpose‑built companies with shared innovation DNA and enterprise‑grade foundations.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {ADVANTAGE_POINTS.map((point, idx) => {
            const icons = [Target, Users, Shield, TrendingUp];
            const Icon = icons[idx];
            return (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                    <p className="mt-2 text-gray-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
