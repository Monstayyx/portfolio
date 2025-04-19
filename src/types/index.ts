export interface Project {
  id: number;
  title: string;
  period: string;
  organization: string;
  location?: string;
  description: string[];
  skills: string[];
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'language' | 'framework' | 'tool' | 'software';
}