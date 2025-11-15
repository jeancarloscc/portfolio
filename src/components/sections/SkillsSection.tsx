import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { TechBadge } from '../common/Badges';
import { colors } from '../../constants/theme';
import type { SkillGroup } from '../../types';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

/**
 * Seção de Habilidades Técnicas
 */
export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;

  return (
    <SectionContainer id="skills">
      <SectionHeader icon={Code} title="Habilidades Técnicas" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <Card key={skillGroup.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg" style={{ color: colors.primary }}>
                {skillGroup.category}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <TechBadge key={idx} tech={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
