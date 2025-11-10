import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import React from "react";

interface TechDifferentiator {
  title: string;
  description: string;
}

interface TechDifferentiatorsProps {
  differentiators: TechDifferentiator[];
  title?: string;
  subtitle?: string;
}

export const TechDifferentiators: React.FC<TechDifferentiatorsProps> = ({
  differentiators,
  title = "Technical Differentiators",
  subtitle = "What sets us apart from the competition",
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-blue-200">{diff.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
