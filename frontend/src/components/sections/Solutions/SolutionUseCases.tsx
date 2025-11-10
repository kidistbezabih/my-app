import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import React from "react";

interface UseCase {
  title: string;
  description: string;
  benefits: string[];
}

interface SolutionUseCasesProps {
  useCases: UseCase[];
  title?: string;
  subtitle?: string;
}

export const SolutionUseCases: React.FC<SolutionUseCasesProps> = ({
  useCases,
  title = "Key Use Cases",
  subtitle = "Real-world applications delivering measurable business value",
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F2F4F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>

              <div className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
