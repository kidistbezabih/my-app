import { ProductCTA } from "@/components/sections/Products";
import {
  RelatedProducts,
  SolutionChallenges,
  SolutionUseCases,
} from "@/components/sections/Solutions";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";

const FinancialServicesPage = () => {
  const solution = {
    name: "Financial Services Solutions",
    tagline: "Meet Stringent Regulatory and Risk Requirements",
    description:
      "Comprehensive security, compliance, and operational solutions for financial institutions",
    eyebrow: "Industry Solution",
    overview:
      "Financial services organizations face unique challenges with stringent regulatory requirements, sophisticated threat actors, and complex operational environments. Our portfolio delivers purpose-built solutions for banking, insurance, and fintech companies.",

    challenges: [
      "Complex regulatory landscape (SOX, PCI-DSS, GLBA, etc.)",
      "Sophisticated cyber threats targeting financial data",
      "Legacy system modernization while maintaining security",
      "Real-time fraud detection and prevention requirements",
    ],

    solutionApproach: [
      "Automated compliance across financial regulations",
      "Advanced threat detection for financial systems",
      "Zero-trust security for customer and transaction data",
      "Integrated risk management and reporting",
    ],

    useCases: [
      {
        title: "Regulatory Compliance Automation",
        description: "Automate SOX, PCI-DSS, and other financial regulations",
        benefits: [
          "Continuous compliance monitoring",
          "Automated audit preparation",
          "Regulatory change management",
        ],
      },
      {
        title: "Transaction Security and Fraud Prevention",
        description: "AI-powered fraud detection for financial transactions",
        benefits: [
          "Real-time fraud detection",
          "Behavioral analytics",
          "Transaction monitoring",
        ],
      },
      {
        title: "Customer Data Protection",
        description: "Comprehensive protection for sensitive financial data",
        benefits: [
          "Encryption and tokenization",
          "Privacy compliance (GDPR, CCPA)",
          "Data governance and DLP",
        ],
      },
    ],

    integrations: [
      {
        product: "AxionTrust",
        description: "Regulatory compliance automation for SOX, PCI-DSS, GLBA",
      },
      {
        product: "Quorix",
        description:
          "Cloud security for financial applications and infrastructure",
      },
      {
        product: "Dern",
        description:
          "Privileged access management for sensitive financial systems",
      },
      {
        product: "EdgeRP",
        description: "Secure ERP for financial operations and reporting",
      },
    ],

    targetPersonas: ["CISO", "Chief Risk Officer", "Compliance Officer", "CTO"],
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
            { label: "Financial Services" },
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
        title="Complete Financial Services Security Stack"
      />

      {/* CTA */}
      <ProductCTA
        productName="Financial Services Solutions"
        title="Secure Your Financial Institution"
        description="Meet the most stringent regulatory requirements while protecting against sophisticated threats."
      />
    </div>
  );
};

export default FinancialServicesPage;
