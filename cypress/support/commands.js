//const cypress = require("cypress");

Cypress.Commands.add('login', () => {
cy.visit('https://denunciae.bindflow.com.br/') 
cy.get(':nth-child(1) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
  .click()
  .type(Cypress.env('usuario'))
  
cy.get(':nth-child(2) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
  .click()
  .type(Cypress.env('senha')) 
  
  // entrar no sistema
  cy.get('.mud-button-label').click()
})


Cypress.Commands.add('adm', () => {
  cy.visit('https://denunciae.bindflow.com.br/') 
  // Usuário
  cy.get(':nth-child(1) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
    .click()
    .type(Cypress.env('adm'))
  // Senha  
  cy.get(':nth-child(2) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
    .click()
    .type(Cypress.env('admsenha')) 

  // Altera o usuário para sistêmico
  cy.get('.mud-paper > .mud-button-root > .mud-icon-button-label > .mud-icon-root')
  .click()
          
    // entrar no sistema
    cy.get('.mud-button-label').click()
    
  })
  