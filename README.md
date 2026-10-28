# Portfolio - Jean Carlos

Portfólio profissional totalmente estático desenvolvido com React + TypeScript + Vite, pronto para GitHub Pages! 🚀

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── data/          # ⭐ Dados em JSON (seu conteúdo!)
│   ├── components/    # Seções, layout e componentes comuns
│   ├── lib/           # Lógica de ordenação e filtros
│   ├── pages/         # Home (monta a página)
│   └── index.css      # Cores e fontes do tema
└── public/
    └── images/        # Foto e imagens
```

Detalhes em [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🚀 Tecnologias

### Frontend
- ⚛️ React 19 + TypeScript
- ⚡ Vite (Build tool ultrarrápido)
- 🎨 TailwindCSS v4 (Estilização moderna)
- 🛣️ React Router (Roteamento)
- 📄 Dados em JSON importados no build

### Deploy
- 📦 **GitHub Pages** - Hospedagem gratuita e simples
- 🤖 **GitHub Actions** - CI/CD automático
- 📄 **JSON estático** - Sem necessidade de backend!

## 📚 Documentação

- 🏛️ **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Estrutura do código, seções e regras do visual
- 📝 **[src/data/README.md](./src/data/README.md)** - Como editar seus dados

## ⚡ Início Rápido

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# http://localhost:3000
```

Pronto! Seu portfólio está rodando localmente! 🎉

## ✏️ Personalize Seu Portfólio

Todos os dados do seu portfólio estão em arquivos JSON simples em `src/data/`:

```bash
src/data/
├── personal-info.json   # 👤 Nome, título, frase do topo e contatos
├── about.json           # 🧭 Pilares da seção "O que eu faço"
├── skills.json          # 💪 Habilidades técnicas
├── publications.json    # 📝 Artigos publicados
├── projects.json        # 🔬 Projetos de pesquisa
├── dev-projects.json    # 💻 Repositórios do GitHub
├── education.json       # 🎓 Formação acadêmica
└── experience.json      # 💼 Experiências profissionais
```

### Como Editar

1. **Abra o arquivo JSON que deseja modificar**
   ```bash
   code src/data/personal-info.json
   ```

2. **Edite os dados** (veja o [guia completo](src/data/README.md))

3. **Salve e recarregue a página** - as mudanças aparecem instantaneamente!

📖 **Guia detalhado:** [`src/data/README.md`](src/data/README.md)

## 🏗️ Build de Produção

```bash
# Criar build otimizado
npm run build

# Testar o build localmente
npm run preview
```

O build estará em `dist/` pronto para deploy! 📦

## 🚀 Deploy no GitHub Pages

O deploy é automático: todo push na branch `main` dispara o workflow `.github/workflows/deploy.yml`, que faz o build e publica o site.

```bash
git add .
git commit -m "Atualiza dados do portfólio"
git push
```

🌐 Site publicado: [https://jeancarloscc.github.io/portfolio/](https://jeancarloscc.github.io/portfolio/)

Na primeira vez, ative o GitHub Pages no repositório em **Settings → Pages → Source: GitHub Actions**.

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

## 🔧 Tecnologias Detalhadas

### Frontend Stack
- **React 19.2.0** - Biblioteca UI com novos hooks
- **TypeScript** - Type safety e melhor DX
- **Vite 7.2.2** - Build tool de próxima geração
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Router DOM** - Roteamento client-side
- **Lucide React** - Ícones modernos e leves

### Build & Dev Tools
- **PostCSS** - Processamento CSS avançado
- **ESLint** - Linting JavaScript/TypeScript

## 🎨 Personalização

### Temas e Estilos

Edite `src/index.css` para customizar cores, tipografia e temas:

```css
@theme {
  --color-brand-strong: #2563eb;
  --font-display: "Space Grotesk", sans-serif;
}
```

## 📝 Estrutura de Dados

### Exemplo: `personal-info.json`

```json
{
  "name": "Seu Nome",
  "title": "Seu Cargo/Título",
  "tagline": "Frase de impacto do topo",
  "description": "Breve descrição sobre você",
  "photo": "images/profile.webp",
  "email": "seu@email.com",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seu-usuario",
  "lattes": "",
  "location": "Sua Cidade, País"
}
```

Links vazios (`""`) não aparecem no site.

### Exemplo: `dev-projects.json`

```json
[
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição do projeto",
    "technologies": ["Tech 1", "Tech 2"],
    "github": "https://github.com/...",
    "demo": "https://demo.com",
    "order": 1
  }
]
```

📖 **Documentação completa:** [`src/data/README.md`](src/data/README.md)

## 🔒 Segurança

Este portfólio é 100% estático, sem servidor ou banco de dados. Isso significa:

✅ **Sem vulnerabilidades de servidor**  
✅ **Sem ataques de injeção SQL**  
✅ **Rápido e seguro**  
✅ **Hospedagem gratuita no GitHub Pages**

## 🐛 Troubleshooting

### Problema: Página em branco no GitHub Pages

**Solução:** O `base` do `vite.config.ts` precisa ser o nome do repositório. Ele é definido automaticamente no build do GitHub Actions (variável `GITHUB_PAGES`):

```typescript
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/portfolio/' : '/',
})
```

Imagens e outros arquivos devem usar caminhos relativos, sem `/` no início (`images/...`).

### Problema: Dados não aparecem

**Solução:** Verifique se os arquivos JSON estão em `src/data/` e são válidos:

```bash
# Valide o JSON
cat src/data/personal-info.json | json_pp
```

### Problema: Erro de compilação TypeScript

**Solução:** O build roda a checagem de tipos. Rode e leia o erro:

```bash
npm run build
```

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

O código deste projeto está sob a licença MIT. Veja o arquivo [`LICENSE`](./LICENSE).

O conteúdo pessoal **não** faz parte da licença e não pode ser reutilizado: textos e dados em `src/data/`, foto e imagens em `public/images/` e a página `public/privacidade-capim.html`.

## 📧 Contato

Jean Carlos - [jeancc.costa@gmail.com](mailto:jeancc.costa@gmail.com) · [LinkedIn](https://linkedin.com/in/jeancc-costa)

Link do Projeto: [https://github.com/jeancarloscc/portfolio](https://github.com/jeancarloscc/portfolio)

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐
