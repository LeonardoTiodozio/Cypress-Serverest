// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-real-events'

Cypress.Commands.add('iniciar', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.viewport(1400,900)
})

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-testid="email"]')
        .type(email)
    cy.get('[data-testid="senha"]')
        .type(senha)
    cy.get('[data-testid="entrar"]')
      .click()
})

//Cypress.Commands.add('inputText', (nome,valor) => {
  //   cy.contains(nome)
    //        .should('be.visible')
      //      .parent()
        //    .find('input')
          //  .type(valor)
//})