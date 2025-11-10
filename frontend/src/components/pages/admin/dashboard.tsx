import { useAdmin } from "@/contexts/admin-context";
import axios from "axios";
import {
  ArrowDown,
  ArrowUp,
  Briefcase,
  Calendar,
  Eye,
  FileText,
  Mail,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface AnalyticsData {
  pageViews: {
    total: number;
    last30Days: number;
    today: number;
  };
  contacts: {
    total: number;
    new: number;
    last7Days: number;
  };
  demos: {
    total: number;
    new: number;
    last7Days: number;
  };
  content: {
    publishedBlogs: number;
    activeJobs: number;
  };
  topPages: Array<{ page: string; views: number }>;
  viewsByCategory: Array<{ category: string; views: number }>;
}

const AdminDashboard = () => {
  const { token } = useAdmin();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin/analytics/overview`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAnalytics(response.data.data);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const stats = [
    {
      name: "Page Views (30d)",
      value: analytics?.pageViews.last30Days || 0,
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "blue",
    },
    {
      name: "New Contacts (7d)",
      value: analytics?.contacts.last7Days || 0,
      change: "+23.1%",
      trend: "up",
      icon: Mail,
      color: "green",
    },
    {
      name: "Demo Requests (7d)",
      value: analytics?.demos.last7Days || 0,
      change: "+18.7%",
      trend: "up",
      icon: Calendar,
      color: "purple",
    },
    {
      name: "Published Blogs",
      value: analytics?.content.publishedBlogs || 0,
      change: "—",
      trend: "neutral",
      icon: FileText,
      color: "orange",
    },
    {
      name: "Active Jobs",
      value: analytics?.content.activeJobs || 0,
      change: "—",
      trend: "neutral",
      icon: Briefcase,
      color: "indigo",
    },
    {
      name: "Pending Actions",
      value: (analytics?.contacts.new || 0) + (analytics?.demos.new || 0),
      change: "Needs attention",
      trend: "neutral",
      icon: Users,
      color: "red",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your site today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorMap: any = {
            blue: "from-blue-500 to-blue-600",
            green: "from-green-500 to-green-600",
            purple: "from-purple-500 to-purple-600",
            orange: "from-orange-500 to-orange-600",
            indigo: "from-indigo-500 to-indigo-600",
            red: "from-red-500 to-red-600",
          };

          return (
            <div
              key={stat.name}
              className="bg-[#F2F4F5] rounded-lg shadow p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value.toLocaleString()}
                  </p>
                  <div className="flex items-center mt-2">
                    {stat.trend === "up" && (
                      <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                    )}
                    {stat.trend === "down" && (
                      <ArrowDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : stat.trend === "down"
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${
                    colorMap[stat.color]
                  } rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Top Pages (Last 30 Days)
          </h3>
          {analytics && analytics.topPages.length > 0 ? (
            <div className="space-y-3">
              {analytics.topPages.slice(0, 5).map((page, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-gray-700 truncate">
                    {page.page}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {page.views} views
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No page view data yet</p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Pending Items
          </h3>
          <div className="space-y-3">
            <Link
              to="/admin/contacts"
              className="flex items-center justify-between py-2 px-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">
                  New Contact Submissions
                </span>
              </div>
              <span className="text-sm font-bold text-red-600">
                {analytics?.contacts.new || 0}
              </span>
            </Link>

            <Link
              to="/admin/demos"
              className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">
                  Pending Demo Requests
                </span>
              </div>
              <span className="text-sm font-bold text-orange-600">
                {analytics?.demos.new || 0}
              </span>
            </Link>

            <Link
              to="/admin/blogs"
              className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">
                  Manage Blogs
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600">
                {analytics?.content.publishedBlogs || 0}
              </span>
            </Link>

            <Link
              to="/admin/jobs"
              className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">
                  Manage Jobs
                </span>
              </div>
              <span className="text-sm font-bold text-green-600">
                {analytics?.content.activeJobs || 0}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Views by Category */}
      {analytics && analytics.viewsByCategory.length > 0 && (
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Views by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {analytics.viewsByCategory.map((cat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-bold text-gray-900">{cat.views}</p>
                <p className="text-xs text-gray-600 mt-1 capitalize">
                  {cat.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
