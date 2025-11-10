import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import React from "react";

interface ProductCTAProps {
  productName: string;
  title?: string;
  description?: string;
}

export const ProductCTA: React.FC<ProductCTAProps> = ({
  productName,
  title,
  description,
}) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title || `Ready to Experience ${productName}?`}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {description ||
              `Join hundreds of enterprises that trust ${productName} to secure their critical infrastructure.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Demo
            </a>
            <a
              href="/company/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
