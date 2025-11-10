import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import React from "react";

interface CustomerStory {
  customer: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics?: string[];
}

interface CustomerStoriesProps {
  stories: CustomerStory[];
  title?: string;
  subtitle?: string;
}

export const CustomerStories: React.FC<CustomerStoriesProps> = ({
  stories,
  title = "Customer Success Stories",
  subtitle = "See how leading enterprises achieve remarkable results",
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.customer}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {story.industry}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-600">{story.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-600">{story.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Results
                  </h4>
                  <p className="text-gray-900 font-medium mb-3">
                    {story.results}
                  </p>

                  {story.metrics && story.metrics.length > 0 && (
                    <div className="grid grid-cols-1 gap-2">
                      {story.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
