import { Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Star, GitFork, Calendar } from 'lucide-react';
import { colors, transitions } from '../../constants/theme';
import { StatusBadge, TechBadge } from '../common/Badges';
import type { DevProject } from '../../types';

interface DevProjectCardProps {
  project: DevProject;
}

/**
 * Fallback quando não há imagem do projeto
 */
function FallbackImage() {
  return (
    <div
      className="w-full h-40 md:h-48 rounded-md flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #fafafa 100%)' }}
    >
      <Github className="w-10 h-10" style={{ color: colors.primary, opacity: 0.35 }} />
    </div>
  );
}

/**
 * Card para projetos de desenvolvimento (GitHub)
 */
export function DevProjectCard({ project }: DevProjectCardProps) {
  const {
    title,
    description,
    longDescription,
    technologies = [],
    github,
    demo,
    image,
    stars,
    forks,
    year,
    status,
    highlights = [],
  } = project;

  const onOpen = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`border-none shadow-sm hover:shadow-md ${transitions.card}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3 mb-2">
          <CardTitle className="text-xl" style={{ color: colors.text.primary }}>
            {title}
          </CardTitle>
          {year && (
            <Badge variant="outline" className="shrink-0" style={{ borderColor: colors.secondary, color: colors.secondary }}>
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {year}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {status && <StatusBadge status={status as 'Concluído' | 'Em andamento'} />}
          {stars != null && (
            <Badge variant="outline" className="gap-1" style={{ borderColor: colors.border.light, color: colors.text.secondary }}>
              <Star className="w-3.5 h-3.5" /> {stars}
            </Badge>
          )}
          {forks != null && (
            <Badge variant="outline" className="gap-1" style={{ borderColor: colors.border.light, color: colors.text.secondary }}>
              <GitFork className="w-3.5 h-3.5" /> {forks}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Imagem */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-40 md:h-48 object-cover rounded-md mb-4 border"
            style={{ borderColor: colors.border.accent }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.innerHTML = '<div class="w-full h-40 md:h-48 rounded-md flex items-center justify-center" style="background: linear-gradient(135deg, #f0f4ff 0%, #fafafa 100%);"><svg class="w-10 h-10" style="color: #4169E1; opacity: 0.35;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></div>';
                parent.insertBefore(fallback.firstChild!, target);
              }
            }}
          />
        ) : (
          <FallbackImage />
        )}

        {/* Descrição */}
        {(description || longDescription) && (
          <p className="text-base mb-4" style={{ color: colors.text.secondary }}>
            {description || longDescription}
          </p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="mb-4 space-y-1">
            {highlights.slice(0, 3).map((h, idx) => (
              <li key={idx} className="text-sm" style={{ color: colors.text.secondary }}>
                • {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tecnologias */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
          </div>
        )}

        {/* Ações */}
        <div className="flex items-center gap-3">
          {github && (
            <Button
              variant="outline"
              className="h-9"
              style={{ borderColor: colors.primary, color: colors.primary }}
              onClick={() => onOpen(github)}
            >
              <Github className="w-4 h-4 mr-2" /> Código
            </Button>
          )}
          {demo && (
            <Button className="h-9" style={{ backgroundColor: colors.primary }} onClick={() => onOpen(demo)}>
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
