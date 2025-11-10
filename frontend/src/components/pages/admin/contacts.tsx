import { useAdmin } from "@/contexts/admin-context";
import axios from "axios";
import { Building2, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  message?: string;
  status: string;
  createdAt: string;
}

const AdminContactsPage = () => {
  const { token } = useAdmin();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("new");

  useEffect(() => {
    fetchContacts();
  }, [filter]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const url = `${
        import.meta.env.VITE_BACKEND_URL
      }/admin/contacts?type=contact${
        filter !== "all" ? `&status=${filter}` : ""
      }`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(response.data.data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
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
      fetchContacts();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to update status");
    }
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
        <h1 className="text-2xl font-bold text-gray-900">
          Contact Submissions
        </h1>
        <p className="text-gray-600 mt-1">
          Manage contact form submissions from potential customers
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

      {/* Contacts List */}
      <div className="bg-[#F2F4F5] rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center p-12">
            <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No contact submissions found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <div key={contact._id} className="p-6 hover:bg-[#EDF0F1]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {contact.firstName} {contact.lastName}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded capitalize ${
                          statusColors[contact.status]
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          {contact.email}
                        </a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {contact.phone}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        {contact.company}
                        {contact.jobTitle && ` • ${contact.jobTitle}`}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(contact.createdAt).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {contact.message && (
                      <div className="bg-[#EDF0F1] rounded-lg p-3 mb-3">
                        <div className="flex items-start">
                          <MessageSquare className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    {contact.status === "new" && (
                      <button
                        onClick={() => updateStatus(contact._id, "contacted")}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 whitespace-nowrap"
                      >
                        Mark Contacted
                      </button>
                    )}
                    {contact.status === "contacted" && (
                      <button
                        onClick={() => updateStatus(contact._id, "qualified")}
                        className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 whitespace-nowrap"
                      >
                        Mark Qualified
                      </button>
                    )}
                    {contact.status === "qualified" && (
                      <button
                        onClick={() => updateStatus(contact._id, "converted")}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 whitespace-nowrap"
                      >
                        Mark Converted
                      </button>
                    )}
                    <button
                      onClick={() => updateStatus(contact._id, "closed")}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 whitespace-nowrap"
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

export default AdminContactsPage;
