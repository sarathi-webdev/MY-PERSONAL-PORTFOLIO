export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  tech: string[];
  github: string;
  live: string;
  responsibilities: string[];
  category: 'Full-Stack' | 'Frontend' | 'UI-UX';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location?: string;
  tech: string[];
  github?: string;
  live?: string;
  responsibilities: string[];
}

export interface AcademicRecord {
  degree: string;
  institution: string;
  period: string;
  score: string;
  coursework?: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[]; // level 1-100
}

export type AccentColor = 'sage' | 'blueGray' | 'beige';

export interface AccentConfig {
  name: AccentColor;
  hex: string;
  class: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}
