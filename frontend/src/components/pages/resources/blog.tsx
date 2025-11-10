import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import { fetchBlogs, IBlog } from "@/helpers/blogs.service";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Tag, User } from "lucide-react";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogs({
          category: selectedCategory === "All" ? undefined : selectedCategory,
        });
        setBlogs(data);
      } catch (err) {
        console.error("Error loading blogs:", err);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [selectedCategory]);

  const categories = [
    "All",
    "Cloud Security",
    "Compliance",
    "Security",
    "DevOps",
    "Identity & Access",
    "Industry Insights",
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <SEO
        title="Blog — Insights & Thought Leadership | AxionOre"
        description="Expert insights on cloud security, compliance automation, privileged access, identity governance, and enterprise technology trends."
      />

      <PageHeader
        title="Blog"
        subtitle="Insights and thought leadership from AxionOre experts"
        eyebrow="Resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources" },
            { label: "Blog" },
          ]}
        />
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-[#F2F4F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#EDF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
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

          {!loading && !error && blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No blog posts found in this category.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogs.map((blog) => (
                <motion.article
                  key={blog._id}
                  variants={fadeInUp}
                  className="bg-[#F2F4F5] rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Featured Badge */}
                  {blog.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2">
                      <span className="text-white text-xs font-bold uppercase tracking-wide">
                        Featured Post
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {blog.readTime} min read
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Subtitle */}
                    {blog.subtitle && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {blog.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Author & Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {blog.author}
                          </div>
                          {blog.authorRole && (
                            <div className="text-xs text-gray-500">
                              {blog.authorRole}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-gray-500 mt-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(blog.publishedDate)}
                      <span className="mx-2">•</span>
                      <Eye className="w-3 h-3 mr-1" />
                      {blog.views.toLocaleString()} views
                    </div>

                    {/* Read More Link */}
                    <a
                      href={`/resources/blog/${blog.slug}`}
                      className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read full article →
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with AxionOre Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest thought leadership on enterprise security,
            compliance, and technology.
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
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
