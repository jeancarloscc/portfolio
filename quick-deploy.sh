#!/bin/bash

# 🚀 Script de Deploy Rápido para GitHub Pages
# Automatiza o processo de deploy do portfólio

set -e  # Sai se houver erro

echo "🚀 Iniciando deploy do portfólio..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_step() {
    echo -e "${BLUE}▶${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Passo 1: Verificar se Git está instalado
print_step "Verificando instalação do Git..."
if ! command -v git &> /dev/null; then
    print_error "Git não está instalado. Instale com: sudo apt install git"
    exit 1
fi
print_success "Git instalado"

# Passo 2: Verificar se Node está instalado
print_step "Verificando instalação do Node..."
if ! command -v node &> /dev/null; then
    print_error "Node.js não está instalado. Instale com: sudo apt install nodejs npm"
    exit 1
fi
print_success "Node.js $(node --version) instalado"

# Passo 3: Verificar se está em um repositório Git
print_step "Verificando repositório Git..."
if [ ! -d .git ]; then
    print_warning "Não é um repositório Git. Inicializando..."
    git init
    print_success "Repositório Git inicializado"
else
    print_success "Repositório Git encontrado"
fi

# Passo 4: Verificar dependências
print_step "Verificando dependências..."
if [ ! -d node_modules ]; then
    print_warning "Dependências não instaladas. Instalando..."
    npm install
    print_success "Dependências instaladas"
else
    print_success "Dependências encontradas"
fi

# Passo 5: Criar build
print_step "Criando build de produção..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build criado com sucesso"
else
    print_error "Falha ao criar build"
    exit 1
fi

# Passo 6: Verificar se há mudanças para commit
print_step "Verificando mudanças..."
if [[ -z $(git status -s) ]]; then
    print_warning "Nenhuma mudança para commit"
else
    # Passo 7: Adicionar arquivos
    print_step "Adicionando arquivos..."
    git add .
    print_success "Arquivos adicionados"

    # Passo 8: Criar commit
    print_step "Criando commit..."
    COMMIT_MSG="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    print_success "Commit criado: $COMMIT_MSG"
fi

# Passo 9: Verificar remote
print_step "Verificando repositório remoto..."
if ! git remote | grep -q origin; then
    print_warning "Repositório remoto não configurado"
    echo ""
    echo "Configure o repositório remoto com:"
    echo "  git remote add origin https://github.com/SEU_USUARIO/portfolio.git"
    echo ""
    read -p "Digite a URL do seu repositório GitHub: " REPO_URL
    
    if [ -n "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        print_success "Remote configurado: $REPO_URL"
    else
        print_error "URL não fornecida. Configure manualmente."
        exit 1
    fi
else
    REMOTE_URL=$(git remote get-url origin)
    print_success "Remote configurado: $REMOTE_URL"
fi

# Passo 10: Push para GitHub
print_step "Fazendo push para GitHub..."
BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
    BRANCH="main"
    git branch -M main
    print_success "Branch main criada"
fi

print_step "Enviando para branch: $BRANCH"
git push -u origin $BRANCH --force

if [ $? -eq 0 ]; then
    print_success "Push realizado com sucesso!"
else
    print_error "Falha ao fazer push"
    print_warning "Tente manualmente: git push -u origin $BRANCH"
    exit 1
fi

# Conclusão
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
print_success "Deploy concluído com sucesso! 🎉"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Próximos passos:"
echo ""
echo "1. Acesse seu repositório no GitHub"
echo "   https://github.com/SEU_USUARIO/portfolio"
echo ""
echo "2. Vá em Settings → Pages"
echo ""
echo "3. Configure:"
echo "   - Source: GitHub Actions"
echo ""
echo "4. Aguarde o deploy automático (2-3 minutos)"
echo ""
echo "5. Seu portfólio estará em:"
echo "   https://SEU_USUARIO.github.io/portfolio/"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
