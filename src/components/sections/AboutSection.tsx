import { Code2, FlaskConical, GraduationCap } from 'lucide-react';
import { Section } from '../common/Section';
import { Chip } from '../common/Chip';
import type { AboutPillar, SkillGroup } from '../../types';

interface AboutSectionProps {
  pillars: AboutPillar[];
  skills: SkillGroup[];
}

const ICONS = {
  research: FlaskConical,
  engineering: Code2,
  teaching: GraduationCap,
};

/**
 * Três pilares do perfil (pesquisa, engenharia e ensino) com as habilidades de cada um.
 */
export function AboutSection({ pillars, skills }: AboutSectionProps) {
  return (
    <Section id="about" kicker="O que eu faço" title="Pesquisa, engenharia e ensino">
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const Icon = ICONS[pillar.icon];
          const items = pillar.skillGroups.flatMap(
            (category) => skills.find((group) => group.category === category)?.items ?? [],
          );

          return (
            <article key={pillar.id} className="bg-surface border border-line rounded-2xl p-6">
              <Icon className="w-7 h-7 text-brand-soft" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold mt-4">{pillar.title}</h3>
              <p className="text-ink-muted mt-2 leading-relaxed">{pillar.text}</p>
              {items.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-5">
                  {items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
