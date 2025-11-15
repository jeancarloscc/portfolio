import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { SectionContainer, SectionHeader } from '../common/SectionHeader';
import { colors, transitions } from '../../constants/theme';
import type { PersonalInfo } from '../../types';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

/**
 * Seção de Contato
 */
export function ContactSection({ personalInfo }: ContactSectionProps) {
  return (
    <SectionContainer id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          icon={Mail}
          title="Contato"
          subtitle="Interessado em colaborações ou tem alguma pergunta? Entre em contato!"
          className="text-center flex flex-col items-center"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: colors.primary }} />
              <p className="text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                Email
              </p>
              <p className="text-base" style={{ color: colors.text.primary }}>
                {personalInfo.email}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: colors.primary }} />
              <p className="text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                Localização
              </p>
              <p className="text-base" style={{ color: colors.text.primary }}>
                {personalInfo.location}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <Button
            variant="outline"
            size="lg"
            className={transitions.scale}
            style={{ borderColor: colors.primary, color: colors.primary }}
            onClick={() => window.open(`https://${personalInfo.linkedin}`, '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            size="lg"
            className={transitions.scale}
            style={{ borderColor: colors.primary, color: colors.primary }}
            onClick={() => window.open(`https://${personalInfo.github}`, '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
