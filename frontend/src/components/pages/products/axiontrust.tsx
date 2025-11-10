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
import { Award, Building2, Calendar, Shield, Users } from "lucide-react";

const AxionTrustPage = () => {
  const product = {
    name: "AxionTrust",
    tagline: "Intelligent Cloud Compliance Automation",
    description:
      "The industry's first platform to fully automate compliance across cloud environments",
    eyebrow: "Product",
    overview:
      "AxionTrust transforms regulatory compliance from a manual burden into an automated competitive advantage, supporting 40+ compliance frameworks including SOX, GDPR, HIPAA, and PCI-DSS. Leading enterprises rely on AxionTrust to reduce compliance costs by up to 80% while maintaining continuous audit readiness.",
    founded: "2020",
    customerCount: "150+",
    marketPosition: [
      {
        analyst: "Forrester",
        recognition: "Wave Strong Performer - Compliance Automation",
        year: "2024",
        details:
          "Highlighted for multi-framework automation and real-time monitoring",
      },
    ],
    leadership: [
      {
        name: "Sarah Williams",
        role: "CEO",
        bio: "Former Chief Compliance Officer at JPMorgan Chase with extensive regulatory technology experience",
        previousRoles: ["Chief Compliance Officer at JPMorgan Chase"],
      },
      {
        name: "David Chen",
        role: "CTO",
        bio: "Former Principal Architect at Palantir Technologies specializing in large-scale data processing",
        previousRoles: ["Principal Architect at Palantir Technologies"],
      },
      {
        name: "Maria Gonzalez",
        role: "VP Product",
        bio: "Former Director of Regulatory Technology at Goldman Sachs",
        previousRoles: ["Director of Regulatory Technology at Goldman Sachs"],
      },
    ],
    coreCapabilities: [
      {
        title: "Multi-Framework Support",
        description:
          "Complete coverage for SOX, GDPR, HIPAA, PCI-DSS, ISO 27001/27002, NIST Cybersecurity Framework, FedRAMP, plus 30+ additional frameworks.",
      },
      {
        title: "Automated Policy Enforcement",
        description:
          "Real-time policy monitoring and enforcement across cloud resources with automated remediation and configurable approval processes.",
      },
      {
        title: "Continuous Compliance Monitoring",
        description:
          "24/7 monitoring across all supported compliance frameworks with real-time compliance scoring, trend analysis, and automated drift detection.",
      },
      {
        title: "Automated Evidence Collection",
        description:
          "Continuous evidence collection for all compliance controls with immutable storage, cryptographic integrity verification, and automated mapping to regulatory requirements.",
      },
    ],
    features: [
      {
        title: "AI-Powered Risk Assessment",
        description:
          "Machine learning models analyze compliance risks across multiple dimensions with predictive analytics and business impact modeling.",
      },
      {
        title: "Regulatory Intelligence",
        description:
          "Automated monitoring of regulatory updates with impact analysis and implementation guidance for compliance deadlines.",
      },
      {
        title: "Cross-Framework Optimization",
        description:
          "Identifies overlapping requirements across multiple frameworks to optimize control implementation and reduce duplicated effort.",
      },
    ],
    techDifferentiators: [
      {
        title: "40+ compliance frameworks automated",
        description:
          "The only platform supporting this breadth of regulatory requirements in a single solution",
      },
      {
        title: "Real-time compliance monitoring with automated remediation",
        description:
          "Continuous validation ensures compliance posture is always audit-ready",
      },
      {
        title: "AI-powered risk assessment and prioritization",
        description:
          "Intelligent analysis helps focus resources on the highest-impact compliance issues",
      },
    ],
    customerStories: [
      {
        customer: "Major Healthcare System",
        industry: "Healthcare",
        challenge:
          "Maintain HIPAA compliance across 50+ cloud accounts and hybrid infrastructure",
        solution:
          "AxionTrust automated HIPAA monitoring with integrated remediation workflows",
        results:
          "95% reduction in compliance violations, automated audit preparation saves 2,000 hours annually",
        metrics: [
          "95% reduction in violations",
          "2,000 hours saved per year",
          "50+ cloud accounts monitored",
        ],
      },
      {
        customer: "Global Manufacturing Company",
        industry: "Manufacturing",
        challenge:
          "Achieve SOX compliance for cloud-based financial systems across 12 countries",
        solution:
          "Deployed AxionTrust with custom policies for international compliance requirements",
        results:
          "Successful SOX certification achieved 8 months ahead of schedule, ongoing compliance monitoring reduced audit costs by 70%",
        metrics: [
          "8 months faster certification",
          "70% reduction in audit costs",
          "12 countries covered",
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

              <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      40+ Compliance Frameworks Automated
                    </h3>
                    <p className="text-gray-600">
                      From SOX and GDPR to HIPAA and PCI-DSS, AxionTrust
                      automates compliance across all major regulatory
                      frameworks with continuous monitoring and automated
                      evidence collection.
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
              Comprehensive compliance automation across all major regulatory
              frameworks
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
        title="Intelligent Features"
        subtitle="AI-powered risk assessment and regulatory intelligence"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators
        title="Why AxionTrust Leads the Market"
        subtitle="Unmatched breadth, depth, and intelligence in compliance automation"
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
              Compliance and technology experts from leading financial
              institutions
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
        title="Compliance Success Stories"
        subtitle="See how enterprises achieve continuous compliance and reduce audit costs by up to 80%"
      />

      {/* CTA */}
      <ProductCTA
        productName={product.name}
        description="Transform regulatory compliance from a manual burden into an automated competitive advantage."
      />
    </div>
  );
};

export default AxionTrustPage;
