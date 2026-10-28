# 📦 Dados Estáticos do Portfólio

Este diretório contém todos os dados do portfólio em formato JSON estático, perfeito para hospedagem no GitHub Pages.

## 📂 Estrutura de Arquivos

```
src/data/
├── personal-info.json       # Informações pessoais e contatos
├── about.json               # Pilares da seção "O que eu faço"
├── education.json           # Formação acadêmica
├── skills.json              # Habilidades técnicas por categoria
├── projects.json            # Projetos de pesquisa
├── dev-projects.json        # Repositórios do GitHub
├── publications.json        # Artigos e publicações
├── experience.json          # Experiências profissionais
└── extension-projects.json  # Projetos de extensão (ainda não exibidos)
```

## 🎯 Como Funciona

Os arquivos JSON são importados no build (`src/data/index.ts`), então o conteúdo já vai junto com o site e não há tela de carregamento. Para atualizar, edite o JSON e faça push.

## ✏️ Como Editar os Dados

### 1. **Informações Pessoais** (`personal-info.json`)

```json
{
  "name": "Seu Nome",
  "title": "Seu Cargo",
  "tagline": "Frase de impacto do topo",
  "description": "Sua descrição...",
  "photo": "images/profile.webp",
  "email": "seu@email.com",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seu-usuario",
  "instagram": "https://instagram.com/seu-perfil",
  "lattes": "http://lattes.cnpq.br/...",
  "scholar": "https://scholar.google.com/citations?user=...",
  "location": "Sua Cidade, País"
}
```

Links vazios (`""`) não aparecem no site. Use sempre a URL completa, com `https://`.

### **O que eu faço** (`about.json`)

Três pilares. `skillGroups` lista as categorias de `skills.json` cujas habilidades aparecem no card. `icon` aceita `research`, `engineering` ou `teaching`.

```json
[
  {
    "id": "research",
    "icon": "research",
    "title": "Pesquisa",
    "text": "Texto curto do pilar.",
    "skillGroups": ["Machine Learning & Deep Learning"]
  }
]
```

### 2. **Educação** (`education.json`)

Array de objetos com suas formações:

```json
[
  {
    "id": 1,
    "degree": "Título do curso",
    "institution": "Nome da instituição",
    "period": "2020 - 2024",
    "description": "Descrição ou áreas de foco",
    "order": 1
  }
]
```

### 3. **Habilidades** (`skills.json`)

Array de categorias com suas habilidades:

```json
[
  {
    "category": "Nome da Categoria",
    "items": ["Habilidade 1", "Habilidade 2", "Habilidade 3"]
  }
]
```

### 4. **Projetos** (`projects.json`)

Array de projetos desenvolvidos:

```json
[
  {
    "id": 1,
    "title": "Nome do Projeto",
    "description": "Descrição do projeto",
    "technologies": ["Tech 1", "Tech 2"],
    "github": "https://github.com/...",
    "demo": "https://demo.example.com",
    "image": "/images/projects/nome-do-projeto.png",
    "order": 1
  }
]
```

**📸 Imagens:** Coloque as imagens dos projetos em `public/images/projects/`

### 5. **Publicações** (`publications.json`)

Array de artigos e papers publicados:

```json
[
  {
    "id": 1,
    "title": "Título do Artigo",
    "authors": ["Autor 1", "Autor 2"],
    "conference": "Nome da Conferência",
    "year": 2024,
    "abstract": "Resumo do artigo...",
    "link": "https://arxiv.org/...",
    "order": 1
  }
]
```

### 6. **Experiência** (`experience.json`)

Array de experiências profissionais:

```json
[
  {
    "id": 1,
    "title": "Cargo",
    "company": "Nome da Empresa",
    "period": "2020 - Presente",
    "description": "Descrição do trabalho",
    "achievements": [
      "Conquista 1",
      "Conquista 2"
    ],
    "order": 1
  }
]
```

## 🚀 Deploy no GitHub Pages

Depois de editar os dados:

```bash
# 1. Adicione as alterações
git add src/data/

# 2. Faça commit
git commit -m "Atualiza dados do portfólio"

# 3. Faça push
git push origin main
```

O GitHub Actions irá automaticamente fazer o build e deploy das alterações! 🎉

## 💡 Dicas

- **IDs:** Mantenha os IDs únicos em cada arquivo
- **Order:** Use o campo `order` para controlar a ordem de exibição
- **Imagens:** Use caminhos relativos sem `/` no início (`images/...`), por causa do subcaminho `/portfolio/` do GitHub Pages
- **Links:** Certifique-se que todos os links estejam corretos e acessíveis
- **Formatação:** Use um validador JSON para evitar erros de sintaxe

## 🔄 Migração Futura

Se no futuro você quiser adicionar um backend real:

1. **MongoDB + Railway:** Backend completo com banco de dados
2. **CMS Headless:** Contentful, Strapi, Sanity
3. **GitHub API:** Commits automáticos para atualizar os JSONs
4. **Supabase:** Backend-as-a-Service com PostgreSQL

Por enquanto, a solução estática é simples, rápida e gratuita! 🚀
