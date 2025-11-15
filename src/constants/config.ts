// ============================================
// CONFIGURAÇÕES DA API
// ============================================

const BASE_PATH = import.meta.env.BASE_URL || '/';
export const DATA_PATH = `${BASE_PATH}data`;

export const API_CONFIG = {
  dataPath: DATA_PATH,
  timeout: 10000, // 10 segundos
  retryAttempts: 3,
  retryDelay: 1000, // 1 segundo
} as const;

// ============================================
// ENDPOINTS DE DADOS
// ============================================

export const DATA_ENDPOINTS = {
  personalInfo: 'personal-info.json',
  education: 'education.json',
  skills: 'skills.json',
  projects: 'projects.json',
  devProjects: 'dev-projects.json',
  publications: 'publications.json',
  experience: 'experience.json',
} as const;

// ============================================
// MENSAGENS DE ERRO
// ============================================

export const ERROR_MESSAGES = {
  fetchFailed: 'Erro ao carregar dados. Por favor, tente novamente.',
  networkError: 'Erro de conexão. Verifique sua internet.',
  notFound: 'Dados não encontrados.',
  generic: 'Algo deu errado. Tente novamente mais tarde.',
} as const;

// ============================================
// CATEGORIAS DE PUBLICAÇÕES
// ============================================

export const PUBLICATION_CATEGORIES = [
  'Periódicos',
  'Capítulos de Livros',
  'Eventos Completos',
  'Eventos Resumos',
] as const;

// ============================================
// STATUS DE PROJETOS
// ============================================

export const PROJECT_STATUS = {
  completed: 'Concluído',
  inProgress: 'Em andamento',
} as const;
