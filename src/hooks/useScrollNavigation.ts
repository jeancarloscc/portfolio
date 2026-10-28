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
        // Ativa a seção que cruza a linha do meio da tela. Funciona também
        // para seções mais altas que a tela, que nunca chegariam a 30% visível.
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    // Observar todas as seções
    const sections: SectionId[] = ['home', 'about', 'research', 'code', 'journey', 'contact'];

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
