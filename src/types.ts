export type PageId =
  | 'home'
  | 'about'
  | 'cosmetic'
  | 'implants'
  | 'whitening'
  | 'invisalign'
  | 'emergency'
  | 'gallery'
  | 'reviews'
  | 'contact';

export interface TreatmentInfo {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  recovery: string;
  anxietyRelief: string[];
  benefits: string[];
  pricing: string;
  steps: {
    title: string;
    description: string;
  }[];
  seoTitle: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  text: string;
  beforeAnxiety: string;
  afterExperience: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pain' | 'cost' | 'treatments';
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  anxietyLevel: 'none' | 'mild' | 'severe';
  message: string;
}
