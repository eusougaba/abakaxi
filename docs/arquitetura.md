# Arquitetura do Projeto ABAKAXI

## Visão Geral da Arquitetura

O SaaS de seguros ABAKAXI será desenvolvido utilizando uma arquitetura moderna de aplicação web, com separação clara entre frontend e backend, seguindo o padrão de API RESTful. Esta abordagem permite escalabilidade, manutenção simplificada e desenvolvimento paralelo das diferentes camadas da aplicação.

## Arquitetura Frontend

### Tecnologia Principal
- **React**: Framework JavaScript para construção de interfaces de usuário interativas
- **TypeScript**: Superset tipado de JavaScript para maior segurança e produtividade
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente
- **shadcn/ui**: Biblioteca de componentes para React com design system customizável

### Estrutura de Diretórios Frontend
```
abakaxi-frontend/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens, fontes e outros recursos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── common/          # Componentes genéricos (botões, inputs, etc.)
│   │   ├── layout/          # Componentes de layout (header, footer, etc.)
│   │   └── features/        # Componentes específicos de funcionalidades
│   ├── hooks/               # Custom hooks React
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/
│   │   ├── Onboarding/
│   │   ├── Quote/
│   │   ├── Checkout/
│   │   ├── Dashboard/
│   │   └── Claims/
│   ├── services/            # Serviços de API e integrações
│   ├── store/               # Gerenciamento de estado global
│   ├── styles/              # Estilos globais e temas
│   ├── types/               # Definições de tipos TypeScript
│   ├── utils/               # Funções utilitárias
│   ├── App.tsx              # Componente principal
│   ├── index.tsx            # Ponto de entrada
│   └── routes.tsx           # Configuração de rotas
├── .eslintrc.js             # Configuração do ESLint
├── .prettierrc              # Configuração do Prettier
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind CSS
└── tsconfig.json            # Configuração do TypeScript
```

### Principais Dependências Frontend
- **React Router**: Gerenciamento de rotas
- **Axios**: Cliente HTTP para requisições à API
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas
- **Lucide Icons**: Biblioteca de ícones
- **Recharts**: Biblioteca para visualização de dados
- **date-fns**: Manipulação de datas

## Arquitetura Backend

### Tecnologia Principal
- **Flask**: Framework Python para desenvolvimento web
- **SQLAlchemy**: ORM (Object-Relational Mapping) para interação com banco de dados
- **Flask-RESTful**: Extensão para criação de APIs RESTful
- **Flask-JWT-Extended**: Autenticação baseada em tokens JWT

### Estrutura de Diretórios Backend
```
abakaxi-backend/
├── venv/                    # Ambiente virtual Python
├── src/
│   ├── main.py              # Ponto de entrada da aplicação
│   ├── config.py            # Configurações da aplicação
│   ├── models/              # Modelos de dados
│   │   ├── __init__.py
│   │   ├── user.py          # Modelo de usuário
│   │   ├── policy.py        # Modelo de apólice
│   │   ├── quote.py         # Modelo de cotação
│   │   └── claim.py         # Modelo de sinistro
│   ├── routes/              # Rotas da API
│   │   ├── __init__.py
│   │   ├── auth.py          # Rotas de autenticação
│   │   ├── users.py         # Rotas de usuários
│   │   ├── quotes.py        # Rotas de cotações
│   │   ├── policies.py      # Rotas de apólices
│   │   └── claims.py        # Rotas de sinistros
│   ├── services/            # Lógica de negócios
│   │   ├── __init__.py
│   │   ├── auth_service.py  # Serviço de autenticação
│   │   ├── quote_service.py # Serviço de cotação
│   │   ├── policy_service.py # Serviço de apólice
│   │   └── claim_service.py # Serviço de sinistro
│   ├── utils/               # Funções utilitárias
│   │   ├── __init__.py
│   │   ├── validators.py    # Validadores
│   │   └── helpers.py       # Funções auxiliares
│   └── static/              # Arquivos estáticos (se necessário)
├── migrations/              # Migrações de banco de dados
├── tests/                   # Testes automatizados
│   ├── __init__.py
│   ├── test_auth.py
│   ├── test_quotes.py
│   └── test_policies.py
├── .env.example             # Exemplo de variáveis de ambiente
├── .gitignore               # Arquivos a serem ignorados pelo Git
├── requirements.txt         # Dependências Python
└── README.md                # Documentação
```

### Principais Dependências Backend
- **Flask-Migrate**: Gerenciamento de migrações de banco de dados
- **Flask-CORS**: Suporte a CORS (Cross-Origin Resource Sharing)
- **Flask-Bcrypt**: Hashing de senhas
- **PyJWT**: Implementação de JSON Web Tokens
- **Marshmallow**: Serialização/deserialização de objetos
- **pytest**: Framework de testes

## Banco de Dados

### Tecnologia
- **MySQL**: Sistema de gerenciamento de banco de dados relacional
- **SQLAlchemy**: ORM para interação com o banco de dados

### Principais Entidades
1. **Users**: Informações dos usuários
2. **Quotes**: Cotações realizadas
3. **Policies**: Apólices contratadas
4. **Claims**: Sinistros reportados
5. **Payments**: Histórico de pagamentos
6. **Documents**: Documentos relacionados às apólices e sinistros

## Integrações Externas

### Pagamentos
- Integração com gateway de pagamento para processamento de cartões de crédito
- Implementação de webhooks para notificações de pagamentos

### Comunicação
- Serviço de e-mail para envio de confirmações e notificações
- Possibilidade futura de integração com SMS

### Armazenamento
- Serviço de armazenamento para documentos e imagens (AWS S3 ou similar)

## Segurança

### Autenticação e Autorização
- Autenticação baseada em tokens JWT
- Refresh tokens para manter sessões
- Controle de acesso baseado em funções (RBAC)

### Proteção de Dados
- Criptografia de dados sensíveis
- HTTPS para todas as comunicações
- Validação de entrada em todas as APIs
- Proteção contra ataques comuns (CSRF, XSS, SQL Injection)

## Escalabilidade e Performance

### Estratégias de Escalabilidade
- Arquitetura stateless para facilitar escalabilidade horizontal
- Caching de dados frequentemente acessados
- Otimização de consultas ao banco de dados

### Monitoramento
- Logging de eventos e erros
- Métricas de performance
- Alertas para problemas críticos

## Ambiente de Desenvolvimento

### Ferramentas
- **Git**: Controle de versão
- **GitHub**: Hospedagem do repositório e CI/CD
- **Docker**: Containerização para desenvolvimento consistente (implementação futura)

### Fluxo de Trabalho
- Desenvolvimento baseado em branches (GitFlow)
- Pull requests e code reviews
- Testes automatizados antes de merge

## Implantação

### Ambiente de Produção
- Frontend: Hospedagem estática (Netlify, Vercel ou similar)
- Backend: Serviço de hospedagem com suporte a Python/Flask
- Banco de Dados: Serviço gerenciado de MySQL

### CI/CD
- Integração contínua para verificação de código e testes
- Implantação contínua para ambientes de staging e produção

## Considerações Futuras (Pós-MVP)

### Expansão Técnica
- Implementação de microsserviços para funcionalidades específicas
- API Gateway para gerenciamento de múltiplos serviços
- Cache distribuído para melhorar performance
- Análise de dados e machine learning para precificação dinâmica

### Expansão de Produto
- Aplicativo móvel nativo
- Mais tipos de seguros
- Integrações com parceiros
- Chatbot avançado com IA
