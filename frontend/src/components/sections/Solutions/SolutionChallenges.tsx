import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import React from "react";

interface SolutionChallengesProps {
  challenges: string[];
  solutionApproach: string[];
}

export const SolutionChallenges: React.FC<SolutionChallengesProps> = ({
  challenges,
  solutionApproach,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#EDF0F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                The Challenge
              </h2>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-[#F2F4F5] rounded-lg p-4 border border-red-100"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 font-bold text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Approach */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <ArrowRight className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Solution
              </h2>
            </div>
            <div className="space-y-4">
              {solutionApproach.map((approach, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-[#F2F4F5] rounded-lg p-4 border border-green-100"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 font-bold text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
