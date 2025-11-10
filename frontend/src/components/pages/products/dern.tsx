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

const DernPage = () => {
  const product = {
    name: "Dern",
    tagline: "Next-Generation Privileged Access Management",
    description:
      "The definitive solution for zero-trust privileged access management",
    eyebrow: "Product",
    overview:
      "Dern provides dynamic credential management, comprehensive session monitoring, and intelligent access analytics that eliminate shared accounts while reducing insider threat risk. With deployment across some of the world's most security-conscious organizations, Dern sets the standard for privileged access security.",
    founded: "2020",
    customerCount: "180+",
    marketPosition: [
      {
        analyst: "Forrester",
        recognition: "Wave Strong Performer - Privileged Access Management",
        year: "2024",
      },
      {
        analyst: "KuppingerCole",
        recognition: "Leadership Compass Leader - PAM Solutions",
        year: "2024",
      },
    ],
    leadership: [
      {
        name: "Robert Kim",
        role: "CEO",
        bio: "Former CISO at Bank of America with extensive experience securing privileged access at scale",
        previousRoles: ["CISO at Bank of America"],
      },
      {
        name: "Jennifer Walsh",
        role: "CTO",
        bio: "Former Principal Security Engineer at Netflix specializing in identity and access management",
        previousRoles: ["Principal Security Engineer at Netflix"],
      },
      {
        name: "Ahmed Hassan",
        role: "VP Product",
        bio: "Former Director of Identity Security at Microsoft",
        previousRoles: ["Director of Identity Security at Microsoft"],
      },
    ],
    coreCapabilities: [
      {
        title: "Dynamic Credential Management",
        description:
          "Just-in-time credential provisioning eliminates standing privileges with automated password and SSH key rotation, secret scanning, and API key lifecycle management.",
      },
      {
        title: "Intelligent Access Controls",
        description:
          "Context-aware access decisions based on user, device, location, and risk factors with adaptive multi-factor authentication and privileged session isolation.",
      },
      {
        title: "Comprehensive Session Management",
        description:
          "Complete session recording for all privileged access (RDP, SSH, web applications) with real-time monitoring, behavioral anomaly detection, and automated session analysis.",
      },
      {
        title: "Identity Analytics & Intelligence",
        description:
          "AI-powered analysis of privileged access patterns with automated identification of over-privileged accounts and privilege escalation path analysis.",
      },
    ],
    features: [
      {
        title: "Behavioral Analytics",
        description:
          "Machine learning establishes baseline behaviors for privileged users with real-time risk scoring and anomaly detection.",
      },
      {
        title: "Cloud-Native Architecture",
        description:
          "Built for hybrid and multi-cloud environments with native integration with cloud IAM systems and Kubernetes-native deployment.",
      },
      {
        title: "Developer Experience",
        description:
          "CLI tools and IDE integrations for secure development workflows with secrets management integrated into CI/CD pipelines.",
      },
      {
        title: "Zero-Trust Security Model",
        description:
          "Continuous authentication and authorization with session isolation and network micro-segmentation for privileged access.",
      },
    ],
    techDifferentiators: [
      {
        title:
          "Just-in-time access provisioning eliminates standing privileges",
        description:
          "Dynamic credential management ensures privileges exist only when needed",
      },
      {
        title: "Complete session recording with behavioral anomaly detection",
        description:
          "Comprehensive audit trail combined with AI-powered threat detection",
      },
      {
        title: "Privilege escalation path analysis and prevention",
        description:
          "Proactive identification and remediation of potential attack paths",
      },
    ],
    customerStories: [
      {
        customer: "Global Technology Company",
        industry: "Technology",
        challenge:
          "Secure privileged access across 10,000+ cloud resources and on-premises systems",
        solution:
          "Dern deployment with emphasis on just-in-time access and session monitoring",
        results:
          "Eliminated 15,000 standing privileged accounts, 90% reduction in privileged access incidents",
        metrics: [
          "15,000 standing accounts eliminated",
          "90% reduction in incidents",
          "10,000+ resources secured",
        ],
      },
      {
        customer: "Financial Services Firm",
        industry: "Financial Services",
        challenge:
          "Meet regulatory requirements for privileged access monitoring and audit trails",
        solution:
          "Comprehensive Dern deployment with advanced session recording and analytics",
        results:
          "Successful regulatory audit with zero privileged access findings, reduced audit preparation time by 80%",
        metrics: [
          "0 audit findings",
          "80% faster audit prep",
          "100% regulatory compliance",
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

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-purple-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Zero Standing Privileges
                    </h3>
                    <p className="text-gray-600">
                      Dern's just-in-time access provisioning eliminates the
                      need for standing privileged accounts, dramatically
                      reducing your attack surface and insider threat risk.
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
              Zero-trust privileged access management for enterprise security
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
        subtitle="Behavioral analytics and cloud-native security at scale"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators
        title="Why Dern is Different"
        subtitle="Just-in-time access, complete visibility, and AI-powered protection"
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
              Security experts from the world's most demanding environments
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
        title="Privileged Access Success Stories"
        subtitle="See how enterprises eliminate standing privileges and reduce security incidents by 90%"
      />

      {/* CTA */}
      <ProductCTA
        productName={product.name}
        description="Eliminate standing privileges and insider threats with next-generation privileged access management."
      />
    </div>
  );
};

export default DernPage;



