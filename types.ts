
import React from 'react'; // Added import for React types

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  sampleImages: string[];
  coverImage: string;
}

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string; // e.g., "Portraits", "Events", "Weddings"
}

export interface NavLinkItem {
  path: string;
  label: string;
}

export interface WhyChooseItem {
  // Updated icon type to use React.FC for better type compatibility
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  service: string;
}