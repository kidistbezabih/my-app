import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const TechnologyPage = () => {
  const solution = {
    name: "Technology Sector Solutions",
    tagline: "Scale Cloud-Native Platforms Securely and Compliantly",
    description:
      "Enable rapid innovation while maintaining enterprise-grade security and compliance",
    eyebrow: "Industry Solution",
    overview:
      "Technology companies need to innovate rapidly while maintaining security and compliance. Our solutions enable DevSecOps, cloud-native security, and compliance automation that keeps pace with development velocity.",

    challenges: [
      "Balancing security with development velocity",
      "Multi-cloud and hybrid infrastructure complexity",
      "Compliance requirements for SOC 2, ISO 27001, and more",
      "Securing cloud-native applications and microservices",
    ],

    solutionApproach: [
      "Developer-centric security that doesn't slow deployments",
      "Automated compliance for SOC 2, ISO 27001, and more",
      "Cloud-native security for containers and Kubernetes",
      "Visual infrastructure automation with governance",
    ],

    useCases: [
      {
        title: "DevSecOps Enablement",
        description: "Security integrated into CI/CD pipelines",
        benefits: [
          "Shift-left security",
          "Automated security testing",
          "Policy as code",
        ],
      },
      {
        title: "Cloud-Native Security",
        description: "Comprehensive security for containerized applications",
        benefits: [
          "Container runtime protection",
          "Kubernetes security",
          "Service mesh integration",
        ],
      },
      {
        title: "SOC 2 and ISO 27001 Compliance",
        description: "Automated compliance for technology companies",
        benefits: [
          "Continuous compliance monitoring",
          "Automated evidence collection",
          "Audit preparation automation",
        ],
      },
    ],

    integrations: [
      {
        product: "Quorix",
        description:
          "Cloud-native application protection for containers and Kubernetes",
      },
      {
        product: "Board3",
        description: "Visual infrastructure automation with policy enforcement",
      },
      {
        product: "AxionTrust",
        description: "SOC 2 and ISO 27001 compliance automation",
      },
      {
        product: "Dern",
        description: "Secrets management for CI/CD pipelines",
      },
    ],

    targetPersonas: [
      "CTO",
      "VP Engineering",
      "Security Architect",
      "DevOps Lead",
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
            { label: "Technology" },
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
        title="DevSecOps & Cloud-Native Security Stack"
      />

      {/* CTA */}
      <ProductCTA
        productName="Technology Solutions"
        title="Scale Innovation Securely"
        description="Move fast without breaking security - DevSecOps and cloud-native security that keeps pace with development."
      />
    </div>
  );
};

export default TechnologyPage;
