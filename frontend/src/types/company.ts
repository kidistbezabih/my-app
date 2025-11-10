export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
