# Cypress Serverest

Este repositório contém um projeto de automação de testes desenvolvido em Cypress com JavaScript, voltado para a prática de testes de UI e API.

## 🚀 Tecnologias e Ferramentas

- **Cypress**: Automação de testes end-to-end (E2E) e API.
- **JavaScript / TypeScript**: Linguagem dos testes.
- **Allure Reports**: Geração de relatórios detalhados de execução.
- **GitHub**: Controle de versão e colaboração.
- **Fixtures e Page Object Model (POM)**: Organização de testes e dados de teste.
- **K6**: Testes de performance de endpoints API.

## 🧪 Funcionalidades testadas

- Fluxos de autenticação (login/logout) com usuário válido e inválido.
- Testes de cadastro, edição e exclusão de usuários e produtos.
- Validação de respostas de API (status code, schema, conteúdo).
- Geração de relatórios detalhados em Allure.
- Estrutura de testes modular com Page Object Model e fixtures.

## 📁 Estrutura do projeto

Projeto-Cypress/
├─ package.json
├─ cypress.config.js
├─ cypress/
│   ├─ e2e/
│   │   ├─ login.spec.js
│   │   ├─ cadastro.spec.js
│   │   └─ produtos.spec.js
│   ├─ fixtures/
│   │   └─ users.json
│   ├─ pageobjects/
│   │   ├─ login.page.js
│   │   └─ cadastro.page.js
│   ├─ support/
│   │   ├─ commands.js
│   │   └─ e2e.js
│   └─ data/
│       └─ users.js
├─ utils/
│   └─ helpers.js
├─ screenshots/           
└─ videos/

## 📌 Objetivo do projeto

- Demonstrar conhecimento em testes automatizados de aplicações web e APIs.
- Exibir boas práticas de organização de testes (POM, fixtures, helpers).
- Integrar relatórios profissionais (Allure) e versionamento (GitHub).
- Servir como portfólio para vagas de QA Engineer / Test Automation.

