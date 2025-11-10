import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const IdentityGovernancePage = () => {
  const solution = {
    name: "Identity Governance & Administration",
    tagline: "AI-Powered Access Intelligence and Lifecycle Automation",
    description:
      "Enterprise-scale identity governance for complex global organizations",
    eyebrow: "Solution",
    overview:
      "Manage identity lifecycles, access certifications, and provisioning at enterprise scale. SentryOne ID combines AI-powered intelligence with enterprise-scale automation to ensure the right people have the right access at the right time.",

    challenges: [
      "Large enterprises manage hundreds of thousands of identities",
      "Traditional IGA solutions require extensive manual configuration",
      "Access review processes are time-intensive and often ignored",
      "Provisioning delays impact employee productivity",
    ],

    solutionApproach: [
      "AI-powered onboarding determines appropriate access automatically",
      "Risk-based access reviews focus effort on highest-risk access",
      "500+ pre-built application connectors streamline integration",
      "Behavioral analytics detect anomalous access patterns",
    ],

    useCases: [
      {
        title: "Automated User Lifecycle Management",
        description: "Streamline onboarding, changes, and offboarding",
        benefits: [
          "AI-powered access recommendations",
          "Automated provisioning workflows",
          "Comprehensive offboarding",
        ],
      },
      {
        title: "Intelligent Access Certifications",
        description: "Risk-based access reviews with AI recommendations",
        benefits: [
          "Reduced review time by 90%",
          "Peer-based access analysis",
          "Continuous access monitoring",
        ],
      },
      {
        title: "Application Ecosystem Integration",
        description:
          "Comprehensive connectivity across enterprise applications",
        benefits: [
          "500+ pre-built connectors",
          "Real-time synchronization",
          "Custom connector framework",
        ],
      },
    ],

    integrations: [
      {
        product: "SentryOne ID",
        description: "Core IGA platform with AI-powered intelligence",
      },
      {
        product: "Dern",
        description: "Privileged access governance and session management",
      },
      {
        product: "EdgeRP",
        description: "Identity integration with business applications",
      },
    ],

    targetPersonas: [
      "CISO",
      "Identity Architect",
      "HR Operations",
      "Compliance Officer",
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
        productName="Identity Governance Solution"
        title="Scale Identity Governance to Enterprise Level"
        description="Manage hundreds of thousands of identities with AI-powered intelligence and automation."
      />
    </div>
  );
};

export default IdentityGovernancePage;
