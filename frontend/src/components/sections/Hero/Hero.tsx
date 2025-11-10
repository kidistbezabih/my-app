import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#101828] via-[#0a0e1a] to-[#050810] overflow-hidden">
      {/* Tech-Themed 2D Background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Circuit Board Pattern */}
            <pattern id="circuit" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal lines */}
              <line x1="0" y1="50" x2="80" y2="50" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
              <line x1="120" y1="50" x2="200" y2="50" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
              <line x1="0" y1="150" x2="100" y2="150" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2"/>
              <line x1="140" y1="150" x2="200" y2="150" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2"/>
              
              {/* Vertical lines */}
              <line x1="50" y1="0" x2="50" y2="80" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
              <line x1="50" y1="120" x2="50" y2="200" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"/>
              <line x1="150" y1="0" x2="150" y2="100" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2"/>
              <line x1="150" y1="140" x2="150" y2="200" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2"/>
              
              {/* Circuit nodes */}
              <circle cx="50" cy="50" r="5" fill="rgba(59, 130, 246, 0.6)"/>
              <circle cx="150" cy="50" r="5" fill="rgba(59, 130, 246, 0.6)"/>
              <circle cx="50" cy="150" r="5" fill="rgba(99, 102, 241, 0.6)"/>
              <circle cx="150" cy="150" r="5" fill="rgba(99, 102, 241, 0.6)"/>
              
              {/* Small squares (microchips) */}
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1"/>
              <rect x="145" y="145" width="10" height="10" fill="none" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1"/>
            </pattern>

            {/* Binary Code Pattern */}
            <pattern id="binary" width="100" height="40" patternUnits="userSpaceOnUse">
              <text x="5" y="15" fill="rgba(59, 130, 246, 0.3)" fontSize="12" fontFamily="monospace">1010</text>
              <text x="5" y="35" fill="rgba(99, 102, 241, 0.3)" fontSize="12" fontFamily="monospace">0110</text>
              <text x="55" y="15" fill="rgba(59, 130, 246, 0.3)" fontSize="12" fontFamily="monospace">1100</text>
              <text x="55" y="35" fill="rgba(99, 102, 241, 0.3)" fontSize="12" fontFamily="monospace">0011</text>
            </pattern>

            {/* Grid with dots (server rack style) */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="rgba(59, 130, 246, 0.4)"/>
              <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
              <line x1="20" y1="0" x2="20" y2="40" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>

          {/* Apply circuit board pattern */}
          <rect width="100%" height="100%" fill="url(#circuit)"/>
          
          {/* Apply grid pattern overlay */}
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>
          
          {/* Apply binary code in specific areas */}
          <rect x="0" y="0" width="30%" height="100%" fill="url(#binary)" opacity="0.6"/>
          <rect x="70%" y="0" width="30%" height="100%" fill="url(#binary)" opacity="0.6"/>
        </svg>
      </div>

      {/* Animated Tech Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {/* Data Flow Lines */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Animated flowing line 1 */}
          <motion.line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="2"
            strokeDasharray="10,5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Animated flowing line 2 */}
          <motion.line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="2"
            strokeDasharray="10,5"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 100 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Vertical data flow */}
          <motion.line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            strokeDasharray="8,4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="rgba(99, 102, 241, 0.4)"
            strokeWidth="2"
            strokeDasharray="8,4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 100 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              The Future of Enterprise Technology
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              AxionOre is a technology holding company that builds and scales
              the next generation of enterprise solutions. From cybersecurity
              and cloud infrastructure to compliance automation and enterprise
              operations, our portfolio companies are built to define their
              markets.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <a
                href="/get-demo"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get a Demo
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors backdrop-blur-sm"
              >
                Explore Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        AxionOre Platform
                      </h3>
                      <p className="text-blue-200 text-sm">
                        Enterprise Solutions
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold text-2xl">
                        99.9%
                      </div>
                      <div className="text-blue-200 text-sm">Uptime</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold text-2xl">
                        500+
                      </div>
                      <div className="text-blue-200 text-sm">Clients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full opacity-20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
