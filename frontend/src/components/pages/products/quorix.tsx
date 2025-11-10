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
import { Award, Building2, Calendar, Users } from "lucide-react";

const QuorixPage = () => {
  const product = {
    name: "Quorix",
    tagline: "Cloud Native Application Protection Platform (CNAPP)",
    description:
      "The most comprehensive cloud security platform in the market today",
    eyebrow: "Product",
    overview:
      "Quorix delivers unified Cloud Security Posture Management (CSPM), Cloud Workload Protection (CWP), and Cloud Infrastructure Entitlement Management (CIEM) in a single, integrated solution. With enterprise customers across financial services, healthcare, and technology sectors, Quorix is rapidly becoming the standard for cloud security excellence.",
    founded: "2020",
    customerCount: "200+",
    marketPosition: [
      {
        analyst: "Gartner",
        recognition:
          "Magic Quadrant Leader - Cloud Security Posture Management",
        year: "2024",
        details: "Recognized for completeness of vision and ability to execute",
      },
      {
        analyst: "Forrester",
        recognition: "Wave Leader - Cloud Workload Protection",
        year: "2024",
      },
    ],
    leadership: [
      {
        name: "Dr. Michael Chang",
        role: "CEO",
        bio: "Former AWS Principal Security Architect with deep expertise in cloud-native security architectures",
        previousRoles: [
          "AWS Principal Security Architect",
          "Google Cloud Security Lead",
        ],
      },
      {
        name: "Lisa Rodriguez",
        role: "CTO",
        bio: "Former Google Cloud Security Engineering Manager specializing in large-scale distributed systems",
        previousRoles: [
          "Google Cloud Security Engineering Manager",
          "Netflix Security Architect",
        ],
      },
      {
        name: "James Park",
        role: "VP Product",
        bio: "Former Microsoft Azure Security Product Lead with extensive enterprise security product experience",
        previousRoles: ["Microsoft Azure Security Product Lead"],
      },
    ],
    coreCapabilities: [
      {
        title: "Cloud Security Posture Management (CSPM)",
        description:
          "Continuous configuration monitoring across AWS, Azure, Google Cloud with 2,000+ built-in security policies, real-time drift detection, and automated remediation.",
      },
      {
        title: "Cloud Workload Protection (CWP)",
        description:
          "Runtime threat detection for VMs, containers, and serverless functions with behavioral analysis, anomaly detection, and malware protection using machine learning.",
      },
      {
        title: "Cloud Infrastructure Entitlement Management (CIEM)",
        description:
          "Comprehensive visibility into cloud permissions and access patterns with risk-based access recommendations and least-privilege enforcement.",
      },
      {
        title: "DevSecOps Integration",
        description:
          "Infrastructure as Code scanning for Terraform, CloudFormation, ARM templates with CI/CD pipeline integration and policy as code.",
      },
    ],
    features: [
      {
        title: "AI-Powered Threat Detection",
        description:
          "Advanced machine learning algorithms analyze behavioral patterns, continuously learning to reduce false positives by up to 90% with predictive analytics.",
      },
      {
        title: "Unified Data Model",
        description:
          "Single data model across all cloud security disciplines enabling real-time correlation of security events and comprehensive visibility into resource relationships.",
      },
      {
        title: "Developer-Centric Approach",
        description:
          "Native integration with developer tools, security feedback within existing environments, and self-service security guidance.",
      },
      {
        title: "Multi-Cloud Support",
        description:
          "Comprehensive coverage across AWS, Azure, and Google Cloud Platform with unified visibility and control.",
      },
    ],
    techDifferentiators: [
      {
        title:
          "AI-powered threat detection with 90% reduction in false positives",
        description:
          "Machine learning algorithms continuously learn from your environment to provide accurate, actionable security insights",
      },
      {
        title: "Unified multi-cloud visibility and control",
        description:
          "Single pane of glass for all cloud security concerns across AWS, Azure, and GCP",
      },
      {
        title: "Developer-centric security workflows",
        description:
          "Security integrated into developer tools and processes without slowing down deployments",
      },
    ],
    customerStories: [
      {
        customer: "Global Financial Services Firm",
        industry: "Financial Services",
        challenge:
          "Secure 500+ AWS accounts while meeting SOX compliance requirements",
        solution:
          "Deployed Quorix CNAPP with focus on configuration management and access controls",
        results:
          "85% reduction in security misconfigurations, achieved SOX certification 6 months ahead of schedule",
        metrics: [
          "85% reduction in misconfigurations",
          "6 months faster SOX certification",
          "500+ AWS accounts secured",
        ],
      },
      {
        customer: "Healthcare Technology Company",
        industry: "Healthcare",
        challenge:
          "Protect patient data across multi-cloud Kubernetes environments",
        solution:
          "Implemented Quorix container security with HIPAA compliance automation",
        results:
          "Zero compliance violations in 18 months, 60% faster security incident response",
        metrics: [
          "0 HIPAA violations in 18 months",
          "60% faster incident response",
          "Multi-cloud Kubernetes secured",
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
              Comprehensive security coverage for your cloud infrastructure
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
        title="Advanced Features"
        subtitle="Powered by AI and built for enterprise scale"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators differentiators={product.techDifferentiators} />

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              World-class executives from leading technology companies
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
      <CustomerStories stories={product.customerStories} />

      {/* CTA */}
      <ProductCTA productName={product.name} />
    </div>
  );
};

export default QuorixPage;
