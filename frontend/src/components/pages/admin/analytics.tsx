import { useAdmin } from "@/contexts/admin-context";
import axios from "axios";
import { Calendar, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface DailyView {
  date: string;
  views: number;
}

const AdminAnalyticsPage = () => {
  const { token } = useAdmin();
  const [dailyViews, setDailyViews] = useState<DailyView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyAnalytics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin/analytics/daily`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setDailyViews(response.data.data);
      } catch (error) {
        console.error("Failed to fetch daily analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyAnalytics();
  }, [token]);

  const maxViews = Math.max(...dailyViews.map((d) => d.views), 1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">
          Detailed analytics and visitor insights
        </p>
      </div>

      {/* Daily Views Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Daily Page Views (Last 30 Days)
        </h3>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : dailyViews.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No analytics data available yet. Start tracking page views to see
            data here.
          </div>
        ) : (
          <div className="space-y-2">
            {dailyViews.map((day) => (
              <div key={day.date} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(day.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="flex-1">
                  <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg transition-all"
                      style={{
                        width: `${(day.views / maxViews) * 100}%`,
                        minWidth: day.views > 0 ? "20px" : "0",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center px-3">
                      <span className="text-sm font-medium text-gray-900">
                        {day.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            Total Views
          </h4>
          <p className="text-3xl font-bold text-gray-900">
            {dailyViews
              .reduce((sum, day) => sum + day.views, 0)
              .toLocaleString()}
          </p>
        </div>
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            Average Daily Views
          </h4>
          <p className="text-3xl font-bold text-gray-900">
            {dailyViews.length > 0
              ? Math.round(
                  dailyViews.reduce((sum, day) => sum + day.views, 0) /
                    dailyViews.length
                ).toLocaleString()
              : 0}
          </p>
        </div>
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Peak Day</h4>
          <p className="text-3xl font-bold text-gray-900">
            {Math.max(...dailyViews.map((d) => d.views), 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
