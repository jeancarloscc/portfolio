import type { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  tone?: 'brand' | 'ok';
}

const TONES = {
  brand: 'bg-brand/15 text-chip',
  ok: 'bg-ok-bg text-ok',
};

export function Chip({ children, tone = 'brand' }: ChipProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${TONES[tone]}`}>
      {children}
    </span>
  );
}
