// ============================================
// TIPOS PRINCIPAIS DO PORTFÓLIO
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  focus?: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: 'Concluído' | 'Em andamento';
  description: string;
  coordinator: string;
  role: string;
  keywords?: string[];
  productions?: string;
}

export interface DevProject {
  id?: string;
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

export interface Publication {
  id: string;
  title: string;
  authors: string;
  type: string;
  category: 'Periódicos' | 'Capítulos de Livros' | 'Eventos Completos' | 'Eventos Resumos';
  venue: string;
  year: number;
  qualis?: string;
  classification?: string;
  keywords?: string[];
  issn?: string;
  isbn?: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

// ============================================
// TIPOS DE ESTADO E UI
// ============================================

export type SectionId = 
  | 'home' 
  | 'skills' 
  | 'projects' 
  | 'dev-projects' 
  | 'publications' 
  | 'experience' 
  | 'contact';

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface PortfolioData {
  personalInfo: PersonalInfo | null;
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  devProjects: DevProject[];
  publications: Publication[];
  experience: Experience[];
}
