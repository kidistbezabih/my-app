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

const AbanoahPage = () => {
  const product = {
    name: "ABANOAH",
    tagline: "ABA Therapy Practice Management Platform",
    description:
      "The Complete Practice Management Solution for ABA Providers",
    eyebrow: "Product",
    overview:
      "ABANOAH streamlines every aspect of your ABA therapy practice—from clinical documentation and data collection to billing and compliance. Built by BCBAs for BCBAs, our platform reduces administrative burden so you can focus on what matters most: delivering exceptional care.",
    founded: "2021",
    customerCount: "85+",
    marketPosition: [
      {
        analyst: "Industry Recognition",
        recognition: "Leading ABA Practice Management Platform",
        year: "2024",
        details: "Recognized for innovation in behavioral health technology",
      },
    ],
    leadership: [
      {
        name: "Dr. Emily Thompson",
        role: "CEO",
        bio: "Board-certified BCBA with 15 years of clinical and administrative experience in ABA therapy",
        previousRoles: [
          "Clinical Director at Regional ABA Center",
          "BCBA Supervisor",
        ],
      },
      {
        name: "David Martinez",
        role: "CTO",
        bio: "Healthcare technology veteran specializing in behavioral health software solutions",
        previousRoles: [
          "VP Engineering at Healthcare SaaS Company",
          "Senior Architect at Epic Systems",
        ],
      },
    ],
    coreCapabilities: [
      {
        title: "Real-Time Data Collection",
        description:
          "Mobile-first design with one-tap recording, automatic graphing, voice input, and smart prompting. Collect data without breaking rapport with your client.",
      },
      {
        title: "Automated Progress Notes",
        description:
          "Extensive library of insurance-compliant progress note templates that auto-populate from session data, reducing documentation time by 80%.",
      },
      {
        title: "Comprehensive Treatment Planning",
        description:
          "Assessment integration, goal bank with evidence-based treatment goals, visual treatment plans, and real-time progress tracking with predictive modeling.",
      },
      {
        title: "Revenue Cycle Management",
        description:
          "Intelligent authorization tracking, ABA-specific billing engine with accurate CPT coding, claim scrubbing, and comprehensive financial analytics.",
      },
    ],
    features: [
      {
        title: "Clinical Operations",
        description:
          "AI-powered schedule optimization, multi-location support, telehealth integration, and automated appointment reminders.",
      },
      {
        title: "Staff Management",
        description:
          "Comprehensive onboarding workflows, credential management, BCBA supervision documentation, and real-time performance monitoring.",
      },
      {
        title: "Family Engagement",
        description:
          "Secure parent portal for viewing treatment progress, automated progress updates, educational resources library, and HIPAA-compliant communication.",
      },
      {
        title: "Advanced Analytics",
        description:
          "Statistical analysis, visual analytics, predictive modeling, quality metrics, and industry benchmarking for organizational performance.",
      },
    ],
    techDifferentiators: [
      {
        title: "Built by BCBAs for BCBAs",
        description:
          "Designed by practicing Board Certified Behavior Analysts who understand the unique challenges of ABA therapy practice management",
      },
      {
        title: "80% reduction in documentation time",
        description:
          "Auto-population of progress notes and intelligent templates dramatically reduce administrative burden on clinical staff",
      },
      {
        title: "BACB ethical guidelines support",
        description:
          "Built-in compliance workflows ensure adherence to BACB ethical standards and state licensing requirements",
      },
    ],
    customerStories: [
      {
        customer: "Multi-State ABA Provider",
        industry: "Behavioral Health",
        challenge:
          "Manage clinical operations and billing across 15 locations serving 800 clients",
        solution:
          "Implemented ABANOAH platform with integrated billing and clinical documentation",
        results:
          "75% reduction in clinical documentation time, 65 to 28 days in A/R, 18% to 3% claim denial rate",
        metrics: [
          "75% less documentation time",
          "Days in A/R: 65→28 days",
          "$2.8M additional annual revenue",
        ],
      },
      {
        customer: "Growing ABA Practice",
        industry: "Behavioral Health",
        challenge:
          "Scale from 40 to 120 clients without proportionally increasing administrative staff",
        solution:
          "Deployed ABANOAH automation tools for authorization management and treatment planning",
        results:
          "Managed 3x client growth with only 50% increase in admin staff, 85% reduction in authorization management time",
        metrics: [
          "3x client growth achieved",
          "85% less authorization time",
          "ROI achieved in 4 months",
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
                        ABA Organizations
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
                        2,500+
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
              Comprehensive tools for every aspect of ABA practice management
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
        subtitle="Powerful tools designed for ABA therapy providers"
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
              ABA experts and technology leaders
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

export default AbanoahPage;

