import {
  CustomerStories,
  ProductCTA,
  ProductFeatures,
  TechDifferentiators,
} from "@/components/sections/Products";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Award, Building2, Calendar, Network, Users } from "lucide-react";

const SentryOneIdPage = () => {
  const product = {
    name: "SentryOne ID",
    tagline: "Enterprise Identity Governance & Administration",
    description:
      "Comprehensive identity lifecycle management for large enterprises",
    eyebrow: "Product",
    overview:
      "SentryOne ID delivers comprehensive identity lifecycle management for large enterprises, combining AI-powered intelligence with enterprise-scale automation. Managing 50M+ identities globally for 100+ enterprise customers.",
    founded: "2021",
    customerCount: "100+",
    identitiesManaged: "50M+",
    marketPosition: [
      {
        analyst: "Forrester",
        recognition: "Wave Leader - Identity Governance & Administration",
        year: "2024",
      },
      {
        analyst: "Gartner",
        recognition: "Peer Insights Customers' Choice - IGA Solutions",
        year: "2024",
      },
    ],
    leadership: [
      {
        name: "Dr. Rachel Green",
        role: "CEO",
        bio: "Former VP of Identity at Okta with extensive experience in identity governance at scale",
        previousRoles: ["VP of Identity at Okta"],
      },
      {
        name: "Jason Liu",
        role: "CTO",
        bio: "Former Principal Architect at SailPoint specializing in identity lifecycle automation",
        previousRoles: ["Principal Architect at SailPoint"],
      },
      {
        name: "Karen Davis",
        role: "VP Product",
        bio: "Former Director of Identity Products at Microsoft",
        previousRoles: ["Director of Identity Products at Microsoft"],
      },
    ],
    coreCapabilities: [
      {
        title: "Intelligent User Lifecycle Management",
        description:
          "AI-powered onboarding with automated provisioning workflows, dynamic access adjustments, and streamlined offboarding with comprehensive audit trails.",
      },
      {
        title: "Advanced Access Reviews",
        description:
          "Risk-based review prioritization with AI-powered recommendations, automated review routing, and continuous access monitoring.",
      },
      {
        title: "Application Ecosystem Integration",
        description:
          "500+ pre-built connectors for popular SaaS and on-premises applications with custom connector framework and real-time synchronization.",
      },
      {
        title: "Identity Analytics and Intelligence",
        description:
          "Comprehensive dashboards with anomaly detection, access path analysis, and predictive analytics for future access needs and risks.",
      },
    ],
    features: [
      {
        title: "Enterprise Scale Architecture",
        description:
          "Designed to handle 500,000+ identities with sub-second response times and global deployment capabilities.",
      },
      {
        title: "AI and Machine Learning",
        description:
          "Deep learning models analyze access patterns with natural language processing and continuous learning for improved accuracy.",
      },
      {
        title: "Advanced Workflow Engine",
        description:
          "Visual workflow designer with conditional logic, ITSM integration, and SLA monitoring.",
      },
      {
        title: "500+ Application Connectors",
        description:
          "Pre-built integrations for popular SaaS and on-premises applications with custom connector development framework.",
      },
    ],
    techDifferentiators: [
      {
        title: "AI-powered access intelligence for 500k+ identities",
        description:
          "Machine learning provides intelligent access recommendations at massive scale",
      },
      {
        title: "500+ application connectors with real-time sync",
        description:
          "Comprehensive integration ecosystem ensures complete identity coverage",
      },
      {
        title: "Predictive access modeling and risk scoring",
        description:
          "Proactive identification of access issues before they become security problems",
      },
    ],
    customerStories: [
      {
        customer: "Global Financial Institution",
        industry: "Financial Services",
        challenge:
          "Manage identity governance for 200,000+ employees across 50 countries with strict regulatory requirements",
        solution:
          "SentryOne ID deployment with focus on automated compliance reporting and risk-based access reviews",
        results:
          "90% reduction in access review completion time, achieved regulatory compliance across all jurisdictions",
        metrics: [
          "90% faster access reviews",
          "200k+ identities managed",
          "50 countries covered",
        ],
      },
      {
        customer: "Healthcare System",
        industry: "Healthcare",
        challenge:
          "Secure access to patient data across 500+ applications while maintaining HIPAA compliance",
        solution:
          "Comprehensive SentryOne ID implementation with automated provisioning and continuous access monitoring",
        results:
          "Zero HIPAA violations related to access management, 75% reduction in help desk tickets for access requests",
        metrics: [
          "0 HIPAA violations",
          "75% fewer help desk tickets",
          "500+ apps integrated",
        ],
      },
    ],
  };

  return (
    <div>
      <SEO
        title={`${product.name} — ${product.tagline} | AxionOre`}
        description={product.description}
      />

      <PageHeader
        title={product.name}
        subtitle={product.tagline}
        eyebrow={product.eyebrow}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.overview}
              </p>

              <div className="mt-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                <div className="flex items-start">
                  <Network className="w-8 h-8 text-violet-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      50M+ Identities Managed Globally
                    </h3>
                    <p className="text-gray-600">
                      SentryOne ID is purpose-built for enterprise scale,
                      handling hundreds of thousands of identities with
                      sub-second response times and AI-powered access
                      intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/get-demo"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Demo
                </a>
                <a
                  href="/company/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-blue-700 font-medium">
                        Founded
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        {product.founded}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-blue-700 font-medium">
                        Enterprise Customers
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        {product.customerCount}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Network className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-blue-700 font-medium">
                        Identities Managed
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        {product.identitiesManaged}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-blue-700 font-medium">
                        Leadership Team
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        {product.leadership.length} Executives
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="text-sm font-semibold text-indigo-900 uppercase tracking-wide mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Analyst Recognition
                </h3>
                <div className="space-y-3">
                  {product.marketPosition.map((position, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-indigo-300 pl-4"
                    >
                      <div className="text-sm font-semibold text-indigo-900">
                        {position.recognition}
                      </div>
                      <div className="text-xs text-indigo-600 mt-1">
                        {position.analyst} • {position.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Core Capabilities
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered identity governance at enterprise scale
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {product.coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <ProductFeatures
        title="Enterprise-Scale Features"
        subtitle="Built for complex global organizations with hundreds of thousands of identities"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators
        title="Why SentryOne ID Leads the Market"
        subtitle="Unmatched scale, intelligence, and integration breadth for enterprise IGA"
        differentiators={product.techDifferentiators}
      />

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Identity governance experts from Okta, SailPoint, and Microsoft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">{leader.role}</p>
                <p className="text-gray-600 mt-4">{leader.bio}</p>
                {leader.previousRoles && leader.previousRoles.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Previous Experience
                    </p>
                    <ul className="mt-2 space-y-1">
                      {leader.previousRoles.map((role, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          • {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <CustomerStories
        stories={product.customerStories}
        title="Identity Governance Success Stories"
        subtitle="See how enterprises manage hundreds of thousands of identities with AI-powered automation"
      />

      {/* CTA */}
      <ProductCTA
        productName={product.name}
        description="Scale identity governance to hundreds of thousands of users with AI-powered intelligence and automation."
      />
    </div>
  );
};

export default SentryOneIdPage;
