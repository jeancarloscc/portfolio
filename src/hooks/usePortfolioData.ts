import { useState, useEffect } from 'react';
import type { PortfolioData, LoadingState } from '../types';
import * as api from '../services/api';

/**
 * Hook customizado para carregar todos os dados do portfólio
 * Gerencia estado de loading e erros de forma centralizada
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>({
    personalInfo: null,
    education: [],
    skills: [],
    projects: [],
    devProjects: [],
    publications: [],
    experience: [],
  });

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoadingState({ isLoading: true, error: null });

        const [
          personalData,
          educationData,
          skillsData,
          projectsData,
          publicationsData,
          experienceData,
          devProjectsData,
        ] = await Promise.all([
          api.getPersonalInfo(),
          api.getEducation(),
          api.getSkills(),
          api.getProjects(),
          api.getPublications(),
          api.getExperience(),
          api.getDevProjects(),
        ]);

        setData({
          personalInfo: personalData,
          education: educationData,
          skills: skillsData,
          projects: projectsData,
          publications: publicationsData,
          experience: experienceData,
          devProjects: devProjectsData || [],
        });

        setLoadingState({ isLoading: false, error: null });
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setLoadingState({
          isLoading: false,
          error: 'Erro ao carregar dados. Por favor, tente novamente.',
        });
      }
    };

    fetchAllData();
  }, []);

  return {
    ...data,
    ...loadingState,
    refetch: () => {
      setLoadingState({ isLoading: true, error: null });
    },
  };
}
