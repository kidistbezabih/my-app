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

const SevitaCareOnePage = () => {
  const product = {
    name: "SevitaCare One",
    tagline: "Home Health & Community Services Platform",
    description:
      "The Modern Alternative to Legacy Home Health Systems",
    eyebrow: "Product",
    overview:
      "SevitaCare One is the next-generation platform for home health agencies and community service providers. Replace outdated systems like Sandata with modern, intelligent technology that improves care coordination, reduces documentation burden, and optimizes financial performance.",
    founded: "2022",
    customerCount: "60+",
    marketPosition: [
      {
        analyst: "Industry Recognition",
        recognition: "Next-Generation Home Health Platform",
        year: "2024",
        details: "Recognized for innovation in home health technology",
      },
    ],
    leadership: [
      {
        name: "Patricia Williams",
        role: "CEO",
        bio: "Former home health agency COO with 20 years of experience in post-acute care operations",
        previousRoles: [
          "COO at Regional Home Health Agency",
          "Medicare Quality Improvement Organization Director",
        ],
      },
      {
        name: "Dr. James Chen",
        role: "Chief Medical Officer",
        bio: "Board-certified physician specializing in geriatric medicine and home-based primary care",
        previousRoles: [
          "Medical Director at Home Health Network",
          "Associate Professor of Geriatric Medicine",
        ],
      },
    ],
    coreCapabilities: [
      {
        title: "Intelligent Clinical Documentation",
        description:
          "AI-powered OASIS assessment assistance, predictive PDGM grouper, comorbidity optimization, and comprehensive validation engine to prevent errors before submission.",
      },
      {
        title: "Mobile-First Point of Care",
        description:
          "Native mobile apps with offline capabilities, voice-to-text documentation, smart templates, photo documentation, and vital signs integration from Bluetooth devices.",
      },
      {
        title: "Revenue Cycle Management",
        description:
          "PDGM optimization with clinical grouping analytics, comorbidity capture, timing optimization, LUPA avoidance, and automated episode management.",
      },
      {
        title: "Care Coordination",
        description:
          "Unified care team communication, hospital EHR integration, family portal, intelligent alerts, and comprehensive transitional care management.",
      },
    ],
    features: [
      {
        title: "Workforce Optimization",
        description:
          "AI-powered scheduling and routing minimizes drive time, skills-based assignment matches patient needs with clinician competencies, and GPS-based visit verification.",
      },
      {
        title: "Quality & Outcomes",
        description:
          "Real-time HHCAHPS tracking, automated CMS quality measure reporting, Star Ratings impact prediction, and comprehensive outcome tracking.",
      },
      {
        title: "Remote Patient Monitoring",
        description:
          "Device integration, automated alerts with AI analysis, trend visualization with predictive analytics, and integrated telehealth visits with billing.",
      },
      {
        title: "Hospital Integration",
        description:
          "Bidirectional HL7 interface with Epic, Cerner, Meditech, discharge summary import, real-time admission notifications, and electronic order management.",
      },
    ],
    techDifferentiators: [
      {
        title: "Built for PDGM from day one",
        description:
          "Unlike legacy systems retrofitted for PDGM, SevitaCare One was designed specifically for the payment model with intelligent optimization",
      },
      {
        title: "60% reduction in documentation time",
        description:
          "Mobile-first design and AI-powered assistance dramatically reduce time spent on OASIS assessments and clinical documentation",
      },
      {
        title: "Seamless Sandata migration",
        description:
          "Proven data migration process from Sandata and other legacy systems with minimal disruption to operations",
      },
    ],
    customerStories: [
      {
        customer: "Large Multi-State Home Health Agency",
        industry: "Home Health",
        challenge:
          "Legacy Sandata system limiting growth with high claim denial rates",
        solution:
          "Migrated to SevitaCare One with integrated PDGM optimization and mobile documentation",
        results:
          "60% reduction in clinical documentation time, 52 to 31 days in A/R, 12% to 2.5% claim denial rate",
        metrics: [
          "60% less documentation time",
          "Days in A/R: 52→31 days",
          "$4.2M additional annual revenue",
        ],
      },
      {
        customer: "Community-Based Home Care Agency",
        industry: "Home Health",
        challenge:
          "Rapid growth overwhelming manual processes, Medicaid waiver complexity",
        solution:
          "Implemented SevitaCare One with Medicaid billing automation and care plan management",
        results:
          "Scaled from 250 to 550 clients with only 30% increase in admin staff, 87% to 99.5% Medicaid billing accuracy",
        metrics: [
          "2x client growth achieved",
          "99.5% billing accuracy",
          "ROI achieved in 6 months",
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
                        Home Health Agencies
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
                        Clinicians Using Platform
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        8,000+
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="text-sm font-semibold text-indigo-900 uppercase tracking-wide mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recognition
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
              Comprehensive platform for modern home health agencies
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
        subtitle="Built for the modern home health agency"
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
              Home health experts and technology leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

export default SevitaCareOnePage;

