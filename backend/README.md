# Sistema de Crédito ABC - Backend

## Descrição
Sistema backend para financeira que fornece Capital de Giro (CP) e Crédito Direto ao Consumidor (CDC).

## Tecnologias
- Node.js
- Express 5.1.0
- TypeScript 5.9.3
- SQL Server
- Zod 4.1.11 (validação)

## Estrutura do Projeto
```
src/
├── api/                  # Controladores de API
├── routes/               # Definições de rotas
├── middleware/           # Middlewares Express
├── services/             # Lógica de negócio
├── utils/                # Funções utilitárias
├── constants/            # Constantes da aplicação
├── instances/            # Instâncias de serviços
├── tests/                # Utilitários de teste globais
├── config/               # Configurações
└── server.ts             # Ponto de entrada
```

## Instalação
```bash
npm install
```

## Configuração
1. Copie `.env.example` para `.env`
2. Configure as variáveis de ambiente

## Execução

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## Testes
```bash
npm test
npm run test:watch
npm run test:coverage
```

## Endpoints da API

### Health Check
- `GET /health` - Verifica status do servidor

### API v1
- Base URL: `/api/v1`
- Rotas externas (públicas): `/api/v1/external`
- Rotas internas (autenticadas): `/api/v1/internal`

## Funcionalidades
1. Cadastro de Clientes
2. Análise de Crédito
3. Simulação de Empréstimos
4. Contratação de Crédito
5. Gestão de Parcelas
6. Renegociação de Dívidas
7. Dashboard Gerencial
8. Integração com Sistemas Externos

## Padrões de Código
- TypeScript strict mode
- ESLint para qualidade de código
- Prettier para formatação
- Testes colocados junto aos arquivos fonte

## Segurança
- Helmet para headers de segurança
- CORS configurável
- Validação de entrada com Zod
- Multi-tenancy com isolamento por conta

## Licença
Privado