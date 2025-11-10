import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const HealthcarePage = () => {
  const solution = {
    name: "Healthcare Solutions",
    tagline: "HIPAA-Ready Platforms for Protected Health Information",
    description:
      "Secure healthcare operations while protecting patient privacy and ensuring regulatory compliance",
    eyebrow: "Industry Solution",
    overview:
      "Healthcare organizations must balance innovation with strict privacy requirements. Our solutions provide HIPAA-compliant security, compliance automation, and operational efficiency for healthcare providers, payers, and life sciences companies.",

    challenges: [
      "HIPAA compliance for protected health information (PHI)",
      "Integration of clinical and financial systems",
      "Secure telemedicine and remote care platforms",
      "Medical device and IoT security",
    ],

    solutionApproach: [
      "HIPAA-compliant security controls across all platforms",
      "Automated compliance monitoring and evidence collection",
      "Integrated identity governance for healthcare workers",
      "Privacy-by-design architecture",
    ],

    useCases: [
      {
        title: "HIPAA Compliance Automation",
        description: "Automated HIPAA monitoring and audit preparation",
        benefits: [
          "Continuous HIPAA monitoring",
          "Automated breach detection",
          "Compliance reporting",
        ],
      },
      {
        title: "Clinical Data Security",
        description: "Comprehensive protection for electronic health records",
        benefits: [
          "Access controls for PHI",
          "Audit trails for all access",
          "Encryption at rest and in transit",
        ],
      },
      {
        title: "Healthcare Identity Governance",
        description: "Manage access to patient data across healthcare systems",
        benefits: [
          "Role-based access to PHI",
          "Automated provisioning",
          "Access certifications",
        ],
      },
    ],

    integrations: [
      {
        product: "AxionTrust",
        description: "HIPAA compliance automation and continuous monitoring",
      },
      {
        product: "SentryOne ID",
        description:
          "Identity governance for healthcare workers and PHI access",
      },
      {
        product: "EdgeRP",
        description:
          "Integrated clinical and financial systems with HIPAA controls",
      },
      {
        product: "Dern",
        description:
          "Privileged access management for sensitive patient systems",
      },
    ],

    targetPersonas: ["CISO", "Compliance Officer", "CIO", "Privacy Officer"],
  };

  return (
    <div>
      <SEO
        title={`${solution.name} — ${solution.tagline} | AxionOre`}
        description={solution.description}
      />

      <PageHeader
        title={solution.name}
        subtitle={solution.tagline}
        eyebrow={solution.eyebrow}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Healthcare" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {solution.overview}
          </p>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-3">
              Ideal For
            </h3>
            <div className="flex flex-wrap gap-2">
              {solution.targetPersonas.map((persona, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full"
                >
                  {persona}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solution */}
      <SolutionChallenges
        challenges={solution.challenges}
        solutionApproach={solution.solutionApproach}
      />

      {/* Use Cases */}
      <SolutionUseCases useCases={solution.useCases} />

      {/* Related Products */}
      <RelatedProducts
        integrations={solution.integrations}
        title="HIPAA-Ready Security & Compliance Stack"
      />

      {/* CTA */}
      <ProductCTA
        productName="Healthcare Solutions"
        title="Protect Patient Data & Ensure HIPAA Compliance"
        description="Balance innovation with privacy requirements using our HIPAA-ready security and compliance platforms."
      />
    </div>
  );
};

export default HealthcarePage;
