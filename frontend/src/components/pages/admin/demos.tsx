import { useAdmin } from "@/contexts/admin-context";
import axios from "axios";
import {
  Building2,
  Calendar,
  Clock,
  Mail,
  Package,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Demo {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  companySize?: string;
  interestedProducts?: string[];
  message?: string;
  status: string;
  createdAt: string;
}

const AdminDemosPage = () => {
  const { token } = useAdmin();
  const [demos, setDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("new");

  useEffect(() => {
    fetchDemos();
  }, [filter]);

  const fetchDemos = async () => {
    try {
      setLoading(true);
      const url = `${
        import.meta.env.VITE_BACKEND_URL
      }/admin/contacts?type=demo${filter !== "all" ? `&status=${filter}` : ""}`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDemos(response.data.data);
    } catch (error) {
      console.error("Failed to fetch demos:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/admin/contacts/${id}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchDemos();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to update status");
    }
  };

  const sendEmail = (email: string, name: string) => {
    const subject = `Demo Request - AxionOre`;
    const body = `Hi ${name},\n\nThank you for your interest in AxionOre solutions. Let's schedule your personalized demonstration.\n\nBest regards,\nAxionOre Team`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const statusColors: any = {
    new: "bg-red-100 text-red-800",
    contacted: "bg-blue-100 text-blue-800",
    qualified: "bg-purple-100 text-purple-800",
    converted: "bg-green-100 text-green-800",
    closed: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Demo Requests</h1>
        <p className="text-gray-600 mt-1">
          Manage demo requests and schedule product demonstrations
        </p>
      </div>

      {/* Status Filters */}
      <div className="bg-[#F2F4F5] rounded-lg shadow p-4">
        <div className="flex flex-wrap gap-2">
          {["all", "new", "contacted", "qualified", "converted", "closed"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  filter === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>
      </div>

      {/* Demo Requests List */}
      <div className="bg-[#F2F4F5] rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : demos.length === 0 ? (
          <div className="text-center p-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No demo requests found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {demos.map((demo) => (
              <div key={demo._id} className="p-6 hover:bg-[#EDF0F1]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {demo.firstName} {demo.lastName}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded capitalize ${
                          statusColors[demo.status]
                        }`}
                      >
                        {demo.status}
                      </span>
                      {demo.status === "new" && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded animate-pulse">
                          New
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a
                          href={`mailto:${demo.email}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {demo.email}
                        </a>
                      </div>
                      {demo.phone && (
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {demo.phone}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        {demo.company}
                        {demo.jobTitle && ` • ${demo.jobTitle}`}
                      </div>
                      {demo.companySize && (
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {demo.companySize}
                        </div>
                      )}
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(demo.createdAt).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {demo.interestedProducts &&
                      demo.interestedProducts.length > 0 && (
                        <div className="mb-3">
                          <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                            <Package className="w-4 h-4 mr-2" />
                            Interested Products:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {demo.interestedProducts.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    {demo.message && (
                      <div className="bg-[#EDF0F1] rounded-lg p-3">
                        <p className="text-sm text-gray-700">{demo.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <button
                      onClick={() =>
                        sendEmail(
                          demo.email,
                          `${demo.firstName} ${demo.lastName}`
                        )
                      }
                      className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center whitespace-nowrap"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      Send Email
                    </button>

                    {demo.status === "new" && (
                      <button
                        onClick={() => updateStatus(demo._id, "contacted")}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        Approve
                      </button>
                    )}

                    <button
                      onClick={() => updateStatus(demo._id, "closed")}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDemosPage;
