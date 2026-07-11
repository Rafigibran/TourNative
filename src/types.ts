export interface PricingPlan {
  id: 'basic' | 'pro' | 'enterprise';
  name: string;
  price: number; // monthly rate
  priceYearly: number; // yearly rate per month
  description: string;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  techDetails: {
    hosting: string;
    domain: string;
    bandwidth: string;
    adminAccounts: string;
    ssl: string;
    seoOptimization: string;
    bookingAutomation: string;
    paymentGateway: string;
  };
  recommendedFor: string;
}

export interface TravelTemplate {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  featuresList: string[];
  demoPages: string[];
}

export interface WebFeature {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string; // references lucide icons
  visualMetric: string; // e.g., "99.9% Uptime", "< 1s Load Time"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  metrics: string; // e.g. "Omset naik 150%"
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
