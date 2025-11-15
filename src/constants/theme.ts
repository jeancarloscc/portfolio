// ============================================
// TEMA E CORES DO PORTFÓLIO
// ============================================

export const colors = {
  primary: '#4169E1',      // Azul principal
  secondary: '#B281AB',    // Roxo secundário
  accent: '#898FAE',       // Cinza/roxo para textos
  text: {
    primary: '#1a1a1a',    // Texto principal
    secondary: '#898FAE',   // Texto secundário
    muted: '#B281AB',      // Texto muted
  },
  background: {
    white: '#ffffff',
    light: '#fafafa',
    accent: '#f0f4ff',     // Azul claro
  },
  status: {
    success: '#2e7d32',
    successBg: '#e8f5e9',
    info: '#4169E1',
    infoBg: '#f0f4ff',
  },
  border: {
    light: '#e5e7eb',
    accent: '#f3f4f6',
  },
} as const;

// ============================================
// ESPAÇAMENTOS E TAMANHOS
// ============================================

export const spacing = {
  section: {
    padding: 'py-20 px-6',
    marginBottom: 'mb-12',
  },
  card: {
    gap: 'gap-6',
  },
} as const;

// ============================================
// TRANSIÇÕES E ANIMAÇÕES
// ============================================

export const transitions = {
  card: 'transition-all hover:-translate-y-1',
  shadow: 'transition-shadow',
  scale: 'transition-all hover:scale-105',
  colors: 'transition-colors hover:opacity-70',
} as const;

// ============================================
// BREAKPOINTS (Tailwind padrão)
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// CONFIGURAÇÕES DA APLICAÇÃO
// ============================================

export const appConfig = {
  maxWidth: 'max-w-7xl',
  navigation: {
    links: [
      { id: 'home', label: 'Início' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Projetos' },
      { id: 'dev-projects', label: 'Dev (GitHub)' },
      { id: 'publications', label: 'Publicações' },
      { id: 'experience', label: 'Experiência' },
    ] as const,
  },
} as const;
