import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const ComplianceAutomationPage = () => {
  const solution = {
    name: "Compliance Automation",
    tagline: "Continuous Compliance with Automated Evidence and Remediation",
    description:
      "Automate compliance across 40+ frameworks including SOX, GDPR, HIPAA, and PCI-DSS",
    eyebrow: "Solution",
    overview:
      "Transform regulatory compliance from a manual burden into an automated competitive advantage. AxionTrust automates compliance monitoring, evidence collection, and remediation across cloud and hybrid environments.",

    challenges: [
      "Average enterprise must comply with 12+ regulatory frameworks",
      "Traditional compliance relies on manual evidence collection",
      "Audit preparation typically requires 6-12 months of intensive work",
      "Dynamic cloud environments make continuous monitoring difficult",
    ],

    solutionApproach: [
      "Automated policy enforcement across 40+ compliance frameworks",
      "Continuous evidence collection with immutable audit trails",
      "AI-powered risk assessment and prioritization",
      "Real-time compliance scoring and drift detection",
    ],

    useCases: [
      {
        title: "Multi-Framework Compliance",
        description: "Satisfy multiple regulatory requirements simultaneously",
        benefits: [
          "Reduced duplicated effort across frameworks",
          "Single source of truth for compliance status",
          "Automated cross-framework mapping",
        ],
      },
      {
        title: "Continuous Audit Readiness",
        description: "Maintain audit-ready posture year-round",
        benefits: [
          "Automated evidence collection",
          "Immutable compliance artifacts",
          "Real-time compliance dashboards",
        ],
      },
      {
        title: "Regulatory Change Management",
        description: "Stay current with evolving regulatory requirements",
        benefits: [
          "Automated regulatory update monitoring",
          "Impact analysis for new requirements",
          "Implementation guidance",
        ],
      },
    ],

    integrations: [
      {
        product: "AxionTrust",
        description: "Core compliance automation platform",
      },
      {
        product: "Quorix",
        description: "Cloud security controls feeding compliance validation",
      },
      {
        product: "EdgeRP",
        description:
          "Business process compliance integrated with security controls",
      },
    ],

    targetPersonas: [
      "Chief Compliance Officer",
      "Risk Manager",
      "Internal Auditor",
      "CISO",
    ],
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
        productName="Compliance Automation"
        title="Automate Your Compliance Journey"
        description="Reduce compliance costs by 80% while maintaining continuous audit readiness across 40+ frameworks."
      />
    </div>
  );
};

export default ComplianceAutomationPage;
