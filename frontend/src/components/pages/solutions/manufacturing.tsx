import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const ManufacturingPage = () => {
  const solution = {
    name: "Manufacturing Solutions",
    tagline: "Secure Supply Chains with Real-Time Analytics",
    description:
      "Protect intellectual property, secure supply chains, and enable Industry 4.0 transformation",
    eyebrow: "Industry Solution",
    overview:
      "Manufacturing organizations face unique challenges protecting intellectual property, securing supply chains, and enabling digital transformation. Our solutions provide comprehensive security for manufacturing operations, from design to delivery.",

    challenges: [
      "Intellectual property theft and industrial espionage",
      "Supply chain security and visibility gaps",
      "OT/IT convergence and industrial IoT security",
      "Global operations with diverse regulatory requirements",
    ],

    solutionApproach: [
      "Comprehensive IP protection and data loss prevention",
      "Supply chain risk management and visibility",
      "Secure OT/IT integration",
      "Multi-region compliance automation",
    ],

    useCases: [
      {
        title: "Supply Chain Security",
        description: "End-to-end supply chain visibility and risk management",
        benefits: [
          "Supplier risk assessment",
          "Real-time tracking and analytics",
          "Sustainability monitoring",
        ],
      },
      {
        title: "Intellectual Property Protection",
        description:
          "Protect design files, formulas, and manufacturing processes",
        benefits: [
          "Access controls for IP",
          "Data loss prevention",
          "Comprehensive audit trails",
        ],
      },
      {
        title: "Industry 4.0 Security",
        description: "Secure IoT devices, robotics, and automation systems",
        benefits: [
          "IoT device management",
          "Network segmentation",
          "Anomaly detection",
        ],
      },
    ],

    integrations: [
      {
        product: "EdgeRP",
        description:
          "Integrated supply chain and financial management with security",
      },
      {
        product: "Quorix",
        description: "Cloud and IoT security for manufacturing systems",
      },
      {
        product: "AxionTrust",
        description: "Multi-region compliance automation",
      },
      {
        product: "Dern",
        description: "Privileged access to critical manufacturing systems",
      },
    ],

    targetPersonas: [
      "CIO",
      "CISO",
      "Supply Chain Director",
      "Operations Director",
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
            { label: "Manufacturing" },
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
        title="Complete Manufacturing Security Suite"
      />

      {/* CTA */}
      <ProductCTA
        productName="Manufacturing Solutions"
        title="Secure Your Manufacturing Operations"
        description="Protect IP, secure supply chains, and enable Industry 4.0 transformation with confidence."
      />
    </div>
  );
};

export default ManufacturingPage;
