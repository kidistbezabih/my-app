import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const PrivilegedAccessPage = () => {
  const solution = {
    name: "Privileged Access Management",
    tagline:
      "Eliminate Standing Privileges with JIT and Full Session Recording",
    description:
      "Zero-trust privileged access management with dynamic credentials and behavioral analytics",
    eyebrow: "Solution",
    overview:
      "Protect your most sensitive systems and data with next-generation privileged access management. Dern eliminates standing privileges, provides complete session visibility, and uses AI to detect anomalous privileged activity.",

    challenges: [
      "60% of data breaches involve privileged account compromise",
      "Shared administrative accounts create accountability gaps",
      "Static access controls can't adapt to changing risk conditions",
      "Manual credential rotation is error-prone and time-intensive",
    ],

    solutionApproach: [
      "Just-in-time credential provisioning eliminates standing privileges",
      "Complete session recording for all privileged access",
      "AI-powered behavioral analytics detect anomalies",
      "Context-aware access decisions based on risk",
    ],

    useCases: [
      {
        title: "Zero Standing Privileges",
        description: "Dynamic credential management for all privileged access",
        benefits: [
          "Eliminate persistent administrative accounts",
          "Automated credential rotation",
          "Time-bound access grants",
        ],
      },
      {
        title: "Session Monitoring and Analytics",
        description: "Complete visibility into privileged activities",
        benefits: [
          "Full session recording (RDP, SSH, web)",
          "Behavioral anomaly detection",
          "Searchable session archives",
        ],
      },
      {
        title: "Secrets Management",
        description:
          "Centralized management of API keys, tokens, and credentials",
        benefits: [
          "Automated secrets rotation",
          "Secret scanning across code repositories",
          "Integration with CI/CD pipelines",
        ],
      },
    ],

    integrations: [
      { product: "Dern", description: "Core PAM platform with JIT access" },
      {
        product: "SentryOne ID",
        description: "Identity governance for access requests and reviews",
      },
      {
        product: "Quorix",
        description: "Cloud infrastructure permissions management",
      },
    ],

    targetPersonas: [
      "CISO",
      "Security Operations Manager",
      "Identity Architect",
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
        productName="Privileged Access Management"
        title="Eliminate Your Privileged Access Risk"
        description="Stop insider threats and privileged account compromises with just-in-time access and complete session visibility."
      />
    </div>
  );
};

export default PrivilegedAccessPage;
