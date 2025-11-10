import { Logo } from "@/components/shared/Logo";
import { useAdmin } from "@/contexts/admin-context";
import {
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  FileText,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { admin, logout, isAuthenticated } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/admin/login");
    return null;
  }

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      permission: "viewAnalytics",
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      permission: "viewAnalytics",
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: FileText,
      permission: "manageBlogs",
    },
    {
      name: "Jobs",
      href: "/admin/jobs",
      icon: Briefcase,
      permission: "manageJobs",
    },
    {
      name: "Contacts",
      href: "/admin/contacts",
      icon: Mail,
      permission: "manageContacts",
    },
    {
      name: "Demo Requests",
      href: "/admin/demos",
      icon: Calendar,
      permission: "manageDemos",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      permission: "manageSettings",
    },
  ];

  const filteredNavigation = navigation.filter((item) => {
    if (!admin) return false;
    return (admin.permissions as any)[item.permission];
  });

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b] transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Logo size="md" className="text-white" />
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin Info */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {admin?.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {admin?.fullName}
                </p>
                <p className="text-xs text-blue-300 truncate capitalize">
                  {admin?.role.replace("-", " ")}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {filteredNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-blue-100 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex-1 lg:ml-0 ml-4">
              <h2 className="text-xl font-bold text-gray-900">
                {navigation.find((item) => item.href === location.pathname)
                  ?.name || "Dashboard"}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View Site →
              </a>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
