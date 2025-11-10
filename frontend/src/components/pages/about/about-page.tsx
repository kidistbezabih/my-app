import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Globe,
  Heart,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

const AboutPage = () => {
  const stats = [
    { label: "Subsidiaries", value: "6", icon: Briefcase },
    { label: "Enterprise Customers", value: "500+", icon: Users },
    { label: "Countries", value: "40+", icon: Globe },
    { label: "Combined ARR", value: "$200M+", icon: TrendingUp },
    { label: "Customer Satisfaction", value: "95%", icon: Award },
    { label: "Retention Rate", value: "98%", icon: Heart },
  ];

  const values = [
    {
      title: "Excellence Without Compromise",
      icon: Award,
      description:
        "Enterprise customers deserve solutions that excel in every dimension—functionality, reliability, security, usability, and support. We invest in building solutions that lead in all critical areas.",
    },
    {
      title: "Customer Success Above All",
      icon: Target,
      description:
        "Our ultimate measure of success is the value we create for customers. Every strategic decision is evaluated through the lens of customer impact and long-term success.",
    },
    {
      title: "Innovation Through Deep Expertise",
      icon: Rocket,
      description:
        "True innovation comes from deep understanding of customer problems combined with advanced technical capabilities. We invest in both domain expertise and cutting-edge technology.",
    },
    {
      title: "Sustainable Competitive Advantage",
      icon: Shield,
      description:
        "We build companies designed to maintain market leadership over decades. This means investing in fundamental research, strong customer relationships, and barriers to entry.",
    },
  ];

  const investmentCriteria = [
    {
      title: "Large, Growing Markets",
      description:
        "We focus on technology markets with total addressable markets exceeding $10 billion and annual growth rates above 20%.",
    },
    {
      title: "Underserved Enterprise Segments",
      description:
        "We target markets where existing solutions fall short of large enterprise requirements around scale, security, compliance, and integration.",
    },
    {
      title: "High Switching Costs",
      description:
        "We prefer markets where successful solutions become deeply integrated into customer operations, creating natural switching costs.",
    },
    {
      title: "Technology-Enabled Disruption",
      description:
        "We look for markets where advances in AI, cloud computing, or automation enable fundamentally better solutions.",
    },
  ];

  return (
    <div>
      <SEO
        title="About AxionOre — Building the Future of Enterprise Technology"
        description="AxionOre builds and scales specialized enterprise solutions across cybersecurity, cloud infrastructure, compliance automation, and enterprise operations. Learn about our mission, values, and investment strategy."
      />

      <PageHeader
        title="About AxionOre"
        subtitle="Building the future of enterprise technology through focused innovation and market leadership"
        eyebrow="Company"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
      </div>

      {/* Company Stats */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-[#EDF0F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Vision Behind AxionOre
            </h3>
            <p className="text-gray-600 mb-6">
              AxionOre was founded in 2019 with a bold vision: to build the next
              generation of enterprise technology companies that would define
              their markets rather than simply compete in them. Our founders
              recognized that the enterprise technology landscape was ripe for
              disruption, with legacy vendors failing to meet the evolving needs
              of modern enterprises and emerging vendors lacking the scale and
              expertise to serve large organizations effectively.
            </p>

            <p className="text-gray-600 mb-6">
              Rather than building another technology company, we set out to
              create a holding company that could systematically identify
              underserved markets and build category-defining solutions. This
              approach allows us to leverage shared expertise, resources, and
              market insights while maintaining the focus and agility that each
              market demands.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              The Holding Company Advantage
            </h3>
            <p className="text-gray-600 mb-6">
              Traditional technology companies often struggle with focus,
              attempting to be all things to all customers. This approach
              typically results in mediocre solutions that satisfy no one
              particularly well. The AxionOre model inverts this approach: each
              subsidiary focuses intensely on a specific market segment,
              building deep expertise and delivering exceptional value in their
              chosen domain.
            </p>

            <p className="text-gray-600 mb-6">
              This focused approach is supported by shared resources and
              expertise that no single startup could afford to develop
              independently. Our subsidiaries benefit from enterprise-grade
              infrastructure, advanced research capabilities, regulatory
              expertise, and established enterprise relationships—accelerating
              their path to market leadership.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Building for the Long Term
            </h3>
            <p className="text-gray-600">
              Unlike traditional venture-backed startups that optimize for rapid
              exits, AxionOre takes a long-term approach to value creation. This
              perspective allows our subsidiaries to make investments in
              fundamental research, deep customer relationships, and sustainable
              competitive advantages that create lasting market leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              To identify and build the technology companies that will define
              the next generation of enterprise computing, delivering
              exceptional value to customers while creating sustainable
              competitive advantages in large, growing markets.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Investment Strategy
            </h2>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
              Our approach to identifying and building market-leading technology
              companies
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {investmentCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {criteria.title}
                </h3>
                <p className="text-blue-200">{criteria.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Market-First Approach
            </h3>
            <p className="text-blue-200 max-w-3xl mx-auto">
              We identify large, underserved markets where existing solutions
              fall short of enterprise requirements. Rather than creating
              incremental improvements, we build fundamentally better solutions
              that reset market expectations and establish new competitive
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Operating Model
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Subsidiary Independence
              </h3>
              <p className="text-gray-600 mb-6">
                Each AxionOre subsidiary operates as an independent company with
                its own management team, product strategy, and go-to-market
                approach. This independence ensures that each company can move
                quickly, adapt to market changes, and maintain the
                entrepreneurial spirit necessary for innovation leadership.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Shared Resources & Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                While maintaining operational independence, subsidiaries benefit
                from shared resources including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Advanced research and development capabilities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Enterprise sales and partnership networks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Regulatory and compliance expertise
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Technology infrastructure and security operations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Talent acquisition and development programs
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Coordination
              </h3>
              <p className="text-gray-600 mb-6">
                Where appropriate, subsidiaries collaborate on joint solutions,
                cross-selling opportunities, and integrated customer
                engagements. However, each company's primary focus remains on
                excelling in their core market rather than forced integration
                initiatives.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  Portfolio Performance
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 150% average annual revenue growth</li>
                  <li>✓ 98% customer retention rate</li>
                  <li>✓ 40% average year-over-year customer expansion</li>
                  <li>✓ Net Promoter Score of 75+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leadership
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              World-class executives driving innovation across the portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                Dr. Sarah Chen
              </h3>
              <p className="text-blue-600 font-medium mt-1">
                Chairman & Chief Executive Officer
              </p>
              <p className="text-gray-600 mt-4">
                Former CISO at two Fortune 100 companies with over 20 years in
                enterprise security and technology leadership. Dr. Chen holds a
                PhD in Computer Science from MIT and has been instrumental in
                shaping cybersecurity practices across multiple industries.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Cybersecurity
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Enterprise Strategy
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    AI/ML
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                Marcus Rodriguez
              </h3>
              <p className="text-blue-600 font-medium mt-1">
                Chief Technology Officer
              </p>
              <p className="text-gray-600 mt-4">
                Former Principal Engineer at AWS and Netflix, Marcus brings
                unparalleled expertise in building technology solutions at
                global scale. His technical vision and architectural leadership
                guide the technology strategy across all AxionOre subsidiaries.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Cloud Architecture
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Distributed Systems
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Scalability
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Jennifer Park</h3>
              <p className="text-blue-600 font-medium mt-1">
                Chief Investment Officer
              </p>
              <p className="text-gray-600 mt-4">
                Former venture partner and product leader with extensive
                experience in enterprise software markets. Jennifer oversees the
                strategic development of the AxionOre portfolio, identifying new
                market opportunities and guiding the growth strategies of
                existing subsidiaries.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Enterprise Software
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Venture Capital
                  </span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Product Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/company/leadership"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Full Leadership Team →
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision across the AxionOre
              portfolio
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {React.createElement(value.icon, {
                      className: "w-8 h-8 text-blue-600",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-16 md:py-24 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Market Selection Criteria
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              How we identify opportunities to build category-defining companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-[#F2F4F5] rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {criteria.title}
                </h3>
                <p className="text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our portfolio companies and discover how we're building the
            future of enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              Explore Portfolio
            </a>
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
