import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { Section } from '../common/Section';
import { Chip } from '../common/Chip';
import type { DevProject } from '../../types';

interface CodeSectionProps {
  projects: DevProject[];
  githubUrl: string;
}

const footerLink = 'inline-flex items-center gap-1.5 text-sm text-brand-soft hover:text-ink transition-colors';

/**
 * Repositórios do GitHub em cards compactos, sem imagem.
 */
export function CodeSection({ projects, githubUrl }: CodeSectionProps) {
  if (projects.length === 0) return null;

  const sorted = [...projects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Section id="code" kicker="Código" title="Repositórios no GitHub">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((project) => (
          <article
            key={project.id}
            className="bg-surface border border-line rounded-2xl p-5 sm:p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold leading-snug">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-soft transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.stars != null && (
                <span className="inline-flex items-center gap-1 text-sm text-ink-muted shrink-0">
                  <Star className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Estrelas:</span> {project.stars}
                </span>
              )}
            </div>

            {project.description && (
              <p className="text-ink-muted text-sm mt-2 leading-relaxed">{project.description}</p>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-4 mt-auto pt-5">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  <Github className="w-4 h-4" aria-hidden="true" /> Código
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-8 text-brand-soft hover:text-ink transition-colors"
      >
        Ver todos no GitHub <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </Section>
  );
}
