# ABAKAXI - SaaS de Seguros

Bem-vindo ao repositório do ABAKAXI, um SaaS de seguros inspirado no modelo do Lemonade, oferecendo uma experiência digital fluida, preços acessíveis e um processo simplificado para contratação e gestão de apólices.

## Visão Geral

O ABAKAXI é uma plataforma de seguros digital que visa revolucionar a experiência do usuário no mercado de seguros brasileiro, com foco inicial em seguros residenciais e para locatários.

## Estrutura do Projeto

Este repositório está organizado da seguinte forma:

```
abakaxi/
├── frontend/           # Aplicação React com TypeScript
│   ├── public/         # Arquivos estáticos
│   ├── src/            # Código-fonte do frontend
│   └── ...             # Arquivos de configuração
├── backend/            # Aplicação Flask
│   ├── venv/           # Ambiente virtual Python
│   ├── src/            # Código-fonte do backend
│   │   ├── models/     # Modelos de dados
│   │   ├── routes/     # Rotas da API
│   │   ├── static/     # Arquivos estáticos
│   │   └── main.py     # Ponto de entrada
│   └── requirements.txt # Dependências Python
└── docs/               # Documentação do projeto
    ├── escopo_mvp.md   # Definição do escopo do MVP
    └── arquitetura.md  # Documentação da arquitetura
```

## Requisitos

### Frontend
- Node.js 18+
- pnpm (recomendado) ou npm

### Backend
- Python 3.8+
- pip
- Virtualenv

## Configuração do Ambiente de Desenvolvimento

### Frontend

```bash
# Navegar para o diretório do frontend
cd frontend

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

### Backend

```bash
# Navegar para o diretório do backend
cd backend

# Ativar ambiente virtual
source venv/bin/activate  # No Windows: venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

# Iniciar servidor de desenvolvimento
python src/main.py
```

## Documentação

Para mais detalhes sobre o projeto, consulte:

- [Escopo do MVP](docs/escopo_mvp.md)
- [Arquitetura do Projeto](docs/arquitetura.md)

## Próximos Passos

1. Configurar o repositório remoto no GitHub
2. Implementar os componentes de UI conforme a identidade visual
3. Desenvolver as páginas principais do frontend
4. Implementar a API RESTful no backend
5. Integrar frontend e backend

## Contribuição

Para contribuir com o projeto:

1. Crie um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
