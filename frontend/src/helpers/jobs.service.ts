import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export interface IJob {
  _id: string;
  slug: string;
  title: string;
  subsidiary: string;
  department: string;
  location: string;
  locationType: "remote" | "hybrid" | "onsite";
  employmentType: "full-time" | "part-time" | "contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  salaryRange?: string;
  equity: boolean;
  benefits: string[];
  applyUrl?: string;
  contactEmail?: string;
  featured: boolean;
  isActive: boolean;
  postedDate: string;
  closingDate?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchJobs = async (params?: {
  subsidiary?: string;
  department?: string;
  featured?: boolean;
}): Promise<IJob[]> => {
  const queryParams = new URLSearchParams();
  if (params?.subsidiary) queryParams.append("subsidiary", params.subsidiary);
  if (params?.department) queryParams.append("department", params.department);
  if (params?.featured) queryParams.append("featured", "true");

  const url = `${API_BASE_URL}/jobs${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;
  const res = await axios.get(url);
  return res.data.data;
};

export const fetchJobBySlug = async (slug: string): Promise<IJob> => {
  const res = await axios.get(`${API_BASE_URL}/jobs/${slug}`);
  return res.data.data;
};
