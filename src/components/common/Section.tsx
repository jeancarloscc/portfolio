import type { ReactNode } from 'react';
import type { SectionId } from '../../types';

interface SectionProps {
  id: SectionId;
  kicker: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Seção padrão da página: kicker em azul-claro, título opcional e conteúdo centralizado.
 */
export function Section({ id, kicker, title, children, className = '' }: SectionProps) {
  const kickerId = `${id}-kicker`;
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={title ? titleId : kickerId} className={className}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p id={kickerId} className="text-sky text-xs uppercase tracking-widest font-medium mb-3">
          {kicker}
        </p>
        {title && (
          <h2 id={titleId} className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-10">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
