import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { YearBadge } from '../common/Badges';
import { colors } from '../../constants/theme';
import type { Education } from '../../types';

interface EducationSectionProps {
  education: Education[];
}

/**
 * Seção de Formação Acadêmica
 */
export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <SectionContainer background="light">
      <SectionHeader icon={GraduationCap} title="Formação Acadêmica" />

      <div className="space-y-6">
        {education.map((edu) => (
          <Card key={edu.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2" style={{ color: colors.text.primary }}>
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-base" style={{ color: colors.text.secondary }}>
                    {edu.institution}
                  </CardDescription>
                </div>
                <YearBadge year={edu.period} />
              </div>
            </CardHeader>

            <CardContent>
              {edu.focus && (
                <p className="mb-2" style={{ color: colors.secondary }}>
                  <strong>Ênfase:</strong> {edu.focus}
                </p>
              )}
              <p style={{ color: colors.text.secondary }}>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
