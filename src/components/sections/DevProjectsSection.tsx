import { Github } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { DevProjectCard } from '../cards/DevProjectCard';
import { colors } from '../../constants/theme';
import type { DevProject } from '../../types';

interface DevProjectsSectionProps {
  devProjects: DevProject[];
}

/**
 * Seção de Projetos de Desenvolvimento (GitHub)
 */
export function DevProjectsSection({ devProjects }: DevProjectsSectionProps) {
  return (
    <SectionContainer id="dev-projects">
      <SectionHeader icon={Github} title="Projetos de Desenvolvimento (GitHub)" />

      {devProjects.length === 0 ? (
        <Card className="border-dashed border-2">
          <CardContent className="py-10 text-center">
            <p className="mb-2" style={{ color: colors.text.secondary }}>
              Nenhum projeto cadastrado ainda em <code>public/data/dev-projects.json</code>.
            </p>
            <p className="text-sm" style={{ color: colors.text.muted }}>
              Adicione seus projetos desenvolvidos (repositórios do GitHub) com título, tecnologias e links.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {devProjects
            .slice()
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((project) => (
              <DevProjectCard key={project.id ?? project.title} project={project} />
            ))}
        </div>
      )}
    </SectionContainer>
  );
}
