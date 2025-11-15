#!/bin/bash

# 🚀 Script de Deploy Rápido para GitHub

echo "🚀 Iniciando deploy do portfolio..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verificar se é repositório Git
if [ ! -d ".git" ]; then
    echo -e "${BLUE}📦 Inicializando repositório Git...${NC}"
    git init
    git branch -M main
fi

# 2. Adicionar todos os arquivos
echo -e "${BLUE}📝 Adicionando arquivos...${NC}"
git add .

# 3. Fazer commit
echo -e "${BLUE}💾 Fazendo commit...${NC}"
read -p "Digite a mensagem do commit: " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update: $(date '+%Y-%m-%d %H:%M')"
fi
git commit -m "$commit_message"

# 4. Verificar se remote existe
if ! git remote | grep -q "origin"; then
    echo -e "${BLUE}🔗 Configure o repositório remoto:${NC}"
    read -p "Digite a URL do repositório GitHub (ex: https://github.com/usuario/portfolio.git): " repo_url
    git remote add origin "$repo_url"
fi

# 5. Push para GitHub
echo -e "${BLUE}⬆️  Enviando para GitHub...${NC}"
git push -u origin main

echo -e "${GREEN}✅ Deploy concluído!${NC}"
echo -e "${GREEN}🌐 Seu código está no GitHub${NC}"
echo ""
echo "📋 Próximos passos:"
echo "1. Vá para: Settings → Pages no seu repositório"
echo "2. Em 'Source', selecione 'GitHub Actions'"
echo "3. Aguarde o deploy automático"
echo ""
echo "🎉 Seu site estará em: https://seu-usuario.github.io/portfolio/"
