import { Briefcase, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { YearBadge } from '../common/Badges';
import { colors, transitions } from '../../constants/theme';
import type { Experience } from '../../types';

interface ExperienceSectionProps {
  experience: Experience[];
}

/**
 * Seção de Experiência Profissional
 */
export function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (experience.length === 0) return null;

  return (
    <SectionContainer background="light">
      <SectionHeader icon={Briefcase} title="Experiência Profissional" />

      <div className="space-y-6">
        {experience.map((exp) => (
          <Card key={exp.id} className={`border-none shadow-sm hover:shadow-md ${transitions.shadow}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2" style={{ color: colors.text.primary }}>
                    {exp.role}
                  </CardTitle>
                  <CardDescription className="text-base" style={{ color: colors.text.secondary }}>
                    {exp.organization}
                  </CardDescription>
                </div>
                <YearBadge year={exp.period} />
              </div>
            </CardHeader>

            <CardContent>
              <p className="mb-4" style={{ color: colors.text.secondary }}>
                {exp.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-medium" style={{ color: colors.primary }}>
                  Principais Realizações:
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm" style={{ color: colors.text.secondary }}>
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: colors.text.muted }} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
