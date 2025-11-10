import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";

const AnalystReportsPage = () => {
  const reports = [
    {
      title:
        "Gartner Magic Quadrant Leader - Cloud Security Posture Management (2024)",
      analyst: "Gartner",
      year: "2024",
      product: "Quorix",
      summary:
        "Quorix recognized for completeness of vision and ability to execute in the cloud security posture management market.",
      highlights: [
        "Leader in both Vision and Execution axes",
        "Recognized for AI-powered threat detection capabilities",
        "Noted for developer-centric security approach",
        "Highlighted for enterprise customer success",
      ],
    },
    {
      title: "Forrester Wave Strong Performer - Compliance Automation (2024)",
      analyst: "Forrester",
      year: "2024",
      product: "AxionTrust",
      summary:
        "AxionTrust highlighted for multi-framework automation capabilities and real-time monitoring across 40+ compliance frameworks.",
      highlights: [
        "Strong Performer in Compliance Automation category",
        "Leading in multi-framework automation",
        "Recognized for real-time compliance monitoring",
        "Noted for AI-powered risk assessment",
      ],
    },
    {
      title:
        "Forrester Wave Strong Performer - Privileged Access Management (2024)",
      analyst: "Forrester",
      year: "2024",
      product: "Dern",
      summary:
        "Dern noted for just-in-time access provisioning and comprehensive session analytics with behavioral anomaly detection.",
      highlights: [
        "Strong Performer in PAM category",
        "Leader in JIT access provisioning",
        "Recognized for behavioral analytics",
        "Noted for zero-trust architecture",
      ],
    },
    {
      title:
        "Forrester Wave Leader - Identity Governance & Administration (2024)",
      analyst: "Forrester",
      year: "2024",
      product: "SentryOne ID",
      summary:
        "SentryOne ID recognized as a leader for AI-powered access intelligence and enterprise-scale automation.",
      highlights: [
        "Leader in IGA category",
        "Highest score for AI-powered intelligence",
        "Recognized for enterprise scale (500k+ identities)",
        "Leading in application connector ecosystem",
      ],
    },
    {
      title: "Forrester Wave Leader - Cloud Workload Protection (2024)",
      analyst: "Forrester",
      year: "2024",
      product: "Quorix",
      summary:
        "Quorix recognized for comprehensive cloud workload protection capabilities across VMs, containers, and serverless.",
      highlights: [
        "Leader in Cloud Workload Protection",
        "Leading runtime threat detection",
        "Recognized for container security",
        "Noted for serverless protection",
      ],
    },
    {
      title: "KuppingerCole Leadership Compass Leader - PAM Solutions (2024)",
      analyst: "KuppingerCole",
      year: "2024",
      product: "Dern",
      summary:
        "Dern recognized as Overall Leader in Privileged Access Management with highest scores across all evaluation criteria.",
      highlights: [
        "Overall Leader in PAM category",
        "Highest product leadership score",
        "Leading in innovation",
        "Recognized for market leadership",
      ],
    },
    {
      title: "Gartner Peer Insights Customers' Choice - IGA Solutions (2024)",
      analyst: "Gartner",
      year: "2024",
      product: "SentryOne ID",
      summary:
        "SentryOne ID recognized as Customers' Choice based on customer reviews and ratings for Identity Governance & Administration.",
      highlights: [
        "Customers' Choice award",
        "Based on verified customer reviews",
        "High customer satisfaction scores",
        "Strong willingness to recommend",
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
        title="Analyst Reports — Market Leadership Recognition | AxionOre"
        description="See why leading analysts recognize AxionOre portfolio companies as leaders in cloud security, compliance automation, privileged access, and identity governance."
      />

      <PageHeader
        title="Analyst Reports"
        subtitle="Market leadership recognition from Gartner, Forrester, and KuppingerCole"
        eyebrow="Resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Analyst Reports" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Industry Analyst Recognition
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AxionOre portfolio companies have earned leadership positions across
            multiple analyst evaluations, demonstrating market-leading
            capabilities in cloud security, compliance automation, privileged
            access management, and identity governance.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {reports.map((report, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F2F4F5] rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600">
                        {report.analyst}
                      </div>
                      <div className="text-xs text-gray-500">{report.year}</div>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {report.title}
                </h3>

                <p className="text-gray-600 mb-4">{report.summary}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {report.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="text-green-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <a
                    href={`/products/${getProductSlug(report.product)}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Learn about {report.product}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {report.product}
                  </span>
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
            See Why Analysts Choose AxionOre
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the market-leading solutions that earned these
            recognitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              Schedule a Demo
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalystReportsPage;
