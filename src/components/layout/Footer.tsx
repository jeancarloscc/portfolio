import { Brain } from 'lucide-react';
import { colors } from '../../constants/theme';

interface FooterProps {
  name: string;
}

/**
 * Footer com informações de copyright
 */
export function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: colors.border.light }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="w-5 h-5" style={{ color: colors.primary }} />
            <span className="font-medium" style={{ color: colors.text.primary }}>
              {name}
            </span>
          </div>
          <p className="text-sm" style={{ color: colors.text.secondary }}>
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
