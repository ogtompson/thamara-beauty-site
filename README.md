# Thamara Vasconcelos Beauty Academy

Site para o estúdio de micropigmentação e embelezamento do olhar da Thamara Vasconcelos, em Olinda - PE. Hoje o negócio funciona só via Instagram, WhatsApp e o Minha Agenda Online (maapp) — a ideia é dar a ele uma vitrine própria, com espaço para serviços, portfólio e agendamento.

Projeto colaborativo de [nomes/GitHub do grupo].

## Fase 1 (MVP)

- Apresentação do estúdio, serviços e valores
- Portfólio
- Localização e horário de funcionamento
- Links para Instagram e WhatsApp
- Agendamento simples

Pagamento de sinal, integração com Google Agenda e chatbot ficam para depois do MVP no ar.

## Stack

| Camada     | Tecnologia                       |
|------------|----------------------------------|
| Frontend   | React + Vite + Tailwind CSS      |
| Backend    | NestJS (Node/TypeScript)         |
| Banco      | PostgreSQL                       |
| Hospedagem | a definir                        |

> Stack sujeita a ajuste conforme o grupo definir — atualizar esta tabela caso mude.

## Estrutura do repositório

```
.
├── frontend/       # aplicação React
├── backend/        # API NestJS
├── docs/           # requisitos, decisões de arquitetura, anotações de reunião
└── README.md
```

## Branching e fluxo de trabalho

- `main` → produção / estável
- `dev` → integração
- `feat/nome-da-subtask` → uma branch por tarefa, PR pequeno e revisável, merge + delete depois

## Como rodar localmente

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run start:dev
```

## Time

| Nome | Responsabilidade |
|------|------------------|
|      |                  |

## Board

Link do Trello: https://trello.com/invite/b/6a7d0e70e73808200f7bcb37/ATTI94a64346e3a41099b5d8346419f3e34681951CE4/thamara-site
