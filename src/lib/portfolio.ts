import type { Education, Experience, Project, Publication, PublicationCategory } from '../types';

export type PublicationTab = 'all' | 'journals' | 'chapters' | 'events';

export const PUBLICATION_TABS: { id: PublicationTab; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'journals', label: 'Periódicos' },
  { id: 'chapters', label: 'Capítulos' },
  { id: 'events', label: 'Eventos' },
];

const TAB_CATEGORIES: Record<Exclude<PublicationTab, 'all'>, PublicationCategory[]> = {
  journals: ['Periódicos'],
  chapters: ['Capítulos de Livros'],
  events: ['Eventos Completos', 'Eventos Resumos'],
};

/** Filtra pela aba e ordena por ano (desc); no empate, por `order` (sem `order` vai para o fim). */
export function filterPublications(pubs: Publication[], tab: PublicationTab): Publication[] {
  const filtered = tab === 'all' ? [...pubs] : pubs.filter((pub) => TAB_CATEGORIES[tab].includes(pub.category));
  return filtered.sort(
    (a, b) => b.year - a.year || (a.order ?? Infinity) - (b.order ?? Infinity),
  );
}

export const COLLAPSED_COUNT = 5;

export function visibleCount(total: number, expanded: boolean): number {
  return expanded || total <= COLLAPSED_COUNT ? total : COLLAPSED_COUNT;
}

export function isOngoing(period: string): boolean {
  return /atual|presente/i.test(period);
}

/** "Em andamento" primeiro, mantendo a ordem do JSON (sort é estável). */
export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort(
    (a, b) => Number(b.status === 'Em andamento') - Number(a.status === 'Em andamento'),
  );
}

export interface JourneyItem {
  kind: 'education' | 'experience';
  id: string;
  period: string;
  title: string;
  place: string;
  description: string;
  details: string[];
}

function years(period: string): number[] {
  return (period.match(/\d{4}/g) ?? []).map(Number);
}

/**
 * Junta formação e experiência numa linha do tempo.
 * Ordem: em andamento primeiro, depois ano final desc, ano inicial desc e a ordem original.
 */
export function buildJourney(education: Education[], experience: Experience[]): JourneyItem[] {
  const items: JourneyItem[] = [
    ...education.map((edu) => ({
      kind: 'education' as const,
      id: `education-${edu.id}`,
      period: edu.period,
      title: edu.degree,
      place: edu.institution,
      description: edu.description,
      details: edu.focus ? [edu.focus] : [],
    })),
    ...experience.map((exp) => ({
      kind: 'experience' as const,
      id: `experience-${exp.id}`,
      period: exp.period,
      title: exp.role,
      place: exp.organization,
      description: exp.description,
      details: exp.achievements,
    })),
  ];

  const sortKey = (item: JourneyItem) => {
    const found = years(item.period);
    const end = isOngoing(item.period) ? Infinity : (found.at(-1) ?? 0);
    return { end, start: found[0] ?? 0 };
  };

  return items
    .map((item, index) => ({ item, index, ...sortKey(item) }))
    .sort((a, b) => b.end - a.end || b.start - a.start || a.index - b.index)
    .map(({ item }) => item);
}
