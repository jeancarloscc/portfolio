/**
 * ============================================
 * HOME PAGE - PORTFÓLIO PROFISSIONAL
 * ============================================
 * 
 * Página principal do portfólio totalmente refatorada
 * Seguindo as melhores práticas de React e TypeScript:
 * 
 * ✅ Componentes modulares e reutilizáveis
 * ✅ Custom hooks para lógica compartilhada
 * ✅ Tipagem TypeScript completa
 * ✅ Separação de concerns (UI, lógica, dados)
 * ✅ Constants centralizadas
 * ✅ Performance otimizada
 */

import { usePortfolioData } from '../hooks/usePortfolioData';
import { useScrollNavigation } from '../hooks/useScrollNavigation';
import { LoadingState, ErrorState } from '../components/common/States';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { EducationSection } from '../components/sections/EducationSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { DevProjectsSection } from '../components/sections/DevProjectsSection';
import { PublicationsSection } from '../components/sections/PublicationsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * Componente principal da Home
 */
export default function Home() {
  // Custom hooks para gerenciar estado e navegação
  const {
    personalInfo,
    education,
    skills,
    projects,
    devProjects,
    publications,
    experience,
    isLoading,
    error,
  } = usePortfolioData();

  const { activeSection, scrollToSection } = useScrollNavigation();

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Error state
  if (error) {
    return <ErrorState message={error} onRetry={() => window.location.reload()} />;
  }

  // Verificar se dados essenciais foram carregados
  if (!personalInfo) {
    return <ErrorState message="Dados não encontrados" />;
  }

  // Renderização principal
  return (
    <div className="min-h-screen bg-white">
      {/* Header fixo com navegação */}
      <Header 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        name={personalInfo.name} 
      />

      {/* Seção Hero/Apresentação */}
      <HeroSection 
        personalInfo={personalInfo} 
        onNavigate={scrollToSection} 
      />

      {/* Formação Acadêmica */}
      <EducationSection education={education} />

      {/* Habilidades Técnicas */}
      <SkillsSection skills={skills} />

      {/* Projetos de Pesquisa */}
      <ProjectsSection projects={projects} />

      {/* Projetos de Desenvolvimento (GitHub) */}
      <DevProjectsSection devProjects={devProjects} />

      {/* Publicações Científicas */}
      <PublicationsSection publications={publications} />

      {/* Experiência Profissional */}
      <ExperienceSection experience={experience} />

      {/* Contato */}
      <ContactSection personalInfo={personalInfo} />

      {/* Footer */}
      <Footer name={personalInfo.name} />
    </div>
  );
}
