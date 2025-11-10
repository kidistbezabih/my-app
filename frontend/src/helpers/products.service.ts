import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export interface IProduct {
  _id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  eyebrow: string;
  overview: string;
  founded: string;
  customerCount: string;
  marketPosition: Array<{
    analyst: string;
    recognition: string;
    year: string;
    details?: string;
  }>;
  leadership: Array<{
    name: string;
    role: string;
    bio: string;
    previousRoles?: string[];
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  coreCapabilities: Array<{
    title: string;
    description: string;
  }>;
  techDifferentiators: Array<{
    title: string;
    description: string;
  }>;
  customerStories: Array<{
    customer: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
    metrics?: string[];
  }>;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await axios.get(`${API_BASE_URL}/products`);
  return res.data.data;
};

export const fetchProductBySlug = async (slug: string): Promise<IProduct> => {
  const res = await axios.get(`${API_BASE_URL}/products/${slug}`);
  return res.data.data;
};
