import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Award, Medal, Star, Trophy } from "lucide-react";

const AwardsPage = () => {
  const awards = [
    {
      category: "Analyst Leadership Positions",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      items: [
        {
          name: "Gartner Magic Quadrant Leader - CSPM",
          product: "Quorix",
          year: "2024",
          description:
            "Recognized for completeness of vision and ability to execute",
        },
        {
          name: "Forrester Wave Leader - IGA",
          product: "SentryOne ID",
          year: "2024",
          description: "Leader for AI-powered access intelligence",
        },
        {
          name: "Forrester Wave Leader - Cloud Workload Protection",
          product: "Quorix",
          year: "2024",
          description: "Leading container and serverless security",
        },
        {
          name: "KuppingerCole Leadership Compass Leader - PAM",
          product: "Dern",
          year: "2024",
          description: "Overall leader in privileged access management",
        },
      ],
    },
    {
      category: "Customer Choice Awards",
      icon: Star,
      color: "from-blue-500 to-indigo-500",
      items: [
        {
          name: "Gartner Peer Insights Customers' Choice - IGA",
          product: "SentryOne ID",
          year: "2024",
          description: "Based on verified customer reviews and ratings",
        },
        {
          name: "Gartner Peer Insights - 4.8/5 Rating",
          product: "Quorix",
          year: "2024",
          description: "High customer satisfaction for cloud security",
        },
      ],
    },
    {
      category: "Innovation & Excellence",
      icon: Medal,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          name: "Disruptive Innovator - Next-Generation ERP",
          product: "EdgeRP",
          year: "2024",
          description: "Recognized for security-first ERP architecture",
        },
        {
          name: "Emerging Leader - Infrastructure Automation",
          product: "Board3",
          year: "2024",
          description: "Leading visual Infrastructure as Code innovation",
        },
        {
          name: "Strong Performer - Compliance Automation",
          product: "AxionTrust",
          year: "2024",
          description: "Multi-framework automation excellence",
        },
        {
          name: "Strong Performer - Privileged Access Management",
          product: "Dern",
          year: "2024",
          description: "Just-in-time access and session analytics",
        },
      ],
    },
    {
      category: "Portfolio Achievements",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          name: "12 Industry Analyst Leadership Positions",
          product: "Portfolio-wide",
          year: "2024",
          description: "Across all AxionOre subsidiary companies",
        },
        {
          name: "25+ Major Industry Awards",
          product: "Portfolio-wide",
          year: "2024",
          description:
            "Recognition across cybersecurity and enterprise software",
        },
        {
          name: "50+ Patents Pending",
          product: "Portfolio-wide",
          year: "2024",
          description: "Innovation in AI, security, and automation",
        },
      ],
    },
  ];

  const getProductSlug = (productName: string): string => {
    if (productName === "Portfolio-wide") return "/products";

    const slugMap: { [key: string]: string } = {
      Quorix: "quorix",
      AxionTrust: "axiontrust",
      Dern: "dern",
      Board3: "board3",
      "SentryOne ID": "sentryone-id",
      EdgeRP: "edgerp",
    };
    return slugMap[productName] || productName.toLowerCase();
  };

  return (
    <div>
      <SEO
        title="Awards & Recognition — Industry Excellence | AxionOre"
        description="AxionOre portfolio companies have earned 12 analyst leadership positions and 25+ major industry awards across cybersecurity and enterprise software."
      />

      <PageHeader
        title="Awards & Recognition"
        subtitle="Industry awards and leadership positions across the AxionOre portfolio"
        eyebrow="Resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Awards & Recognition" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Market Leadership Across the Portfolio
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AxionOre portfolio companies have earned widespread recognition from
            industry analysts, customers, and industry organizations for
            innovation, excellence, and market leadership.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-sm text-gray-700 font-medium">
                Analyst Leadership Positions
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-700 font-medium">
                Major Industry Awards
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-700 font-medium">
                Patents Pending
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards by Category */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {awards.map((category, catIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={catIndex} variants={fadeInUp}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((award, awardIndex) => (
                      <div
                        key={awardIndex}
                        className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-gray-900 flex-1">
                            {award.name}
                          </h3>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {award.description}
                        </p>
                        <a
                          href={`/products/${getProductSlug(award.product)}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          {award.product}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Award-Winning Solutions
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See why analysts and customers recognize AxionOre as a market
            leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              Schedule a Demo
            </a>
            <a
              href="/resources/analyst-reports"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              Read Analyst Reports
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
