// ============================================
// TIPOS PRINCIPAIS DO PORTFÓLIO
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  instagram?: string;
  lattes?: string;
  photo?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  focus?: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  institution: string;
  period: string;
  status: 'Concluído' | 'Em andamento';
  description: string;
  coordinator: string;
  role: string;
  keywords?: string[];
  productions?: number;
}

export interface DevProject {
  id: number;
  title: string;
  description?: string;
  longDescription?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  image?: string;
  stars?: number;
  forks?: number;
  year?: string;
  status?: string;
  highlights?: string[];
  order?: number;
}

export type PublicationCategory =
  | 'Periódicos'
  | 'Capítulos de Livros'
  | 'Eventos Completos'
  | 'Eventos Resumos';

export interface Publication {
  id: number;
  title: string;
  authors: string;
  type: string;
  category: PublicationCategory;
  venue: string;
  year: number;
  qualis?: string;
  classification?: string;
  keywords?: string[];
  issn?: string;
  isbn?: string;
  link?: string;
  order?: number;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface AboutPillar {
  id: string;
  icon: 'research' | 'engineering' | 'teaching';
  title: string;
  text: string;
  skillGroups: string[];
}

// ============================================
// TIPOS DE UI
// ============================================

export type SectionId = 'home' | 'about' | 'research' | 'code' | 'journey' | 'contact';
