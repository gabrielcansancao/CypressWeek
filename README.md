# CypressWeek :zap:  

## Projeto desenvolvido durante a Semana Agilizei 3.0

A Semana Agilizei 3.0 é um treinamento de automação de testes com Cypress, do zero à integração contínua, online e gratuito, com duração de uma semana e com muitos exercícios práticos, com acompanhamento e focado em ajudar cada pessoa a atingir seus objetivos.

### Sobre o projeto
O projeto consiste na automação de testes de interface de um [site](https://devfinance-agilizei.netlify.app/#) utilizando Cypress.

### Setup 🛠️
Primeiramente, é necessário instalar o [Node.js](https://nodejs.org/en/download/)


Para inicializar o projeto, basta digitar no terminal (dentro da pasta do projeto):

`npm install`

Após, para rodar os testes, digitar no terminal:

`npm run cy:open` ou `npx cypress open`

Para executar testes sem navegador (modo headless):

`npm run cy:run` ou `npx cypress run`
<!--
### Execução com Cucumber
Neste projeto, foi implementado o framework Cucumber. 

Para executá-lo:

`npm run cy:open:cucumber` e/ou
`npm run cy:run:cucumber` (modo headless)

### Reports :page_facing_up:
Para gerar relatórios, foram usados dois reports generators:
* Mochawesome
* Cucumber HTML Reports

#### Gerando relatório com Mochawesome:

`npm run report:merge` &
`npm run report:mocha`

#### Gerando relatório com Cucumber HTML Reports:

`npm run report:cucumber` 


### Integração contínua :arrows_counterclockwise:

Foi utilizado o **Github Actions** para a integração contínua do projeto, e o **GitHub Pages** para publicar os relatórios em formato `.html`

:link: [Link para o relatório](https://rebecaferreira.github.io/semana-agilizei/)