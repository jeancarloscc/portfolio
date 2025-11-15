import { useState, useEffect, useCallback } from 'react';
import type { SectionId } from '../types';

/**
 * Hook para gerenciar navegação e scroll suave entre seções
 * Rastreia a seção ativa automaticamente baseado no scroll
 */
export function useScrollNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  // Observer para detectar seção visível automaticamente
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.3, // 30% da seção visível
        rootMargin: '-80px 0px -80px 0px', // Compensar header fixo
      }
    );

    // Observar todas as seções
    const sections = [
      'home',
      'skills',
      'projects',
      'dev-projects',
      'publications',
      'experience',
      'contact',
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return {
    activeSection,
    scrollToSection,
  };
}
