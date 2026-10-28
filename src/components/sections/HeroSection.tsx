import { Github } from 'lucide-react';
import { HeroBackground } from '../hero/HeroBackground';
import type { PersonalInfo, SectionId } from '../../types';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  stats: { publications: number; projects: number; repositories: number };
  onNavigate: (section: SectionId) => void;
}

const outlineLink =
  'inline-flex items-center gap-2 border border-line text-ink font-medium px-4 py-2.5 rounded-lg hover:border-brand-soft transition-colors';

/**
 * Topo: quem é, o que faz e números que dão credibilidade.
 */
export function HeroSection({ personalInfo, stats, onNavigate }: HeroSectionProps) {
  const numbers = [
    { value: stats.publications, label: 'publicações' },
    { value: stats.projects, label: 'projetos de pesquisa' },
    { value: stats.repositories, label: 'repositórios' },
  ];

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden bg-gradient-to-b from-night to-night-2"
    >
      <HeroBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-32 sm:pt-36 sm:pb-40 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <p className="text-sky text-xs uppercase tracking-widest font-medium mb-4">{personalInfo.title}</p>
          <h1 id="home-title" className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-ink mt-3 leading-snug">{personalInfo.tagline}</p>
          <p className="text-ink-muted mt-5 leading-relaxed max-w-xl">{personalInfo.description}</p>

          <ul className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
            {numbers.map(({ value, label }) => (
              <li key={label} className="flex flex-col">
                <span className="font-display text-3xl font-semibold">{value}</span>
                <span className="text-ink-muted text-sm">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onNavigate('research')}
              className="bg-brand-strong text-white font-medium px-5 py-2.5 rounded-lg hover:bg-brand-strong/90 transition-colors"
            >
              Ver pesquisa
            </button>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={outlineLink}>
              <Github className="w-4 h-4" aria-hidden="true" /> GitHub
            </a>
            {personalInfo.lattes && (
              <a href={personalInfo.lattes} target="_blank" rel="noopener noreferrer" className={outlineLink}>
                Lattes
              </a>
            )}
            {personalInfo.scholar && (
              <a href={personalInfo.scholar} target="_blank" rel="noopener noreferrer" className={outlineLink}>
                Google Scholar
              </a>
            )}
          </div>
        </div>

        {personalInfo.photo && (
          <div className="flex justify-center order-first md:order-none">
            <img
              src={personalInfo.photo}
              alt={`Foto de ${personalInfo.name}`}
              width={320}
              height={320}
              fetchPriority="high"
              decoding="async"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover ring-2 ring-brand ring-offset-4 ring-offset-night shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
