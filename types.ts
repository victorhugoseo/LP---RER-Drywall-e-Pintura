
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  isMain?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
