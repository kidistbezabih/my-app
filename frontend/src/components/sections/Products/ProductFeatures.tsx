import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  title = "Key Features",
  subtitle,
  features,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
