import { IJob } from "@/helpers/jobs.service";
import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface JobFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  job?: IJob | null;
  token: string;
}

export const JobFormModal: React.FC<JobFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  job,
  token,
}) => {
  const [formData, setFormData] = useState<any>({
    slug: "",
    title: "",
    subsidiary: "Quorix",
    department: "Engineering",
    location: "Remote",
    locationType: "remote",
    employmentType: "full-time",
    description: "",
    responsibilities: [""],
    requirements: [""],
    niceToHave: [""],
    salaryRange: "",
    equity: true,
    benefits: ["Health insurance", "401(k) matching", "Unlimited PTO"],
    featured: false,
    isActive: true,
    postedDate: new Date().toISOString(),
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (job) {
      setFormData(job);
    }
  }, [job, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      // Auto-generate slug if empty
      const slugToUse =
        formData.slug ||
        formData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

      const dataToSubmit = {
        ...formData,
        slug: slugToUse,
        responsibilities: formData.responsibilities.filter((r: string) =>
          r.trim()
        ),
        requirements: formData.requirements.filter((r: string) => r.trim()),
        niceToHave: formData.niceToHave.filter((r: string) => r.trim()),
      };

      if (job?._id) {
        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/admin/jobs/${job._id}`,
          dataToSubmit,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/admin/jobs`,
          dataToSubmit,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      onSave();
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save job");
    } finally {
      setSubmitting(false);
    }
  };

  const addArrayItem = (field: string) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const updateArrayItem = (field: string, index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray,
    });
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_: any, i: number) => i !== index),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {job ? "Edit Job Posting" : "Create New Job Posting"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Senior Cloud Security Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subsidiary *
              </label>
              <select
                value={formData.subsidiary}
                onChange={(e) =>
                  setFormData({ ...formData, subsidiary: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Quorix">Quorix</option>
                <option value="AxionTrust">AxionTrust</option>
                <option value="Dern">Dern</option>
                <option value="Board3">Board3</option>
                <option value="SentryOne ID">SentryOne ID</option>
                <option value="EdgeRP">EdgeRP</option>
                <option value="AxionOre Portfolio">AxionOre Portfolio</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <input
                type="text"
                required
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Engineering"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., San Francisco, CA / Remote"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location Type *
              </label>
              <select
                value={formData.locationType}
                onChange={(e) =>
                  setFormData({ ...formData, locationType: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Job description and overview"
            />
          </div>

          {/* Responsibilities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Responsibilities
            </label>
            {formData.responsibilities.map((resp: string, idx: number) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) =>
                    updateArrayItem("responsibilities", idx, e.target.value)
                  }
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Responsibility"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("responsibilities", idx)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("responsibilities")}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              + Add Responsibility
            </button>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requirements
            </label>
            {formData.requirements.map((req: string, idx: number) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) =>
                    updateArrayItem("requirements", idx, e.target.value)
                  }
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Requirement"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("requirements", idx)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem("requirements")}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              + Add Requirement
            </button>
          </div>

          {/* Salary & Options */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <input
                type="text"
                value={formData.salaryRange}
                onChange={(e) =>
                  setFormData({ ...formData, salaryRange: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., $180,000 - $250,000"
              />
            </div>

            <div className="flex items-end space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Featured</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.equity}
                  onChange={(e) =>
                    setFormData({ ...formData, equity: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Equity</span>
              </label>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-[#EDF0F1] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Saving..." : job ? "Update Job" : "Create Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
