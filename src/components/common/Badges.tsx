import { Badge } from '../ui/badge';
import { colors } from '../../constants/theme';

interface StatusBadgeProps {
  status: 'Concluído' | 'Em andamento';
  className?: string;
}

/**
 * Badge de status com cores automáticas
 */
export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const isInProgress = status === 'Em andamento';

  return (
    <Badge
      variant="secondary"
      className={className}
      style={{
        backgroundColor: isInProgress ? colors.status.successBg : colors.status.infoBg,
        color: isInProgress ? colors.status.success : colors.status.info,
      }}
    >
      {status}
    </Badge>
  );
}

interface YearBadgeProps {
  year: string | number;
  className?: string;
}

/**
 * Badge para exibir ano/período
 */
export function YearBadge({ year, className = '' }: YearBadgeProps) {
  return (
    <Badge variant="outline" className={className} style={{ borderColor: colors.secondary, color: colors.secondary }}>
      {year}
    </Badge>
  );
}

interface TechBadgeProps {
  tech: string;
  className?: string;
}

/**
 * Badge para tecnologias
 */
export function TechBadge({ tech, className = '' }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={`text-xs ${className}`}
      style={{ backgroundColor: colors.background.accent, color: colors.text.secondary }}
    >
      {tech}
    </Badge>
  );
}
