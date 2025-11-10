import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title:
        "Global Financial Services Firm Achieves SOX Compliance with Quorix",
      customer: "Global Financial Services Firm",
      industry: "Financial Services",
      product: "Quorix",
      challenge:
        "Secure 500+ AWS accounts while meeting SOX compliance requirements with limited security team resources",
      solution:
        "Deployed Quorix CNAPP with focus on configuration management, access controls, and automated compliance validation",
      results:
        "85% reduction in security misconfigurations, achieved SOX certification 6 months ahead of schedule, reduced security team workload by 60%",
      metrics: [
        "85% fewer misconfigurations",
        "6 months faster SOX certification",
        "500+ AWS accounts secured",
        "60% reduced team workload",
      ],
    },
    {
      title: "Major Healthcare System Automates HIPAA Compliance",
      customer: "Major Healthcare System",
      industry: "Healthcare",
      product: "AxionTrust",
      challenge:
        "Maintain HIPAA compliance across 50+ cloud accounts and hybrid infrastructure with manual compliance processes",
      solution:
        "AxionTrust automated HIPAA monitoring with integrated remediation workflows and continuous evidence collection",
      results:
        "95% reduction in compliance violations, automated audit preparation saves 2,000 hours annually, achieved 100% HIPAA compliance rate",
      metrics: [
        "95% reduction in violations",
        "2,000 hours saved per year",
        "50+ accounts monitored",
        "100% HIPAA compliance",
      ],
    },
    {
      title: "Global Technology Company Eliminates Standing Privileges",
      customer: "Global Technology Company",
      industry: "Technology",
      product: "Dern",
      challenge:
        "Secure privileged access across 10,000+ cloud resources and on-premises systems with shared administrative accounts",
      solution:
        "Dern deployment with emphasis on just-in-time access provisioning and comprehensive session monitoring",
      results:
        "Eliminated 15,000 standing privileged accounts, 90% reduction in privileged access incidents, complete audit trail for all privileged activities",
      metrics: [
        "15,000 accounts eliminated",
        "90% fewer incidents",
        "10,000+ resources secured",
        "100% session recording",
      ],
    },
    {
      title: "Fintech Startup Achieves PCI-DSS Compliance with Board3",
      customer: "Fintech Startup",
      industry: "Financial Services",
      product: "Board3",
      challenge:
        "Rapidly deploy secure, compliant infrastructure without dedicated DevOps expertise",
      solution:
        "Board3 templates for financial services compliance with automated Terraform generation",
      results:
        "10x faster infrastructure deployment, achieved PCI-DSS compliance without hiring additional specialists",
      metrics: [
        "10x faster deployment",
        "PCI-DSS certified",
        "No additional DevOps hires needed",
        "80% cost savings",
      ],
    },
    {
      title: "Global Financial Institution Scales Identity Governance",
      customer: "Global Financial Institution",
      industry: "Financial Services",
      product: "SentryOne ID",
      challenge:
        "Manage identity governance for 200,000+ employees across 50 countries with strict regulatory requirements",
      solution:
        "SentryOne ID deployment with focus on automated compliance reporting and risk-based access reviews",
      results:
        "90% reduction in access review completion time, achieved regulatory compliance across all jurisdictions",
      metrics: [
        "90% faster access reviews",
        "200k+ identities managed",
        "50 countries covered",
        "Zero compliance violations",
      ],
    },
    {
      title: "Manufacturing Conglomerate Modernizes ERP Securely",
      customer: "Global Manufacturing Conglomerate",
      industry: "Manufacturing",
      product: "EdgeRP",
      challenge:
        "Modernize legacy ERP systems while maintaining security and compliance across 15 countries",
      solution:
        "Phased EdgeRP deployment with emphasis on supply chain integration and regulatory compliance",
      results:
        "40% improvement in supply chain visibility, achieved SOX compliance 6 months ahead of schedule, 25% reduction in IT operational costs",
      metrics: [
        "40% better visibility",
        "6 months faster SOX",
        "25% lower IT costs",
        "15 countries deployed",
      ],
    },
  ];

  const getProductSlug = (productName: string): string => {
    const slugMap: { [key: string]: string } = {
      Quorix: "quorix",
      AxionTrust: "axiontrust",
      Dern: "dern",
      Board3: "board3",
      "SentryOne ID": "sentryone-id",
      EdgeRP: "edgerp",
    };
    return slugMap[productName] || productName.toLowerCase();
  };

  return (
    <div>
      <SEO
        title="Case Studies — Enterprise Success Stories | AxionOre"
        description="See how leading enterprises achieve remarkable security, compliance, and operational outcomes with AxionOre portfolio companies."
      />

      <PageHeader
        title="Case Studies"
        subtitle="Enterprise outcomes and success stories from Fortune 500 companies"
        eyebrow="Resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Case Studies" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Real Results from Real Enterprises
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From Fortune 100 financial institutions to global healthcare
            systems, see how AxionOre portfolio companies deliver measurable
            security, compliance, and operational improvements.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F2F4F5] rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building2 className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {study.customer}
                        </h3>
                        <p className="text-sm text-blue-600 font-medium">
                          {study.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Results
                        </h4>
                        <p className="text-gray-900 font-medium">
                          {study.results}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href={`/products/${getProductSlug(study.product)}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn more about {study.product}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-4">
                        Key Metrics
                      </h4>
                      <div className="space-y-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700 font-medium">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-blue-200">
                        <span className="text-xs text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full">
                          {study.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of enterprises achieving remarkable security and
            compliance outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              Schedule a Demo
            </a>
            <a
              href="/company/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
