# Arquitetura do Portfólio

Site de página única em React 19 + Vite + TypeScript + Tailwind CSS v4, publicado no GitHub Pages em `/portfolio/` pelo workflow `.github/workflows/deploy.yml`.

## Estrutura

```
src/
├── data/                  # Conteúdo do site (JSON) — edite aqui
│   ├── index.ts           # Importa os JSON no build e aplica os tipos
│   └── *.json             # Veja src/data/README.md
├── types/index.ts         # Tipos dos dados e ids das seções
├── lib/portfolio.ts       # Lógica pura: filtro de publicações, ordem dos projetos, linha do tempo
├── hooks/
│   └── useScrollNavigation.ts  # Rolagem suave e destaque da seção ativa no menu
├── components/
│   ├── common/            # Section (casca padrão das seções) e Chip
│   ├── layout/            # Header (com menu mobile) e Footer
│   ├── hero/              # HeroBackground: constelação e ondas em SVG
│   ├── research/          # PublicationList e ResearchProjectCard
│   └── sections/          # Uma seção por arquivo
├── pages/Home.tsx         # Monta a página na ordem das seções
├── index.css              # Tokens de cor e fonte (@theme) e estilos globais
└── main.tsx
```

## Seções

| Ordem | id | Componente | Dados |
|---|---|---|---|
| 1 | `home` | `HeroSection` | `personal-info.json` + totais de publicações, projetos e repositórios |
| 2 | `about` | `AboutSection` | `about.json` + `skills.json` |
| 3 | `research` | `ResearchSection` | `publications.json` + `projects.json` |
| 4 | `code` | `CodeSection` | `dev-projects.json` |
| 5 | `journey` | `JourneySection` | `education.json` + `experience.json` |
| 6 | `contact` | `ContactSection` | `personal-info.json` |

`extension-projects.json` ainda não é exibido.

## Dados

Os JSON são importados em tempo de build, então não há requisições nem tela de carregamento. Para atualizar o conteúdo, edite o JSON em `src/data/` e faça push. Links vazios (`""`) não aparecem no site.

## Visual

As cores e fontes ficam no bloco `@theme` de `src/index.css` e são usadas como classes Tailwind (`bg-night`, `text-ink-muted`, `bg-brand-strong`, `font-display`...). Regras:

- Texto sempre com contraste ≥ 4,5:1 (WCAG AA). Os valores já conferidos estão comentados no `@theme`.
- Texto branco só sobre `brand-strong` (`#2563eb`); `brand` (`#3b82f6`) é para bordas e desenhos.
- Animações respeitam `prefers-reduced-motion`.
- Links externos usam `<a target="_blank" rel="noopener noreferrer">`.

## Comandos

```bash
npm run dev      # servidor local em http://localhost:3000
npm run build    # build de produção em dist/
npm run preview  # testa o build localmente
npm run lint     # ESLint
```
