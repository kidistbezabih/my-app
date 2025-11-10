import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const LeadershipPage = () => {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chairman & Chief Executive Officer",
      bio: "Dr. Sarah Chen serves as Chairman and CEO of AxionOre, bringing over 20 years of experience in enterprise security and technology leadership. Prior to AxionOre, she served as CISO at two Fortune 100 companies where she led global security transformations and built world-class security organizations.",
      education: "PhD in Computer Science, MIT",
      expertise: [
        "Enterprise Cybersecurity Strategy",
        "Cloud Security Architecture",
        "AI/ML in Security",
        "Risk Management",
      ],
      achievements: [
        "Led security transformations at Fortune 100 companies",
        "Built AxionOre into a $200M+ ARR portfolio",
        "Recognized as top 50 CISOs globally",
        "Advisory board member for multiple cybersecurity startups",
      ],
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Marcus Rodriguez serves as CTO of AxionOre, overseeing technical strategy and architecture across all portfolio companies. His career spans leadership roles at AWS and Netflix, where he built and scaled systems serving billions of requests daily. Marcus brings deep expertise in cloud-native architectures, distributed systems, and building for extreme scale.",
      education: "MS Computer Science, Stanford University",
      expertise: [
        "Cloud-Native Architecture",
        "Distributed Systems",
        "Platform Engineering",
        "Developer Experience",
      ],
      achievements: [
        "Built AWS services used by millions of customers",
        "Architected Netflix's global streaming infrastructure",
        "50+ technical patents in cloud and distributed systems",
        "Frequent speaker at technical conferences",
      ],
    },
    {
      name: "Jennifer Park",
      role: "Chief Investment Officer",
      bio: "Jennifer Park leads AxionOre's investment strategy and portfolio development. With extensive experience as both a venture partner and product leader at enterprise software companies, Jennifer combines investment acumen with operational expertise. She identifies market opportunities, evaluates potential investments, and guides portfolio company growth strategies.",
      education: "MBA, Harvard Business School; BS Engineering, Stanford",
      expertise: [
        "Enterprise Software Markets",
        "Venture Capital & M&A",
        "Product Strategy",
        "Go-to-Market Planning",
      ],
      achievements: [
        "Led investments in 6 market-leading companies",
        "Built product organizations at two unicorn startups",
        "Advisor to enterprise software CEOs",
        "Published thought leader on enterprise technology trends",
      ],
    },
  ];

  return (
    <div>
      <SEO
        title="Leadership — AxionOre Executive Team"
        description="Meet the AxionOre leadership team: world-class executives from Fortune 100 companies, AWS, Netflix, and leading venture capital firms."
      />

      <PageHeader
        title="Leadership"
        subtitle="World-class executives driving innovation and market leadership"
        eyebrow="Company"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Company" },
            { label: "Leadership" },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Board of Directors & Executive Team
          </h2>
          <p className="text-lg text-gray-600">
            AxionOre is led by proven technology executives with deep expertise
            in cybersecurity, cloud architecture, enterprise software, and
            venture capital. Our team combines Fortune 100 operational
            experience with startup innovation and investment acumen.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F2F4F5] rounded-xl p-8 md:p-10 shadow-sm border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-6xl font-bold mb-4 mx-auto lg:mx-0">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-medium mt-2 text-center lg:text-left">
                        {leader.role}
                      </p>
                      <div className="flex justify-center lg:justify-start gap-3 mt-4">
                        <a
                          href="#"
                          className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                        <a
                          href="mailto:info@axionore.com"
                          className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-blue-600" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 mb-6">{leader.bio}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Education
                        </h4>
                        <p className="text-gray-600">{leader.education}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-600"
                            >
                              <span className="text-green-600 mr-2 mt-1">
                                ✓
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
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
            Work with World-Class Leadership
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our team and work alongside proven executives building the
            future of enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
            >
              View Open Positions
            </a>
            <a
              href="/company/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border-2 border-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
