import { Network, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { StatusBadge, YearBadge, TechBadge } from '../common/Badges';
import { colors, transitions } from '../../constants/theme';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
}

/**
 * Seção de Projetos de Pesquisa
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <SectionContainer id="projects" background="light">
      <SectionHeader icon={Network} title="Projetos" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className={`border-none shadow-sm hover:shadow-md ${transitions.card}`}>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl flex-1" style={{ color: colors.text.primary }}>
                  {project.title}
                </CardTitle>
                <YearBadge year={project.period} />
              </div>

              <div className="mb-2">
                <StatusBadge status={project.status} className="mr-2" />
                <span className="text-sm" style={{ color: colors.text.secondary }}>
                  {project.institution}
                </span>
              </div>

              <CardDescription className="text-base" style={{ color: colors.text.secondary }}>
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-4">
                <p className="text-sm mb-1" style={{ color: colors.primary }}>
                  <strong>Coordenador:</strong>{' '}
                  <span style={{ color: colors.text.secondary }}>{project.coordinator}</span>
                </p>
                <p className="text-sm mb-2" style={{ color: colors.primary }}>
                  <strong>Papel:</strong>{' '}
                  <span style={{ color: colors.text.secondary }}>{project.role}</span>
                </p>
              </div>

              {project.keywords && project.keywords.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
                    Palavras-chave:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, idx) => (
                      <TechBadge key={idx} tech={keyword} />
                    ))}
                  </div>
                </div>
              )}

              {project.productions && (
                <div className="pt-4 border-t" style={{ borderColor: colors.border.light }}>
                  <p className="text-sm" style={{ color: colors.text.muted }}>
                    <strong>Produções:</strong> {project.productions}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
