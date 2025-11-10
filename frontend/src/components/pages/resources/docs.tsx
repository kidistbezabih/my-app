import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  FileText,
  Rocket,
  Shield,
  Wrench,
} from "lucide-react";

const DocsPage = () => {
  const docCategories = [
    {
      title: "Getting Started",
      icon: Rocket,
      color: "from-blue-500 to-indigo-500",
      description: "Quick start guides and onboarding resources",
      links: [
        { name: "Platform Overview", href: "#" },
        { name: "Installation & Setup", href: "#" },
        { name: "Quick Start Guide", href: "#" },
        { name: "Architecture Overview", href: "#" },
      ],
    },
    {
      title: "Product Documentation",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
      description: "Comprehensive guides for each product",
      links: [
        { name: "Quorix Documentation", href: "/products/quorix" },
        { name: "AxionTrust Documentation", href: "/products/axiontrust" },
        { name: "Dern Documentation", href: "/products/dern" },
        { name: "Board3 Documentation", href: "/products/board3" },
        { name: "SentryOne ID Documentation", href: "/products/sentryone-id" },
        { name: "EdgeRP Documentation", href: "/products/edgerp" },
      ],
    },
    {
      title: "API Reference",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      description: "API documentation and integration guides",
      links: [
        { name: "REST API Reference", href: "#" },
        { name: "Authentication", href: "#" },
        { name: "Webhooks", href: "#" },
        { name: "SDKs & Libraries", href: "#" },
      ],
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      description: "Security best practices and compliance guides",
      links: [
        { name: "Security Best Practices", href: "#" },
        { name: "Compliance Frameworks", href: "#" },
        { name: "Data Protection & Privacy", href: "#" },
        { name: "Audit & Certification", href: "#" },
      ],
    },
    {
      title: "Integration Guides",
      icon: Wrench,
      color: "from-cyan-500 to-blue-500",
      description: "Integrate with your existing tools and workflows",
      links: [
        { name: "Cloud Platforms (AWS, Azure, GCP)", href: "#" },
        { name: "SIEM Integration", href: "#" },
        { name: "Identity Providers", href: "#" },
        { name: "ITSM & Ticketing Systems", href: "#" },
      ],
    },
    {
      title: "Use Cases & Tutorials",
      icon: FileText,
      color: "from-yellow-500 to-amber-500",
      description: "Step-by-step tutorials and real-world use cases",
      links: [
        { name: "Multi-Cloud Security", href: "/solutions/cloud-security" },
        {
          name: "SOX Compliance Automation",
          href: "/solutions/compliance-automation",
        },
        {
          name: "Zero Standing Privileges",
          href: "/solutions/privileged-access",
        },
        {
          name: "Infrastructure Governance",
          href: "/solutions/infrastructure-automation",
        },
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="Documentation — Technical Guides & Resources | AxionOre"
        description="Comprehensive technical documentation, implementation guides, API reference, and integration resources for AxionOre portfolio products."
      />

      <PageHeader
        title="Documentation"
        subtitle="Technical documentation and implementation guides for AxionOre products"
        eyebrow="Resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Documentation" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From quick start guides to comprehensive API documentation, we
            provide the resources you need to successfully deploy and operate
            AxionOre solutions.
          </p>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {docCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>

                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                        >
                          <span className="mr-2">→</span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-200 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our customer success team is here to help you maximize the value
              of AxionOre solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-demo"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule a Demo
              </a>
              <a
                href="/company/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
