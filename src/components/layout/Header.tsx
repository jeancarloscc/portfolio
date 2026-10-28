import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { SectionId } from '../../types';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  name: string;
}

const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: 'research', label: 'Pesquisa' },
  { id: 'code', label: 'Código' },
  { id: 'journey', label: 'Trajetória' },
];

const linkClass = (isActive: boolean) =>
  `transition-colors ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`;

/**
 * Header fixo com navegação responsiva
 */
export function Header({ activeSection, onNavigate, name }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section: SectionId) => {
    setIsMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-night/80 backdrop-blur-md border-b border-line">
      <nav aria-label="Navegação principal" className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span
              aria-hidden="true"
              className="w-7 h-7 rounded-lg bg-brand-strong text-white font-display font-semibold text-sm flex items-center justify-center"
            >
              {name.charAt(0)}
            </span>
            <span className="font-display font-semibold text-lg">{name}</span>
          </button>

          {/* Links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={linkClass(activeSection === link.id)}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavigate('contact')}
              className="bg-brand-strong text-white font-medium px-4 py-2 rounded-lg hover:bg-brand-strong/90 transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2 -mr-2 text-ink"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden flex flex-col pt-4 pb-2 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={`text-left py-2 ${linkClass(activeSection === link.id)}`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavigate('contact')}
              className="mt-2 bg-brand-strong text-white font-medium px-4 py-2 rounded-lg"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
