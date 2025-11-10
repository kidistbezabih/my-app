import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHeader } from "@/components/shared/PageHeader";
import { SEO } from "@/components/shared/SEO";
import axios from "axios";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const GetDemoPage = () => {
  const [formData, setFormData] = useState({
    type: "demo",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    interestedProducts: [] as string[],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const products = [
    "Quorix (CNAPP)",
    "AxionTrust (Compliance)",
    "Dern (PAM)",
    "Board3 (IaC)",
    "SentryOne ID (IGA)",
    "EdgeRP (Secure ERP)",
  ];

  const companySizes = [
    "1-50 employees",
    "51-200 employees",
    "201-1,000 employees",
    "1,001-5,000 employees",
    "5,001+ employees",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductChange = (product: string) => {
    const updated = formData.interestedProducts.includes(product)
      ? formData.interestedProducts.filter((p) => p !== product)
      : [...formData.interestedProducts, product];

    setFormData({
      ...formData,
      interestedProducts: updated,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contacts`,
        formData
      );
      setSubmitted(true);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to submit form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Get a Demo — Schedule Your Personalized Demonstration"
        description="Schedule a personalized demo of AxionOre portfolio products. See how we help Fortune 500 enterprises achieve security, compliance, and operational excellence."
      />

      <PageHeader
        title="Get a Demo"
        subtitle="Schedule a personalized demonstration of AxionOre solutions"
        eyebrow="Let's Talk"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Get a Demo" }]}
        />
      </div>

      <section className="py-16 bg-[#F2F4F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "Personalized demo tailored to your use cases",
                  "Deep dive into features and capabilities",
                  "Discussion of your specific requirements",
                  "Architecture and integration overview",
                  "Pricing and deployment options",
                  "Q&A with product experts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Trusted by Fortune 500
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Over 500 enterprise customers across 40+ countries trust
                  AxionOre portfolio companies for their most critical security
                  and compliance needs.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600">Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demo Request Received!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in AxionOre. A member of our
                    team will contact you within 1 business day to schedule your
                    personalized demonstration.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#EDF0F1] rounded-xl p-8 border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calendar className="w-6 h-6 text-blue-600 mr-2" />
                    Schedule Your Demo
                  </h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Interested Products (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {products.map((product) => (
                          <label
                            key={product}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={formData.interestedProducts.includes(
                                product
                              )}
                              onChange={() => handleProductChange(product)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">
                              {product}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {submitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Demo
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * Required fields. We'll contact you within 1 business
                      day.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetDemoPage;
