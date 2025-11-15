# Portfolio - Jean Carlos

Portfólio profissional totalmente estático desenvolvido com React + TypeScript + Vite, pronto para GitHub Pages! 🚀

## 📁 Estrutura do Projeto

```
portfolio/
├── src/                   # Frontend React
│   ├── components/        # Componentes React
│   │   └── ui/           # Componentes UI (shadcn/ui - 46 componentes!)
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Serviços (busca dados JSON)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Entry point
├── public/               # Arquivos estáticos
│   ├── data/            # ⭐ Dados em JSON (seu conteúdo!)
│   │   ├── personal-info.json
│   │   ├── education.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── publications.json
│   │   └── experience.json
│   └── images/          # Imagens do portfólio
└── backend/             # [LEGADO] Não usado no GitHub Pages
```

## 🚀 Tecnologias

### Frontend
- ⚛️ React 19 + TypeScript
- ⚡ Vite (Build tool ultrarrápido)
- 🎨 TailwindCSS v4 (Estilização moderna)
- 🧩 shadcn/ui (46 componentes UI premium)
- 🛣️ React Router (Roteamento)
- 🌐 Fetch API (Busca dados JSON estáticos)

### Deploy
- 📦 **GitHub Pages** - Hospedagem gratuita e simples
- 🤖 **GitHub Actions** - CI/CD automático
- 📄 **JSON estático** - Sem necessidade de backend!

## 📚 Documentação

Este projeto possui documentação completa e organizada:

- 📖 **[QUICKSTART.md](./QUICKSTART.md)** - Guia rápido de início (5 minutos)
- 🏛️ **[STRUCTURE.md](./STRUCTURE.md)** - Arquitetura detalhada do projeto
- 🧩 **[COMPONENTS.md](./COMPONENTS.md)** - Guia completo dos 46 componentes UI
- 📋 **[SUMMARY.md](./SUMMARY.md)** - Sumário da reorganização do projeto
- 📅 **[CHANGELOG.md](./CHANGELOG.md)** - Histórico de versões e mudanças
- 📚 **[INDEX.md](./INDEX.md)** - Índice completo da documentação
- 🚀 **[DEPLOY.md](./DEPLOY.md)** - Guia de deploy em múltiplas plataformas
- 📝 **[public/data/README.md](./public/data/README.md)** - Como editar seus dados

**👉 Novo no projeto? Comece com o [QUICKSTART.md](./QUICKSTART.md)!**

## ⚡ Início Rápido

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# http://localhost:5173
```

Pronto! Seu portfólio está rodando localmente! 🎉

## ✏️ Personalize Seu Portfólio

Todos os dados do seu portfólio estão em arquivos JSON simples em `public/data/`:

```bash
public/data/
├── personal-info.json   # 👤 Seu nome, título, contatos
├── education.json       # 🎓 Formação acadêmica
├── skills.json          # 💪 Habilidades técnicas
├── projects.json        # 🚀 Seus projetos
├── publications.json    # 📝 Artigos publicados
└── experience.json      # 💼 Experiências profissionais
```

### Como Editar

1. **Abra o arquivo JSON que deseja modificar**
   ```bash
   code public/data/personal-info.json
   ```

2. **Edite os dados** (veja o [guia completo](public/data/README.md))

3. **Salve e recarregue a página** - as mudanças aparecem instantaneamente!

📖 **Guia detalhado:** [`public/data/README.md`](public/data/README.md)

## 🏗️ Build de Produção

```bash
# Criar build otimizado
npm run build

# Testar o build localmente
npm run preview
```

O build estará em `dist/` pronto para deploy! 📦

## 🚀 Deploy no GitHub Pages

### Método 1: Script Automático (Recomendado)

```bash
# Execute o script de deploy
./deploy.sh
```

### Método 2: Manual

```bash
# 1. Crie um repositório no GitHub
# https://github.com/new

# 2. Inicialize o Git e faça push
git init
git add .
git commit -m "Initial commit: Portfolio estático"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/portfolio.git
git push -u origin main

# 3. Ative o GitHub Pages
# Settings → Pages → Source: GitHub Actions
```

🎉 **Pronto!** Seu portfólio estará online em `https://SEU_USUARIO.github.io/portfolio/`

### Atualizações Futuras

```bash
# 1. Edite seus dados JSON
# 2. Commit e push
git add .
git commit -m "Atualiza dados do portfólio"
git push

# 3. GitHub Actions faz o resto automaticamente! 🤖
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build local
npm run lint     # Executa linter
```

## 🌐 Outras Opções de Deploy

Embora este projeto esteja otimizado para GitHub Pages, você também pode fazer deploy em:

- **Vercel** - `vercel --prod`
- **Netlify** - Arraste a pasta `dist/` no site
- **Cloudflare Pages** - Conecte seu repositório
- **Firebase Hosting** - `firebase deploy`

📚 **Guia completo:** [DEPLOY.md](./DEPLOY.md)

## 🔧 Tecnologias Detalhadas

### Frontend Stack
- **React 19.2.0** - Biblioteca UI com novos hooks
- **TypeScript** - Type safety e melhor DX
- **Vite 7.2.2** - Build tool de próxima geração
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Router DOM** - Roteamento client-side
- **Lucide React** - Ícones modernos e leves

### UI Components (shadcn/ui)
46 componentes premium incluídos:
- Accordion, Alert Dialog, Avatar, Badge, Button
- Calendar, Card, Carousel, Checkbox, Command
- Context Menu, Dialog, Drawer, Dropdown Menu
- Form, Hover Card, Input, Label, Menubar
- Navigation Menu, Pagination, Popover, Progress
- Radio Group, Resizable, Scroll Area, Select
- Separator, Sheet, Skeleton, Slider, Switch
- Table, Tabs, Textarea, Toast, Toggle, Tooltip
- E muito mais!

### Build & Dev Tools
- **PostCSS** - Processamento CSS avançado
- **ESLint** - Linting JavaScript/TypeScript
- **Autoprefixer** - Prefixos CSS automáticos

## 🎨 Personalização

### Temas e Estilos

Edite `src/index.css` para customizar cores, tipografia e temas:

```css
@theme {
  --color-primary: your-color;
  --font-sans: your-font;
}
```

### Adicionar Novos Componentes

```bash
# shadcn/ui oferece mais componentes!
npx shadcn@latest add [component-name]
```

Veja todos em: https://ui.shadcn.com/docs/components

## 📝 Estrutura de Dados

### Exemplo: `personal-info.json`

```json
{
  "name": "Seu Nome",
  "title": "Seu Cargo/Título",
  "description": "Breve descrição sobre você",
  "email": "seu@email.com",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seu-usuario",
  "location": "Sua Cidade, País"
}
```

### Exemplo: `projects.json`

```json
[
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição do projeto",
    "technologies": ["Tech 1", "Tech 2"],
    "github": "https://github.com/...",
    "demo": "https://demo.com",
    "image": "/images/projects/projeto.png",
    "order": 1
  }
]
```

📖 **Documentação completa:** [`public/data/README.md`](public/data/README.md)

## 🔒 Segurança

Este portfólio é 100% estático, sem servidor ou banco de dados. Isso significa:

✅ **Sem vulnerabilidades de servidor**  
✅ **Sem ataques de injeção SQL**  
✅ **Rápido e seguro**  
✅ **Hospedagem gratuita no GitHub Pages**

## 🐛 Troubleshooting

### Problema: Página em branco no GitHub Pages

**Solução:** Verifique se o `base` no `vite.config.ts` está correto:

```typescript
export default defineConfig({
  base: '/portfolio/', // deve ser o nome do seu repositório
})
```

### Problema: Dados não aparecem

**Solução:** Verifique se os arquivos JSON estão em `public/data/` e são válidos:

```bash
# Valide o JSON
cat public/data/personal-info.json | json_pp
```

### Problema: Erro de compilação TypeScript

**Solução:** Verifique seus imports e tipos:

```bash
npm run lint
```

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📧 Contato

Jean Carlos - [@seu-twitter](https://twitter.com/seu-twitter)

Link do Projeto: [https://github.com/seu-usuario/portfolio](https://github.com/seu-usuario/portfolio)

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐
