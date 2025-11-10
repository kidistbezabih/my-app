import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AdminPermissions {
  manageBlogs: boolean;
  manageJobs: boolean;
  manageContacts: boolean;
  manageDemos: boolean;
  manageSettings: boolean;
  viewAnalytics: boolean;
  manageAdmins: boolean;
}

interface Admin {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  permissions: AdminPermissions;
}

interface AdminContextType {
  admin: Admin | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("adminToken")
  );
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const verifySession = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/admin/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAdmin(response.data.data.admin);
      } catch (error) {
        console.error("Session verification failed:", error);
        localStorage.removeItem("adminToken");
        setToken(null);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [token, API_BASE_URL]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/auth/login`, {
        username,
        password,
      });

      const { token: newToken, admin: adminData } = response.data.data;

      setToken(newToken);
      setAdmin(adminData);
      localStorage.setItem("adminToken", newToken);
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const logout = () => {
    if (token) {
      axios
        .post(
          `${API_BASE_URL}/admin/auth/logout`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .catch(console.error);
    }

    setToken(null);
    setAdmin(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        token,
        login,
        logout,
        isAuthenticated: !!admin,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
};
