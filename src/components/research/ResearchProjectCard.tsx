import { Chip } from '../common/Chip';
import type { Project } from '../../types';

interface ResearchProjectCardProps {
  project: Project;
}

export function ResearchProjectCard({ project }: ResearchProjectCardProps) {
  return (
    <article className="bg-surface border border-line rounded-2xl p-5 sm:p-6">
      <Chip tone={project.status === 'Em andamento' ? 'ok' : 'brand'}>{project.status}</Chip>
      <h4 className="font-display text-lg font-semibold mt-3 leading-snug">{project.title}</h4>
      <p className="text-ink-muted text-sm mt-2">
        {project.institution} · {project.role} · {project.period}
      </p>

      <details className="mt-4">
        <summary className="text-sm text-brand-soft cursor-pointer hover:text-ink transition-colors">
          Ver mais
        </summary>
        <div className="mt-3 text-sm text-ink-muted leading-relaxed space-y-3">
          <p>{project.description}</p>
          <p>
            <span className="text-ink">Coordenação:</span> {project.coordinator}
          </p>
          {project.keywords && project.keywords.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <li key={keyword}>
                  <Chip>{keyword}</Chip>
                </li>
              ))}
            </ul>
          )}
          {project.productions != null && (
            <p>
              <span className="text-ink">Produções:</span> {project.productions}
            </p>
          )}
        </div>
      </details>
    </article>
  );
}
