import { Section } from '../common/Section';
import { PublicationList } from '../research/PublicationList';
import { ResearchProjectCard } from '../research/ResearchProjectCard';
import { sortProjects } from '../../lib/portfolio';
import type { Project, Publication } from '../../types';

interface ResearchSectionProps {
  publications: Publication[];
  projects: Project[];
  extensionProjects: Project[];
}

export function ResearchSection({ publications, projects, extensionProjects }: ResearchSectionProps) {
  return (
    <Section id="research" kicker="Pesquisa" title="Publicações e projetos">
      <h3 className="font-display text-2xl font-semibold mb-6">Publicações</h3>
      <PublicationList publications={publications} />

      <h3 className="font-display text-2xl font-semibold mt-16 mb-6">Projetos de pesquisa</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {sortProjects(projects).map((project) => (
          <ResearchProjectCard key={project.id} project={project} />
        ))}
      </div>

      {extensionProjects.length > 0 && (
        <>
          <h3 className="font-display text-2xl font-semibold mt-16 mb-6">Projetos de extensão</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sortProjects(extensionProjects).map((project) => (
              <ResearchProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
