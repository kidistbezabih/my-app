import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export interface IBlog {
  _id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  publishedDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  coverImage?: string;
  metaDescription?: string;
  readTime: number;
  views: number;
  featured: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchBlogs = async (params?: {
  category?: string;
  tag?: string;
  featured?: boolean;
  limit?: number;
}): Promise<IBlog[]> => {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append("category", params.category);
  if (params?.tag) queryParams.append("tag", params.tag);
  if (params?.featured) queryParams.append("featured", "true");
  if (params?.limit) queryParams.append("limit", params.limit.toString());

  const url = `${API_BASE_URL}/blogs${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;
  const res = await axios.get(url);
  return res.data.data;
};

export const fetchBlogBySlug = async (slug: string): Promise<IBlog> => {
  const res = await axios.get(`${API_BASE_URL}/blogs/${slug}`);
  return res.data.data;
};

export const fetchBlogCategories = async (): Promise<string[]> => {
  const res = await axios.get(`${API_BASE_URL}/blogs/meta/categories`);
  return res.data.data;
};

export const fetchBlogTags = async (): Promise<string[]> => {
  const res = await axios.get(`${API_BASE_URL}/blogs/meta/tags`);
  return res.data.data;
};
