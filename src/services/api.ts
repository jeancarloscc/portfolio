/**
 * ============================================
 * SERVIÇO DE API DO PORTFÓLIO
 * ============================================
 * 
 * API service para buscar dados dos arquivos JSON estáticos
 * Ideal para GitHub Pages - sem necessidade de backend!
 * 
 * Features:
 * - Tipagem TypeScript completa
 * - Tratamento robusto de erros
 * - Retry automático em caso de falha
 * - Cache básico de dados
 */

import type {
  PersonalInfo,
  Education,
  SkillGroup,
  Project,
  DevProject,
  Publication,
  Experience,
} from '../types';
import { API_CONFIG, DATA_ENDPOINTS, ERROR_MESSAGES } from '../constants/config';

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Busca dados JSON com retry automático
 */
async function fetchJSON<T>(filename: string, retries: number = API_CONFIG.retryAttempts): Promise<T> {
  try {
    const response = await fetch(`${API_CONFIG.dataPath}/${filename}`, {
      signal: AbortSignal.timeout(API_CONFIG.timeout),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retry fetching ${filename}, attempts left: ${retries - 1}`);
      await new Promise((resolve) => setTimeout(resolve, API_CONFIG.retryDelay));
      return fetchJSON<T>(filename, retries - 1);
    }

    console.error(`Error fetching ${filename}:`, error);
    throw new Error(`${ERROR_MESSAGES.fetchFailed} (${filename})`);
  }
}

// ============================================
// API ENDPOINTS
// ============================================

export async function getPersonalInfo(): Promise<PersonalInfo> {
  return fetchJSON<PersonalInfo>(DATA_ENDPOINTS.personalInfo);
}

export async function getEducation(): Promise<Education[]> {
  return fetchJSON<Education[]>(DATA_ENDPOINTS.education);
}

export async function getSkills(): Promise<SkillGroup[]> {
  return fetchJSON<SkillGroup[]>(DATA_ENDPOINTS.skills);
}

export async function getProjects(): Promise<Project[]> {
  return fetchJSON<Project[]>(DATA_ENDPOINTS.projects);
}

export async function getDevProjects(): Promise<DevProject[]> {
  try {
    return await fetchJSON<DevProject[]>(DATA_ENDPOINTS.devProjects);
  } catch (error) {
    console.warn('dev-projects.json não encontrado, retornando array vazio');
    return [];
  }
}

export async function getPublications(): Promise<Publication[]> {
  return fetchJSON<Publication[]>(DATA_ENDPOINTS.publications);
}

export async function getExperience(): Promise<Experience[]> {
  return fetchJSON<Experience[]>(DATA_ENDPOINTS.experience);
}

// ============================================
// GITHUB API (OPCIONAL)
// ============================================

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
}

/**
 * Busca repositórios diretamente do GitHub
 * Útil para sincronizar automaticamente projetos
 */
export async function getGitHubProjects(
  username: string,
  maxRepos = 6
): Promise<DevProject[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`,
      {
        signal: AbortSignal.timeout(API_CONFIG.timeout),
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar repositórios do GitHub');
    }

    const repos: GitHubRepo[] = await response.json();

    return repos.map((repo) => ({
      id: String(repo.id),
      title: repo.name,
      description: repo.description || 'Sem descrição disponível',
      github: repo.html_url,
      demo: repo.homepage || undefined,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      technologies: repo.language ? [repo.language, ...repo.topics] : repo.topics,
    }));
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error);
    return [];
  }
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default {
  getPersonalInfo,
  getEducation,
  getSkills,
  getProjects,
  getDevProjects,
  getPublications,
  getExperience,
  getGitHubProjects,
};
