import { Brain } from 'lucide-react';
import { Button } from '../ui/button';
import { colors, appConfig } from '../../constants/theme';
import type { SectionId } from '../../types';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  name: string;
}

/**
 * Header fixo com navegação responsiva
 */
export function Header({ activeSection, onNavigate, name }: HeaderProps) {
  const navLinks = appConfig.navigation.links;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
          >
            <Brain className="w-6 h-6" style={{ color: colors.primary }} />
            <span className="font-semibold text-lg" style={{ color: colors.primary }}>
              {name}
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as SectionId)}
                className="text-sm transition-colors hover:opacity-70"
                style={{
                  color: activeSection === link.id ? colors.primary : colors.text.secondary,
                }}
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => onNavigate('contact')}
              className="text-sm px-4 py-2 rounded-md transition-all hover:opacity-90"
              style={{ backgroundColor: colors.primary, color: 'white' }}
            >
              Contato
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
