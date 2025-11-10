import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Blog {
  _id?: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  publishedDate?: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  readTime: number;
  featured: boolean;
  status: "draft" | "published" | "archived";
}

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  blog?: Blog | null;
  token: string;
}

export const BlogFormModal: React.FC<BlogFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  blog,
  token,
}) => {
  const [formData, setFormData] = useState<Blog>({
    slug: "",
    title: "",
    subtitle: "",
    author: "Dr. Sarah Chen",
    authorRole: "Chairman & CEO, AxionOre",
    category: "Cloud Security",
    tags: [],
    excerpt: "",
    content: "",
    readTime: 5,
    featured: false,
    status: "draft",
  });
  const [tagInput, setTagInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (blog) {
      setFormData(blog);
    } else {
      // Reset form
      setFormData({
        slug: "",
        title: "",
        subtitle: "",
        author: "Dr. Sarah Chen",
        authorRole: "Chairman & CEO, AxionOre",
        category: "Cloud Security",
        tags: [],
        excerpt: "",
        content: "",
        readTime: 5,
        featured: false,
        status: "draft",
      });
    }
  }, [blog, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      // Auto-generate slug from title if empty
      const slugToUse =
        formData.slug ||
        formData.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

      const dataToSubmit = {
        ...formData,
        slug: slugToUse,
        publishedDate: blog?.publishedDate || new Date().toISOString(),
      };

      if (blog?._id) {
        // Update existing blog
        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/admin/blogs/${blog._id}`,
          dataToSubmit,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        // Create new blog
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/admin/blogs`,
          dataToSubmit,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      onSave();
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save blog");
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {blog ? "Edit Blog Post" : "Create New Blog Post"}
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
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Zero-Trust Architecture in Cloud Environments"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="A brief description or hook"
            />
          </div>

          {/* Author & Category Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <select
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Dr. Sarah Chen">Dr. Sarah Chen</option>
                <option value="Marcus Rodriguez">Marcus Rodriguez</option>
                <option value="Jennifer Park">Jennifer Park</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Cloud Security">Cloud Security</option>
                <option value="Compliance">Compliance</option>
                <option value="Security">Security</option>
                <option value="DevOps">DevOps</option>
                <option value="Identity & Access">Identity & Access</option>
                <option value="Industry Insights">Industry Insights</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddTag())
                }
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add a tag and press Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              required
              rows={3}
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Brief summary (150-200 characters)"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content * (Markdown supported)
            </label>
            <textarea
              required
              rows={12}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="Write your blog post content here... (Markdown format)"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use Markdown: # Heading, **bold**, *italic*, - list items, etc.
            </p>
          </div>

          {/* Read Time & Options Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Time (minutes)
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={formData.readTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    readTime: parseInt(e.target.value) || 5,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as any,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Featured Post
                </span>
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
              {submitting ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
