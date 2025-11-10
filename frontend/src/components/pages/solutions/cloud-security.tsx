import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const CloudSecurityPage = () => {
  const solution = {
    name: "Cloud Security",
    tagline: "Protect Multi-Cloud Estates with Unified Visibility and Control",
    description:
      "Comprehensive cloud security across AWS, Azure, and Google Cloud Platform",
    eyebrow: "Solution",
    overview:
      "Modern enterprises face unprecedented challenges securing their cloud environments. With Quorix CNAPP at the core, our cloud security solution delivers unified visibility, automated threat detection, and compliance enforcement across all your cloud infrastructure.",

    challenges: [
      "Managing security across multiple cloud providers is complex and fragmented",
      "87% of enterprises use multi-cloud strategies, creating management complexity",
      "Traditional security tools weren't designed for dynamic cloud environments",
      "73% of organizations report security slowing down development initiatives",
    ],

    solutionApproach: [
      "Unified CSPM, CWP, and CIEM in a single platform",
      "AI-powered threat detection reduces false positives by 90%",
      "Developer-centric security that doesn't slow deployments",
      "Real-time drift detection and automated remediation",
    ],

    useCases: [
      {
        title: "Multi-Cloud Security Posture Management",
        description:
          "Maintain consistent security policies across AWS, Azure, and GCP",
        benefits: [
          "Single pane of glass for all cloud security",
          "Automated policy enforcement",
          "Real-time compliance monitoring",
        ],
      },
      {
        title: "Container and Kubernetes Security",
        description:
          "Protect containerized workloads from development to production",
        benefits: [
          "Runtime threat detection",
          "Image scanning and vulnerability management",
          "Network policy enforcement",
        ],
      },
      {
        title: "Cloud Entitlement Management",
        description: "Implement least-privilege access across cloud resources",
        benefits: [
          "Automated permission analysis",
          "Risk-based access recommendations",
          "Privilege escalation prevention",
        ],
      },
    ],

    integrations: [
      {
        product: "Quorix",
        description: "Core CNAPP platform providing unified cloud security",
      },
      {
        product: "AxionTrust",
        description:
          "Automated compliance validation for cloud security controls",
      },
      {
        product: "Dern",
        description:
          "Privileged access management for cloud administrative accounts",
      },
    ],

    targetPersonas: [
      "CISO",
      "Cloud Security Architect",
      "DevSecOps Engineer",
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
        productName="Cloud Security Solution"
        title="Secure Your Multi-Cloud Environment"
        description="Protect your cloud infrastructure with unified visibility, automated threat detection, and compliance enforcement."
      />
    </div>
  );
};

export default CloudSecurityPage;
