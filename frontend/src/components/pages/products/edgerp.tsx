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
import { Award, Building2, Calendar, Lock, Users } from "lucide-react";

const EdgeRpPage = () => {
  const product = {
    name: "EdgeRP",
    tagline: "Security-Integrated Enterprise Resource Planning",
    description:
      "The world's first ERP platform built with security and compliance as foundational elements",
    eyebrow: "Product",
    overview:
      "EdgeRP integrates financial management, supply chain optimization, human resources, and customer relationship management with enterprise-grade security controls. Unlike traditional ERP systems, EdgeRP is designed for the modern, security-conscious enterprise that can't afford to separate business operations from security governance.",
    founded: "2022",
    customerCount: "50+",
    marketPosition: [
      {
        analyst: "Industry Analysts",
        recognition: "Disruptive Innovator - Next-Generation ERP",
        year: "2024",
      },
    ],
    leadership: [
      {
        name: "Thomas Anderson",
        role: "CEO",
        bio: "Former VP of Enterprise Applications at SAP with deep ERP expertise",
        previousRoles: ["VP of Enterprise Applications at SAP"],
      },
      {
        name: "Dr. Elena Vasquez",
        role: "CTO",
        bio: "Former Principal Architect at Salesforce specializing in cloud-native enterprise applications",
        previousRoles: ["Principal Architect at Salesforce"],
      },
      {
        name: "Michael Chang",
        role: "VP Product",
        bio: "Former Director of ERP Strategy at Oracle",
        previousRoles: ["Director of ERP Strategy at Oracle"],
      },
    ],
    coreCapabilities: [
      {
        title: "Financial Management",
        description:
          "Real-time financial reporting with automated compliance validation, advanced analytics, multi-currency support, and automated fraud detection.",
      },
      {
        title: "Supply Chain Management",
        description:
          "End-to-end supply chain visibility with supplier risk assessment, demand forecasting, sustainability tracking, and blockchain integration.",
      },
      {
        title: "Human Resources Management",
        description:
          "Comprehensive employee lifecycle management integrated with identity governance, performance management, and automated payroll processing.",
      },
      {
        title: "Customer Relationship Management",
        description:
          "360-degree customer view with AI-powered segmentation, automated onboarding, customer success management, and privacy-compliant data management.",
      },
    ],
    features: [
      {
        title: "Native Security Controls",
        description:
          "Zero-trust network access, data encryption, comprehensive audit trails, and real-time security monitoring built into every business process.",
      },
      {
        title: "Compliance Automation",
        description:
          "Built-in compliance frameworks for SOX, GDPR, HIPAA with automated control testing and regulatory change management.",
      },
      {
        title: "Cloud-Native Architecture",
        description:
          "Microservices architecture with AI and machine learning integration, real-time analytics, and horizontal scaling.",
      },
      {
        title: "AxionOre Ecosystem Integration",
        description:
          "Native integration with Quorix, AxionTrust, Dern, and SentryOne ID for comprehensive security and compliance.",
      },
    ],
    techDifferentiators: [
      {
        title: "Zero-trust security architecture built into every layer",
        description:
          "Security and compliance aren't add-ons, they're foundational to the platform",
      },
      {
        title: "Native integration with AxionOre security portfolio",
        description:
          "Seamless connection to Quorix, AxionTrust, Dern, and SentryOne ID",
      },
      {
        title:
          "AI-powered business insights with embedded security intelligence",
        description:
          "Business analytics combined with security and compliance intelligence",
      },
    ],
    customerStories: [
      {
        customer: "Global Manufacturing Conglomerate",
        industry: "Manufacturing",
        challenge:
          "Modernize legacy ERP systems while maintaining security and compliance across 15 countries",
        solution:
          "Phased EdgeRP deployment with emphasis on supply chain integration and regulatory compliance",
        results:
          "40% improvement in supply chain visibility, achieved SOX compliance 6 months ahead of schedule, 25% reduction in IT operational costs",
        metrics: [
          "40% better visibility",
          "6 months faster SOX",
          "25% lower IT costs",
        ],
      },
      {
        customer: "Regional Healthcare System",
        industry: "Healthcare",
        challenge:
          "Integrate financial and clinical systems while maintaining HIPAA compliance",
        solution:
          "Comprehensive EdgeRP implementation with focus on patient data integration and clinical workflow optimization",
        results:
          "30% improvement in patient satisfaction scores, 99.99% HIPAA compliance rate, 20% reduction in administrative costs",
        metrics: [
          "30% higher satisfaction",
          "99.99% HIPAA compliance",
          "20% lower admin costs",
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

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <Lock className="w-8 h-8 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Security-First ERP Design
                    </h3>
                    <p className="text-gray-600">
                      EdgeRP is the only ERP platform built from the ground up
                      with zero-trust security principles, native compliance
                      automation, and integrated threat detection.
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
                  Market Recognition
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
              Business Modules
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ERP functionality with security built into every
              module
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
        title="Security-First Features"
        subtitle="Zero-trust architecture with native compliance and AI-powered insights"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators
        title="The EdgeRP Difference"
        subtitle="Security and compliance foundational to business operations, not bolted on"
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
              ERP veterans from SAP, Salesforce, and Oracle
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
        title="Secure ERP Success Stories"
        subtitle="See how enterprises modernize operations while enhancing security and compliance"
      />

      {/* CTA */}
      <ProductCTA
        productName={product.name}
        description="Modernize your enterprise operations with the only ERP platform built for security-first enterprises."
      />
    </div>
  );
};

export default EdgeRpPage;
