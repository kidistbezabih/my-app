import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { IJob, fetchJobs } from "@/helpers/jobs.service";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Briefcase,
  DollarSign,
  Heart,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const CareersPage = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        console.error("Error loading jobs:", err);
        setError("Failed to load job listings");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description:
        "Market-leading salaries, equity participation, and performance bonuses",
    },
    {
      icon: Heart,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision, 401(k) matching, and unlimited PTO",
    },
    {
      icon: Lightbulb,
      title: "Learning & Development",
      description:
        "Annual learning budget, conference attendance, and certification support",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description:
        "Flexible work arrangements, remote options, and family-friendly policies",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Build solutions that fundamentally improve enterprise security and operations",
    },
    {
      icon: Rocket,
      title: "Innovation-Focused",
      description: "Work on cutting-edge AI, cloud, and security technologies",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Join world-class teams from AWS, Google, Microsoft, and leading enterprises",
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description:
        "Rapid career advancement in fast-growing, well-funded companies",
    },
  ];

  return (
    <div>
      <SEO
        title="Careers — Join AxionOre's World-Class Teams"
        description="Join AxionOre portfolio companies building the future of enterprise security, compliance, and operations. Competitive compensation, comprehensive benefits, and mission-driven work."
      />

      <PageHeader
        title="Careers"
        subtitle="Join world-class teams building the future of enterprise technology"
        eyebrow="Company"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Company" },
            { label: "Careers" },
          ]}
        />
      </div>

      {/* Why Join Us */}
      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join AxionOre
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Work on mission-critical solutions serving Fortune 500 enterprises
            while enjoying the innovation and growth of well-funded technology
            companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200 text-left"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Benefits & Perks
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive benefits designed to support your success
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-[#F2F4F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Open Positions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join one of our portfolio companies
            </p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading job opportunities...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No open positions at this time. Check back soon!
              </p>
            </div>
          )}

          {!loading && !error && jobs.length > 0 && (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-[#EDF0F1] rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.subsidiary}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
                          {job.employmentType.replace("-", " ")}
                        </span>
                        <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full capitalize">
                          {job.locationType}
                        </span>
                        {job.salaryRange && (
                          <span className="inline-flex items-center text-sm text-green-600 font-medium">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salaryRange}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="text-xs text-gray-500">
                        Posted:{" "}
                        {new Date(job.postedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <a
                      href="/company/contact"
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't see the right role?{" "}
              <a
                href="/company/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact us
              </a>{" "}
              to discuss opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join AxionOre and help build the next generation of enterprise
            technology.
          </p>
          <a
            href="/company/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
