// Type definitions

export type ProjectType = 'commercial' | 'residential' | 'custom';

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectType;
  image: string;
  location?: string;
  year?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  company?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDescription: string;
  timeline: string;
}
