import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Chip } from '../common/Chip';
import {
  COLLAPSED_COUNT,
  PUBLICATION_TABS,
  filterPublications,
  visibleCount,
  type PublicationTab,
} from '../../lib/portfolio';
import type { Publication } from '../../types';

interface PublicationListProps {
  publications: Publication[];
}

/**
 * Lista compacta de publicações com filtro por categoria.
 */
export function PublicationList({ publications }: PublicationListProps) {
  const [tab, setTab] = useState<PublicationTab>('all');
  const [expanded, setExpanded] = useState(false);

  const filtered = filterPublications(publications, tab);
  const shown = filtered.slice(0, visibleCount(filtered.length, expanded));

  const selectTab = (next: PublicationTab) => {
    setTab(next);
    setExpanded(false);
  };

  return (
    <div>
      <div role="tablist" aria-label="Filtrar publicações" className="flex flex-wrap gap-2 mb-6">
        {PUBLICATION_TABS.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            id={`pub-tab-${id}`}
            aria-selected={tab === id}
            aria-controls="pub-list"
            onClick={() => selectTab(id)}
            className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
              tab === id
                ? 'bg-brand-strong text-white'
                : 'border border-line text-ink-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul id="pub-list" role="tabpanel" aria-labelledby={`pub-tab-${tab}`} className="flex flex-col gap-3">
        {shown.map((pub) => (
          <li
            key={pub.id}
            className="bg-surface border border-line rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
          >
            <div className="min-w-0">
              <h4 className="font-medium leading-snug">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-soft transition-colors"
                  >
                    {pub.title}
                    <ArrowUpRight className="inline w-4 h-4 ml-1 text-brand-soft" aria-hidden="true" />
                  </a>
                ) : (
                  pub.title
                )}
              </h4>
              <p className="text-ink-muted text-sm mt-1">{pub.authors}</p>
              <p className="text-ink-muted text-sm italic">{pub.venue}</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <span className="font-display text-sm text-ink-muted">{pub.year}</span>
              {pub.qualis && <Chip>Qualis {pub.qualis}</Chip>}
            </div>
          </li>
        ))}
      </ul>

      {filtered.length > COLLAPSED_COUNT && (
        <button
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="pub-list"
          className="mt-4 text-sm text-brand-soft hover:text-ink transition-colors"
        >
          {expanded ? 'Mostrar menos' : `Ver todas as ${filtered.length} publicações`}
        </button>
      )}
    </div>
  );
}
