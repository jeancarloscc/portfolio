import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { colors } from '../../constants/theme';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Cabeçalho reutilizável para todas as seções do portfólio
 */
export function SectionHeader({ icon: Icon, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-3" style={{ color: colors.primary }} />
        <h2 className="text-4xl font-light" style={{ color: colors.text.primary }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg" style={{ color: colors.text.secondary }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  background?: 'white' | 'light';
  className?: string;
}

/**
 * Container reutilizável para seções com padding e background consistentes
 */
export function SectionContainer({
  children,
  id,
  background = 'white',
  className = '',
}: SectionContainerProps) {
  const bgColor = background === 'light' ? colors.background.light : colors.background.white;

  return (
    <section id={id} className={`py-20 px-6 ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
