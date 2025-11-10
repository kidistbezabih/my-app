import { SEO } from "@/components/shared/SEO";
import { ArrowLeft, Home, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const popularLinks = [
    { label: "Homepage", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Get a Demo", href: "/get-demo" },
    { label: "Contact", href: "/company/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b] flex items-center justify-center px-4">
      <SEO
        title="Page Not Found — 404 Error | AxionOre"
        description="The page you're looking for doesn't exist. Return to AxionOre homepage or explore our products and solutions."
      />

      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-white/20 mb-4">404</div>
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-4 border-white/20">
            <Search className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-blue-200 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or the URL may be incorrect.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-[#EDF0F1] transition-colors shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Homepage
          </a>
        </div>

        {/* Popular Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">
            Looking for something else?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {popularLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-blue-200 hover:text-white transition-colors text-sm font-medium"
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-blue-300 text-sm">
          Need help?{" "}
          <a
            href="/company/contact"
            className="text-white underline hover:no-underline"
          >
            Contact our team
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
