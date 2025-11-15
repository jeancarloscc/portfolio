# 🎨 Portfólio - Arquitetura Profissional

## 📋 Visão Geral

Projeto totalmente **refatorado** seguindo as melhores práticas de desenvolvimento front-end profissional. A aplicação foi modularizada, tipada e otimizada para manutenibilidade e escalabilidade.

## 🏗️ Estrutura do Projeto

```
src/
├── types/                      # 📦 Definições de tipos TypeScript
│   └── index.ts               # Todos os tipos do projeto
│
├── constants/                  # 🎨 Configurações e constantes
│   ├── theme.ts               # Cores, espaçamentos, transições
│   └── config.ts              # Config da API e mensagens
│
├── services/                   # 🌐 Camada de serviços/API
│   └── api.ts                 # Serviço de dados com retry e tipagem
│
├── hooks/                      # 🪝 Custom hooks reutilizáveis
│   ├── usePortfolioData.ts    # Hook para carregar dados
│   └── useScrollNavigation.ts # Hook para navegação com scroll spy
│
├── lib/                        # 🛠️ Utilitários
│   └── utils.ts               # Funções auxiliares (slugify, debounce, etc)
│
├── components/                 # 🧩 Componentes React
│   ├── common/                # Componentes comuns reutilizáveis
│   │   ├── SectionHeader.tsx  # Cabeçalhos de seção
│   │   ├── States.tsx         # Loading e Error states
│   │   └── Badges.tsx         # Badges customizados
│   │
│   ├── layout/                # Componentes de layout
│   │   ├── Header.tsx         # Header com navegação
│   │   └── Footer.tsx         # Footer
│   │
│   ├── sections/              # Seções da página
│   │   ├── HeroSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── DevProjectsSection.tsx
│   │   ├── PublicationsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── cards/                 # Cards especializados
│   │   └── DevProjectCard.tsx
│   │
│   └── ui/                    # Componentes UI base (shadcn)
│       └── ...
│
├── pages/                      # 📄 Páginas da aplicação
│   └── Home.tsx               # Página principal refatorada
│
├── index.ts                    # 📤 Exports centralizados
├── App.tsx                     # 🚀 Componente raiz
└── main.tsx                    # ⚡ Entry point
```

## ✨ Melhorias Implementadas

### 🎯 Arquitetura

- ✅ **Separação de Concerns**: UI, lógica e dados separados
- ✅ **Componentização**: Componentes pequenos e reutilizáveis
- ✅ **Custom Hooks**: Lógica compartilhada extraída
- ✅ **Atomic Design**: Hierarquia clara de componentes

### 📘 TypeScript

- ✅ **100% TypeScript**: Todos os arquivos convertidos
- ✅ **Tipos Completos**: Interfaces para todos os dados
- ✅ **Type Safety**: Imports de tipos com `import type`
- ✅ **Inferência**: TypeScript aproveita inferência onde possível

### 🎨 Design System

- ✅ **Theme Centralizado**: Cores e estilos em constants
- ✅ **Componentes Reutilizáveis**: Badges, Headers, States
- ✅ **Consistência Visual**: Estilos padronizados

### ⚡ Performance

- ✅ **Code Splitting**: Imports dinâmicos onde necessário
- ✅ **Memoization**: React.memo em componentes pesados
- ✅ **Optimistic Updates**: Loading states eficientes
- ✅ **Scroll Spy**: Navegação inteligente com IntersectionObserver

### 🔧 Manutenibilidade

- ✅ **DRY**: Sem repetição de código
- ✅ **Single Responsibility**: Cada componente faz uma coisa
- ✅ **Documentação**: Comentários JSDoc em funções
- ✅ **Organização**: Estrutura de pastas lógica

## 🚀 Como Usar

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📚 Guia de Componentes

### Custom Hooks

#### `usePortfolioData()`
Gerencia o carregamento de todos os dados do portfólio.

```tsx
const {
  personalInfo,
  education,
  skills,
  // ... outros dados
  isLoading,
  error,
} = usePortfolioData();
```

#### `useScrollNavigation()`
Gerencia navegação suave e detecta seção ativa.

```tsx
const { activeSection, scrollToSection } = useScrollNavigation();
```

### Componentes Comuns

#### `<SectionHeader>`
Cabeçalho padronizado para seções.

```tsx
<SectionHeader 
  icon={Code} 
  title="Habilidades" 
  subtitle="Minhas competências técnicas"
/>
```

#### `<LoadingState>` e `<ErrorState>`
Estados de loading e erro centralizados.

```tsx
{isLoading && <LoadingState />}
{error && <ErrorState message={error} onRetry={refetch} />}
```

#### Badges
Badges tipados e estilizados.

```tsx
<StatusBadge status="Em andamento" />
<YearBadge year="2024" />
<TechBadge tech="React" />
```

## 🎨 Personalização

### Cores

Edite `src/constants/theme.ts`:

```typescript
export const colors = {
  primary: '#4169E1',
  secondary: '#B281AB',
  // ...
};
```

### Navegação

Edite `src/constants/theme.ts`:

```typescript
export const appConfig = {
  navigation: {
    links: [
      { id: 'home', label: 'Início' },
      // Adicione mais links...
    ],
  },
};
```

## 🔄 Fluxo de Dados

```
1. usePortfolioData() → Carrega dados via API
2. api.ts → Faz fetch dos JSON files
3. Dados tipados → Passados para componentes
4. Componentes → Renderizam UI
```

## 📦 Dados

Todos os dados estão em `public/data/*.json`:

- `personal-info.json` - Informações pessoais
- `education.json` - Formação acadêmica
- `skills.json` - Habilidades técnicas
- `projects.json` - Projetos de pesquisa
- `dev-projects.json` - Projetos de desenvolvimento
- `publications.json` - Publicações científicas
- `experience.json` - Experiência profissional

## 🧪 Testes

Para adicionar testes:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## 📝 Convenções

### Nomenclatura

- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Hooks**: camelCase com prefixo `use` (`usePortfolioData.ts`)
- **Utils**: camelCase (`slugify`, `debounce`)
- **Constants**: UPPER_CASE ou camelCase dependendo do contexto

### Imports

```typescript
// Types sempre com 'import type'
import type { PersonalInfo } from '../types';

// Componentes e funções normalmente
import { Button } from '../components/ui/button';
```

### Estrutura de Componente

```typescript
import type { Props } from '../types';
import { useState } from 'react';
import { colors } from '../constants/theme';

interface ComponentProps {
  // Props tipadas
}

/**
 * Documentação JSDoc
 */
export function Component({ prop }: ComponentProps) {
  // Hooks
  // Estados
  // Handlers
  // Render
  return <div>...</div>;
}
```

## 🎯 Próximos Passos

- [ ] Adicionar testes unitários
- [ ] Implementar lazy loading de imagens
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar dark mode
- [ ] Adicionar i18n (internacionalização)
- [ ] Implementar PWA
- [ ] Adicionar analytics

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

## 📄 Licença

© 2024 - Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
