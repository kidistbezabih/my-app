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

const ShadowRealmPage = () => {
  const product = {
    name: "Shadow Realm",
    tagline: "Speech & Language Therapy Platform",
    description:
      "Transform Speech Therapy Through Gamification",
    eyebrow: "Product",
    overview:
      "Shadow Realm revolutionizes speech-language pathology by turning therapy exercises into an engaging game experience. Evidence-based clinical interventions meet cutting-edge technology to accelerate patient progress, improve home practice compliance, and deliver measurable outcomes.",
    founded: "2023",
    customerCount: "1,200+",
    marketPosition: [
      {
        analyst: "Industry Recognition",
        recognition: "Innovative Speech Therapy Platform",
        year: "2024",
        details: "Recognized for gamification in clinical therapy",
      },
    ],
    leadership: [
      {
        name: "Dr. Amanda Foster",
        role: "CEO & Clinical Director",
        bio: "Speech-Language Pathologist with 18 years of experience in pediatric and adult therapy",
        previousRoles: [
          "Clinical Director at Children's Therapy Center",
          "Research SLP at University Medical Center",
        ],
      },
      {
        name: "Ryan Mitchell",
        role: "CTO",
        bio: "Game developer and AI engineer specializing in educational technology",
        previousRoles: [
          "Lead Engineer at Educational Gaming Studio",
          "AI Research Scientist",
        ],
      },
    ],
    coreCapabilities: [
      {
        title: "Immersive Gamified Therapy",
        description:
          "Rich fantasy world where therapy exercises advance the story. Character progression, quest system, multiplayer features, and extensive customization keep patients engaged.",
      },
      {
        title: "Evidence-Based Exercises",
        description:
          "5,000+ exercises covering articulation, language, fluency, voice, pragmatics, and AAC. AI-powered speech recognition provides immediate feedback with adaptive difficulty.",
      },
      {
        title: "AI-Powered Personalization",
        description:
          "Machine learning selects optimal exercises based on goals, performance, and engagement. Interest-based content and predictive goal achievement modeling.",
      },
      {
        title: "Clinical Workflow Tools",
        description:
          "Comprehensive assessment integration, intelligent treatment planning with goal bank, automated progress notes, and efficient documentation.",
      },
    ],
    features: [
      {
        title: "Home Practice & Family Engagement",
        description:
          "Mobile app for engaging home practice, parent dashboard with real-time progress visibility, customized exercise programs, and HIPAA-compliant family communication.",
      },
      {
        title: "Teletherapy Excellence",
        description:
          "Integrated HIPAA-compliant video platform, screen sharing, real-time collaboration, session recording, and virtual waiting room for professional teletherapy delivery.",
      },
      {
        title: "Advanced Speech Technology",
        description:
          "AI-powered articulation analysis, fluency detection, voice analysis, prosody measurement with support for multiple accents and child speech optimization.",
      },
      {
        title: "Practice Management",
        description:
          "Intelligent scheduling with AI optimization, automated reminders reducing no-shows by 70%, telehealth integration, and comprehensive outcome measurement.",
      },
    ],
    techDifferentiators: [
      {
        title: "78% home practice compliance",
        description:
          "Gamification dramatically increases home practice completion from industry average of 30-40% to 78%",
      },
      {
        title: "45% faster goal achievement",
        description:
          "Patients reach therapy goals 45% faster compared to traditional therapy approaches",
      },
      {
        title: "AI-powered speech recognition",
        description:
          "Advanced phonetic analysis provides immediate, accurate feedback on articulation with support for multiple accents and child speech",
      },
    ],
    customerStories: [
      {
        customer: "Large School District",
        industry: "Education",
        challenge:
          "Severe SLP shortage with 75:1 student-to-clinician ratios",
        solution:
          "Implemented Shadow Realm for enhanced home practice and teletherapy delivery",
        results:
          "Each SLP serves 20% more students effectively, home practice completion increased from 25% to 78%",
        metrics: [
          "20% more students served per SLP",
          "Home practice: 25%→78%",
          "Wait list: 12 months→6 weeks",
        ],
      },
      {
        customer: "Private Speech Therapy Practice",
        industry: "Healthcare",
        challenge:
          "Patient retention difficulties and limited home practice compliance",
        solution:
          "Deployed Shadow Realm gamification platform with family engagement tools",
        results:
          "Patient retention increased from 8 to 14 months, time to goals reduced by 45%",
        metrics: [
          "85% home practice completion",
          "45% faster goal achievement",
          "Practice grew 6→10 locations",
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
                        SLPs Using Platform
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
                        Patients Served
                      </div>
                      <div className="text-lg font-semibold text-blue-900">
                        25,000+
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
              Where clinical excellence meets engaging game experience
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
        subtitle="Comprehensive tools for speech-language pathologists"
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
              Clinical experts and technology innovators
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

export default ShadowRealmPage;

