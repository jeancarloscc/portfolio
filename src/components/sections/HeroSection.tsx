import { Brain, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { colors, transitions } from '../../constants/theme';
import type { PersonalInfo, SectionId } from '../../types';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onNavigate: (section: SectionId) => void;
}

/**
 * Seção Hero/Apresentação principal
 */
export function HeroSection({ personalInfo, onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <div className="inline-block mb-4">
              <Badge
                variant="secondary"
                className="text-sm px-4 py-1"
                style={{ backgroundColor: colors.background.accent, color: colors.primary, border: 'none' }}
              >
                Inteligência Artificial
              </Badge>
            </div>

            <h1
              className="text-5xl md:text-6xl font-light mb-6"
              style={{ color: colors.text.primary, letterSpacing: '-0.02em' }}
            >
              {personalInfo.name}
            </h1>

            <h2 className="text-2xl font-light mb-6" style={{ color: colors.text.secondary }}>
              {personalInfo.title}
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: colors.text.secondary }}>
              {personalInfo.description}
            </p>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => onNavigate('contact')}
                className={transitions.scale}
                style={{ backgroundColor: colors.primary }}
              >
                Entre em Contato
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                onClick={() => onNavigate('projects')}
                variant="outline"
                className={transitions.scale}
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center">
            {personalInfo.photo ? (
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name}
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
                style={{ border: `4px solid ${colors.primary}` }}
              />
            ) : (
              <div
                className="w-80 h-80 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.background.accent }}
              >
                <Brain className="w-40 h-40" style={{ color: colors.primary, opacity: 0.5 }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
