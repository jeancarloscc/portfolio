import { useScrollNavigation } from '../hooks/useScrollNavigation';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { CodeSection } from '../components/sections/CodeSection';
import { ResearchSection } from '../components/sections/ResearchSection';
import { JourneySection } from '../components/sections/JourneySection';
import { buildJourney } from '../lib/portfolio';
import { ContactSection } from '../components/sections/ContactSection';
import {
  about,
  devProjects,
  education,
  experience,
  extensionProjects,
  personalInfo,
  projects,
  publications,
  skills,
} from '../data';

export default function Home() {
  const { activeSection, scrollToSection } = useScrollNavigation();

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} onNavigate={scrollToSection} name={personalInfo.name} />

      <main>
        <HeroSection
          personalInfo={personalInfo}
          stats={{ publications: publications.length, projects: projects.length, repositories: devProjects.length }}
          onNavigate={scrollToSection}
        />
        <AboutSection pillars={about} skills={skills} />
        <ResearchSection publications={publications} projects={projects} extensionProjects={extensionProjects} />
        <CodeSection projects={devProjects} githubUrl={personalInfo.github} />
        <JourneySection items={buildJourney(education, experience)} />
        <ContactSection personalInfo={personalInfo} />
      </main>

      <Footer name={personalInfo.name} />
    </div>
  );
}
