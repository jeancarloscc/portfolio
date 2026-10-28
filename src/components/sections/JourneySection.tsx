import { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Section } from '../common/Section';
import { COLLAPSED_COUNT, visibleCount, type JourneyItem } from '../../lib/portfolio';

interface JourneySectionProps {
  items: JourneyItem[];
}

/**
 * Formação e experiência numa única linha do tempo.
 */
export function JourneySection({ items }: JourneySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const shown = items.slice(0, visibleCount(items.length, expanded));

  return (
    <Section id="journey" kicker="Trajetória" title="Formação e experiência">
      <ol id="journey-list" className="border-l border-brand/50 ml-3 flex flex-col gap-8">
        {shown.map((item) => {
          const Icon = item.kind === 'education' ? GraduationCap : Briefcase;
          const hasDetails = item.description || item.details.length > 0;

          return (
            <li key={item.id} className="relative pl-8">
              <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-night-2 border border-brand/60 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-brand-soft" aria-hidden="true" />
              </span>
              <p className="text-ink-muted text-sm">
                <span className="sr-only">{item.kind === 'education' ? 'Formação' : 'Experiência'}, </span>
                {item.period}
              </p>
              <h3 className="font-display text-lg font-semibold mt-1 leading-snug">{item.title}</h3>
              <p className="text-ink-muted">{item.place}</p>

              {hasDetails && (
                <details className="mt-2">
                  <summary className="text-sm text-brand-soft cursor-pointer hover:text-ink transition-colors">
                    Detalhes
                  </summary>
                  <div className="mt-2 text-sm text-ink-muted leading-relaxed space-y-2">
                    {item.description && <p>{item.description}</p>}
                    {item.details.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              )}
            </li>
          );
        })}
      </ol>

      {items.length > COLLAPSED_COUNT && (
        <button
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="journey-list"
          className="mt-8 text-sm text-brand-soft hover:text-ink transition-colors"
        >
          {expanded ? 'Mostrar menos' : 'Ver trajetória completa'}
        </button>
      )}
    </Section>
  );
}
