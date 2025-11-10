import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const SecureErpPage = () => {
  const solution = {
    name: "Secure Enterprise Resource Planning",
    tagline: "Zero-Trust ERP with Built-In Security and Compliance",
    description:
      "Next-generation ERP where security and compliance are foundational, not afterthoughts",
    eyebrow: "Solution",
    overview:
      "EdgeRP represents the future of enterprise resource planning, built from the ground up with zero-trust security principles. Integrate financial management, supply chain, HR, and CRM with enterprise-grade security controls.",

    challenges: [
      "Traditional ERP systems treat security as an afterthought",
      "Business operations and security governance operate in silos",
      "Legacy ERP creates significant technical debt",
      "Difficulty demonstrating compliance across integrated systems",
    ],

    solutionApproach: [
      "Zero-trust architecture built into every business process",
      "Native security controls and compliance automation",
      "Cloud-native microservices architecture",
      "AI-powered business insights with security intelligence",
    ],

    useCases: [
      {
        title: "Security-First Financial Management",
        description:
          "Financial systems with built-in fraud detection and compliance",
        benefits: [
          "Automated SOX compliance",
          "Real-time fraud detection",
          "Comprehensive audit trails",
        ],
      },
      {
        title: "Secure Supply Chain Management",
        description: "End-to-end supply chain visibility with risk assessment",
        benefits: [
          "Supplier risk scoring",
          "Blockchain-enabled traceability",
          "Sustainability tracking",
        ],
      },
      {
        title: "Integrated HR and Identity Governance",
        description: "HR lifecycle management integrated with identity systems",
        benefits: [
          "Automated provisioning on hire/transfer/termination",
          "Compliance-driven access controls",
          "Privacy-by-design for employee data",
        ],
      },
    ],

    integrations: [
      { product: "EdgeRP", description: "Security-integrated ERP platform" },
      {
        product: "AxionTrust",
        description: "Business process compliance automation",
      },
      {
        product: "SentryOne ID",
        description: "Identity governance for ERP users",
      },
    ],

    targetPersonas: ["CFO", "CIO", "CISO", "Supply Chain Director"],
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
            { label: solution.name },
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
      <RelatedProducts integrations={solution.integrations} />

      {/* CTA */}
      <ProductCTA
        productName="Secure ERP Solution"
        title="Modernize ERP with Security Built-In"
        description="The only ERP platform designed for security-first enterprises with zero-trust architecture."
      />
    </div>
  );
};

export default SecureErpPage;
