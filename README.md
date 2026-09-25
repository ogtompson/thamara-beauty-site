# Thamara Vasconcelos Beauty Academy

Site institucional para o estúdio de micropigmentação e embelezamento do olhar da Thamara Vasconcelos, localizado em Olinda, Pernambuco.

O projeto busca oferecer uma vitrine própria para o negócio, reunindo apresentação profissional, serviços e valores, portfólio, depoimentos, localização e canais de contato. Em etapas posteriores, a aplicação também deverá oferecer um fluxo próprio de agendamento.

## Estado atual

O frontend do MVP já possui uma Home integrada e responsiva, composta por:

- apresentação principal do estúdio;
- catálogo de serviços e valores;
- portfólio em mosaico;
- apresentação da profissional;
- depoimentos;
- mapa e informações de contato;
- navegação suave entre as seções.

O backend possui a estrutura inicial em Spring Boot, com as dependências de persistência, validação e API REST configuradas. A próxima etapa prevista é implementar as entidades definidas na modelagem e seus respectivos repositórios Spring Data JPA.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Frontend | Angular 22, TypeScript, SCSS e SSR com Express |
| Testes do frontend | Vitest |
| Backend | Java 21 e Spring Boot 4 |
| Persistência | Spring Data JPA e Hibernate |
| Banco de dados | PostgreSQL |
| Build do backend | Maven Wrapper |
| Hospedagem | A definir |

## Estrutura do repositório

```text
.
├── frontend/   # aplicação Angular e servidor SSR
├── backend/    # API Spring Boot
├── docs/       # documentação complementar do projeto
└── README.md
```

## Pré-requisitos

- Git;
- Node.js e npm;
- Java 21;
- PostgreSQL.

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/ogtompson/thamara-beauty-site.git
cd thamara-beauty-site
```

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

O frontend ficará disponível em `http://localhost:4200`.

Comandos úteis:

```bash
npm run build
npm test -- --watch=false
npm run serve:ssr:frontend
```

O comando de SSR deve ser executado depois de `npm run build`.

### 3. Banco de dados

Crie um banco PostgreSQL para o ambiente local:

```sql
CREATE DATABASE thamara_beauty;
```

Antes de iniciar o backend, ajuste a conexão em `backend/src/main/resources/application.properties` de acordo com o usuário e a senha do seu PostgreSQL local.

### 4. Backend

No Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

No Linux ou macOS:

```bash
cd backend
./mvnw spring-boot:run
```

Por padrão, a API ficará disponível em `http://localhost:8080`.

Para executar os testes do backend:

```powershell
.\mvnw.cmd test
```

ou, no Linux e macOS:

```bash
./mvnw test
```

## Fluxo de trabalho

- `main`: versão estável ou destinada à produção;
- `dev`: branch de integração do projeto;
- `feat/<numero>-<descricao>`: implementação de funcionalidades;
- `fix/<descricao>`: correções;
- `docs/<descricao>`: alterações exclusivamente documentais.

As alterações devem partir da `dev` e retornar a ela por pull request. Prefira commits pequenos, coesos e revisáveis, separados por responsabilidade.

## Próximas etapas

No curto prazo:

1. implementar as classes Java das entidades definidas na modelagem;
2. criar os repositórios Spring Data JPA correspondentes;
3. adicionar testes de persistência;
4. iniciar os serviços e endpoints do backend;
5. substituir os conteúdos provisórios restantes do frontend por dados definitivos.

Pagamento de sinal, integração com Google Agenda e chatbot permanecem fora do escopo imediato do MVP.

## Board

[Acompanhar o projeto no Trello](https://trello.com/invite/b/6a7d0e70e73808200f7bcb37/ATTI94a64346e3a41099b5d8346419f3e34681951CE4/thamara-site)
