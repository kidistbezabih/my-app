import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const InfrastructureAutomationPage = () => {
  const solution = {
    name: "Infrastructure Automation",
    tagline: "Visual Design to Terraform with Policy and Collaboration",
    description:
      "Democratize Infrastructure as Code with visual design and automated Terraform generation",
    eyebrow: "Solution",
    overview:
      "Accelerate cloud adoption and infrastructure deployment with Board3's visual Infrastructure as Code platform. Reduce deployment time by 80% while maintaining governance, best practices, and team collaboration.",

    challenges: [
      "Terraform requires specialized expertise many organizations lack",
      "Manual infrastructure deployment is slow and error-prone",
      "Lack of governance leads to inconsistent infrastructure",
      "Collaboration on infrastructure code is difficult",
    ],

    solutionApproach: [
      "Intuitive visual interface for infrastructure design",
      "Automatic production-ready Terraform generation",
      "Built-in policy enforcement and cost optimization",
      "Real-time collaborative editing with conflict resolution",
    ],

    useCases: [
      {
        title: "Self-Service Infrastructure",
        description:
          "Enable development teams to deploy infrastructure independently",
        benefits: [
          "Reduced DevOps team bottlenecks",
          "Faster time to market",
          "Maintained governance and standards",
        ],
      },
      {
        title: "Infrastructure Governance",
        description: "Enforce organizational standards and best practices",
        benefits: [
          "Approved resource templates",
          "Policy-as-code enforcement",
          "Cost estimation and optimization",
        ],
      },
      {
        title: "Team Collaboration",
        description: "Real-time collaboration on infrastructure designs",
        benefits: [
          "Simultaneous multi-user editing",
          "Comment and annotation system",
          "Approval workflows",
        ],
      },
    ],

    integrations: [
      {
        product: "Board3",
        description: "Visual IaC platform with Terraform generation",
      },
      {
        product: "Quorix",
        description: "Security validation for infrastructure designs",
      },
      {
        product: "AxionTrust",
        description: "Compliance checking for infrastructure configurations",
      },
    ],

    targetPersonas: [
      "Cloud Architect",
      "DevOps Engineer",
      "Platform Engineer",
      "CTO",
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
        productName="Infrastructure Automation"
        title="Democratize Infrastructure as Code"
        description="Deploy infrastructure 80% faster with visual design, automatic Terraform generation, and built-in governance."
      />
    </div>
  );
};

export default InfrastructureAutomationPage;
