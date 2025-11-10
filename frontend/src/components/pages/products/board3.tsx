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
import { Award, Building2, Calendar, Code2, Users } from "lucide-react";

const Board3Page = () => {
  const product = {
    name: "Board3",
    tagline: "Visual Infrastructure as Code Platform",
    description:
      "Revolutionary platform that democratizes Infrastructure as Code through intuitive drag-and-drop Terraform generation",
    eyebrow: "Product",
    overview:
      "Board3 reduces infrastructure deployment time by up to 80% while maintaining all the power and flexibility of Terraform. Engineering teams worldwide rely on Board3 to accelerate cloud adoption while maintaining best practices and governance.",
    founded: "2021",
    customerCount: "120+",
    marketPosition: [
      {
        analyst: "Industry Analysts",
        recognition: "Emerging Leader - Infrastructure Automation",
        year: "2024",
      },
    ],
    leadership: [
      {
        name: "Alex Thompson",
        role: "CEO",
        bio: "Former Director of Cloud Engineering at Spotify with expertise in infrastructure automation",
        previousRoles: ["Director of Cloud Engineering at Spotify"],
      },
      {
        name: "Priya Patel",
        role: "CTO",
        bio: "Former Principal Engineer at HashiCorp specializing in Terraform and infrastructure tooling",
        previousRoles: ["Principal Engineer at HashiCorp"],
      },
      {
        name: "Mark Johnson",
        role: "VP Product",
        bio: "Former Product Manager at AWS CloudFormation",
        previousRoles: ["Product Manager at AWS CloudFormation"],
      },
    ],
    coreCapabilities: [
      {
        title: "Drag-and-Drop Interface",
        description:
          "Intuitive visual interface for creating cloud infrastructure with pre-built resource templates, real-time validation, and visual dependency mapping.",
      },
      {
        title: "Automatic Terraform Generation",
        description:
          "Production-ready Terraform code generated automatically from visual designs with support for modules, custom resource definitions, and provider extensions.",
      },
      {
        title: "Collaboration Workflows",
        description:
          "Real-time collaborative editing with conflict resolution, comment and annotation system, approval workflows with role-based access controls.",
      },
      {
        title: "Governance and Standards",
        description:
          "Organizational templates and approved resource configurations with policy enforcement, cost estimation, and compliance validation.",
      },
    ],
    features: [
      {
        title: "Intelligent Code Generation",
        description:
          "Advanced algorithms ensure generated Terraform follows best practices with optimization engine and custom module support.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Operational transformation algorithms enable conflict-free collaborative editing with integrated chat and video conferencing.",
      },
      {
        title: "Design Intelligence",
        description:
          "Machine learning suggests optimal resource configurations with cost and security optimization recommendations.",
      },
      {
        title: "Multi-Cloud Support",
        description:
          "Comprehensive support for AWS, Azure, and Google Cloud Platform with hybrid and multi-cloud architectures.",
      },
    ],
    techDifferentiators: [
      {
        title: "Visual design with production-ready Terraform output",
        description:
          "No compromise between ease of use and professional Infrastructure as Code practices",
      },
      {
        title: "Real-time collaboration with conflict resolution",
        description:
          "Multiple team members can work simultaneously on infrastructure designs",
      },
      {
        title: "Policy enforcement and cost optimization",
        description:
          "Governance and financial controls built into the design process",
      },
    ],
    customerStories: [
      {
        customer: "Fintech Startup",
        industry: "Financial Services",
        challenge:
          "Rapidly deploy secure, compliant infrastructure without dedicated DevOps expertise",
        solution:
          "Board3 templates for financial services compliance with automated Terraform generation",
        results:
          "10x faster infrastructure deployment, achieved PCI-DSS compliance without hiring additional specialists",
        metrics: [
          "10x faster deployment",
          "PCI-DSS certified",
          "No additional DevOps hires needed",
        ],
      },
      {
        customer: "E-commerce Platform",
        industry: "Technology",
        challenge:
          "Enable development teams to self-service infrastructure while maintaining governance",
        solution:
          "Board3 self-service portal with organizational templates and approval workflows",
        results:
          "75% reduction in infrastructure requests to DevOps team, improved deployment velocity by 3x",
        metrics: [
          "75% fewer manual requests",
          "3x faster deployments",
          "Self-service enabled",
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

              <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <div className="flex items-start">
                  <Code2 className="w-8 h-8 text-cyan-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      80% Faster Infrastructure Deployment
                    </h3>
                    <p className="text-gray-600">
                      Board3's visual interface and automatic Terraform
                      generation reduces deployment time dramatically while
                      maintaining all the power of Infrastructure as Code.
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
              Core Capabilities
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Visual infrastructure design with automatic Terraform generation
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
        subtitle="AI-powered infrastructure design with real-time collaboration"
        features={product.features}
      />

      {/* Tech Differentiators */}
      <TechDifferentiators
        title="The Board3 Advantage"
        subtitle="Democratizing Infrastructure as Code without sacrificing power or control"
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
              Infrastructure experts from Spotify, HashiCorp, and AWS
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
        title="Infrastructure Automation Success"
        subtitle="See how teams deploy infrastructure 10x faster with Board3"
      />

      {/* CTA */}
      <ProductCTA
        productName={product.name}
        description="Accelerate cloud adoption with visual Infrastructure as Code - no compromise on power or governance."
      />
    </div>
  );
};

export default Board3Page;
