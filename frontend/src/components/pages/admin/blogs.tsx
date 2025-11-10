import { BlogFormModal } from "@/components/admin/BlogFormModal";
import { useAdmin } from "@/contexts/admin-context";
import axios from "axios";
import {
  Calendar,
  Edit,
  Eye,
  FileText,
  Plus,
  Star,
  Trash2,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  publishedDate: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  status: "draft" | "published" | "archived";
  views: number;
  featured: boolean;
  readTime: number;
}

const AdminBlogsPage = () => {
  const { token } = useAdmin();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, [filter]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const url =
        filter === "all"
          ? `${import.meta.env.VITE_BACKEND_URL}/admin/blogs`
          : `${import.meta.env.VITE_BACKEND_URL}/admin/blogs?status=${filter}`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete blog "${title}"? This cannot be undone.`)) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/admin/blogs/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchBlogs();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete blog");
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-1">
            Create and manage blog posts for the AxionOre blog
          </p>
        </div>
        <button
          onClick={() => {
            setEditingBlog(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Blog Post
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#F2F4F5] rounded-lg shadow p-4">
        <div className="flex space-x-2">
          {["all", "published", "draft", "archived"].map((status) => (
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
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="bg-[#F2F4F5] rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center p-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No blog posts found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#EDF0F1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Published
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F2F4F5] divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-[#EDF0F1]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {blog.featured && (
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      )}
                      <div className="text-sm font-medium text-gray-900 truncate max-w-md">
                        {blog.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <div className="text-sm text-gray-900">{blog.author}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded capitalize ${
                        blog.status === "published"
                          ? "bg-green-100 text-green-800"
                          : blog.status === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Eye className="w-4 h-4 text-gray-400 mr-1" />
                      {blog.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(blog.publishedDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingBlog(blog as any);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Edit className="w-4 h-4 inline" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id, blog.title)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Blog Form Modal */}
      <BlogFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingBlog(null);
        }}
        onSave={() => {
          fetchBlogs();
        }}
        blog={editingBlog}
        token={token!}
      />
    </div>
  );
};

export default AdminBlogsPage;
