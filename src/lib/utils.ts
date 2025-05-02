import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines className strings with Tailwind CSS classes
 * This utility helps prevent class conflicts when using dynamic classNames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a human-readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Gets a YouTube video ID from a URL
 */
export function getVideoId(url: string): { platform: 'youtube' | null; id: string | null } {
  // YouTube
  const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const youtubeMatch = url.match(youtubeRegex);
  
  if (youtubeMatch && youtubeMatch[2].length === 11) {
    return { platform: 'youtube', id: youtubeMatch[2] };
  }
  
  return { platform: null, id: null };
}

/**
 * Generates an embedded video URL for YouTube
 */
export function getEmbedUrl(url: string): string | null {
  const { platform, id } = getVideoId(url);
  
  if (!platform || !id) return null;
  
  if (platform === 'youtube') {
    return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`;
  }
  
  return null;
}

/**
 * Formats a price with currency symbol
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

// types/index.ts
// Portfolio Types
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  client: string;
  year: number;
  description?: string;
}

export type PortfolioCategory = 'commercials' | 'films' | 'music' | 'events' | 'all';

// Client Types
export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

// Equipment Types
export interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
  specifications?: Record<string, string>;
}

export type EquipmentCategory = 'cameras' | 'lenses' | 'lighting' | 'audio' | 'stabilizers' | 'accessories' | 'all';

// Team Types
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  message: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// UI Component Types
export type ButtonVariant = 'default' | 'outline' | 'text';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}