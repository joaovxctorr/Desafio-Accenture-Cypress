# ☕ Automação E2E - Coffee Cart com Cypress & Cucumber
Este projeto consiste em uma suíte de testes automatizados **End-to-End (ponta a ponta)** para a aplicação **Coffee Cart**. A automação foi desenvolvida utilizando **BDD (Behavior Driven Development)** e **POM (Page Object Model)**, validando o fluxo completo de compra, desde a seleção de produtos até a finalização do checkout.

# Tecnologias e Frameworks
* **Cypress:** Framework principal de automação para testes de interface moderna e rápida.
* **Cucumber (Badeball Preprocessor):** Interpretador de linguagem Gherkin para escrita de cenários em linguagem natural.
* **Faker.js:** Biblioteca integrada para a geração de dados randômicos (nomes e e-mails) no checkout.
* **Node.js:** Ambiente de execução utilizado para gerenciar as dependências e o motor de testes.

# Estrutura do Projeto
A organização dos arquivos no diretório `cypress/` segue a lógica de separação de responsabilidades para garantir manutenibilidade:

* **e2e/features:** Contém os arquivos `.feature` (Gherkin) que descrevem o comportamento do negócio.
* **support/pages:** Classes que implementam o padrão **Page Object Model**
* **support/step_definitions:** Mapeamento técnico que conecta os passos do Cucumber às funções das Pages.
* **cypress.config.js:** Arquivo de configuração global que vai conter a baseUrl.

# Instalação e Execução
Para configurar o ambiente local e executar a suíte de testes, utilize os comandos NPM abaixo:

### 1. Instalar Dependências
# Inicializa o projeto e instala o Cypress, Cucumber e Faker
* npm install cypress --save-dev
* npm install @badeball/cypress-cucumber-preprocessor --save-dev
* npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
* npm install @faker-js/faker --save-dev

### 2. Execucao do projeto

npx cypress open


