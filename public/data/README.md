# 📦 Dados Estáticos do Portfólio

Este diretório contém todos os dados do portfólio em formato JSON estático, perfeito para hospedagem no GitHub Pages.

## 📂 Estrutura de Arquivos

```
public/data/
├── personal-info.json   # Informações pessoais e contatos
├── education.json       # Formação acadêmica
├── skills.json          # Habilidades técnicas por categoria
├── projects.json        # Projetos desenvolvidos
├── publications.json    # Artigos e publicações
└── experience.json      # Experiências profissionais
```

## 🎯 Como Funciona

O frontend busca esses arquivos JSON diretamente através de requisições `fetch()` ao invés de usar um backend API. Isso permite que o site funcione completamente estático no GitHub Pages.

## ✏️ Como Editar os Dados

### 1. **Informações Pessoais** (`personal-info.json`)

```json
{
  "name": "Seu Nome",
  "title": "Seu Cargo",
  "description": "Sua descrição...",
  "email": "seu@email.com",
  "linkedin": "https://linkedin.com/in/seu-perfil",
  "github": "https://github.com/seu-usuario",
  "location": "Sua Cidade, País"
}
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
git add public/data/

# 2. Faça commit
git commit -m "Atualiza dados do portfólio"

# 3. Faça push
git push origin main
```

O GitHub Actions irá automaticamente fazer o build e deploy das alterações! 🎉

## 💡 Dicas

- **IDs:** Mantenha os IDs únicos em cada arquivo
- **Order:** Use o campo `order` para controlar a ordem de exibição
- **Imagens:** Use URLs relativas (`/images/...`) ou URLs absolutas
- **Links:** Certifique-se que todos os links estejam corretos e acessíveis
- **Formatação:** Use um validador JSON para evitar erros de sintaxe

## 🔄 Migração Futura

Se no futuro você quiser adicionar um backend real:

1. **MongoDB + Railway:** Backend completo com banco de dados
2. **CMS Headless:** Contentful, Strapi, Sanity
3. **GitHub API:** Commits automáticos para atualizar os JSONs
4. **Supabase:** Backend-as-a-Service com PostgreSQL

Por enquanto, a solução estática é simples, rápida e gratuita! 🚀
