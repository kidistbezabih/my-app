import { useAdmin } from "@/contexts/admin-context";
import { Save, Settings as SettingsIcon } from "lucide-react";

const AdminSettingsPage = () => {
  const { admin } = useAdmin();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage editable site content and configuration
        </p>
      </div>

      {/* Permission Check */}
      {!admin?.permissions.manageSettings ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-800">
            You don't have permission to manage site settings. Contact a
            super-admin.
          </p>
        </div>
      ) : (
        <div className="bg-[#F2F4F5] rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <SettingsIcon className="w-5 h-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">
              Editable Site Content
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Title
              </label>
              <input
                type="text"
                defaultValue="The Future of Enterprise Technology"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Main headline on the landing page hero section
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Subtitle
              </label>
              <textarea
                rows={3}
                defaultValue="AxionOre is a technology holding company that builds and scales the next generation of enterprise solutions."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Subtitle text below the main hero title
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CTA Button Text
              </label>
              <input
                type="text"
                defaultValue="Get a Demo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Text for the main call-to-action button
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="info@axionore.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Primary contact email displayed on the site
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Footer Copyright Text
              </label>
              <input
                type="text"
                defaultValue="© 2024 AxionOre. All rights reserved."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Copyright text in the footer
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Note: Settings functionality will be fully implemented in the
                next phase. This is a preview of the settings management
                interface.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettingsPage;
