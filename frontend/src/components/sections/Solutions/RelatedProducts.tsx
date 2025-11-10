import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

interface Integration {
  product: string;
  description: string;
}

interface RelatedProductsProps {
  integrations: Integration[];
  title?: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  integrations,
  title = "Powered by AxionOre Portfolio",
}) => {
  const getProductSlug = (productName: string): string => {
    const slugMap: { [key: string]: string } = {
      Quorix: "quorix",
      AxionTrust: "axiontrust",
      Dern: "dern",
      Board3: "board3",
      "SentryOne ID": "sentryone-id",
      EdgeRP: "edgerp",
    };
    return (
      slugMap[productName] || productName.toLowerCase().replace(/\s+/g, "-")
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
            This solution leverages multiple products from the AxionOre
            ecosystem
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.a
              key={index}
              href={`/products/${getProductSlug(integration.product)}`}
              variants={fadeInUp}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                {integration.product}
                <ArrowRight className="w-5 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-blue-200 text-sm">{integration.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
