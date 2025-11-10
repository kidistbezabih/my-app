import { JobFormModal } from "@/components/admin/JobFormModal";
import { useAdmin } from "@/contexts/admin-context";
import { IJob } from "@/helpers/jobs.service";
import axios from "axios";
import {
  Briefcase,
  Calendar,
  DollarSign,
  Edit,
  MapPin,
  Plus,
  Star,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

const AdminJobsPage = () => {
  const { token } = useAdmin();
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<IJob | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/jobs`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setJobs(response.data.data);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete job "${title}"? This cannot be undone.`)) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/admin/jobs/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchJobs();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete job");
    }
  };

  const toggleActive = async (job: IJob) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/admin/jobs/${job._id}`,
        { isActive: !job.isActive },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchJobs();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to update job");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Management</h1>
          <p className="text-gray-600 mt-1">
            Create and manage career opportunities across portfolio companies
          </p>
        </div>
        <button
          onClick={() => {
            setEditingJob(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Post New Job
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="bg-[#F2F4F5] rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center p-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No job postings found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <div key={job._id} className="p-6 hover:bg-[#EDF0F1]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {job.featured && (
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                      <h3 className="text-lg font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          job.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {job.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.subsidiary}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      {job.salaryRange && (
                        <div className="flex items-center text-green-600 font-medium">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salaryRange}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Posted:{" "}
                        {new Date(job.postedDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 line-clamp-2">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => toggleActive(job)}
                      className={`px-3 py-1 text-sm rounded ${
                        job.isActive
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      {job.isActive ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => {
                        setEditingJob(job);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(job._id, job.title)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Job Form Modal */}
      <JobFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingJob(null);
        }}
        onSave={() => {
          fetchJobs();
        }}
        job={editingJob}
        token={token!}
      />
    </div>
  );
};

export default AdminJobsPage;
