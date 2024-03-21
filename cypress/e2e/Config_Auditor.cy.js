/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.auditor(user, pass)
  })

  it('Auditor/Configuração', ()=>{
   // entrar na tela de COnfigurações
   cy.get(':nth-child(2) > .mud-nav-link > .mud-nav-link-text')
     .click()

   // inserir razão solcial
   cy.get('.mud-grid-item-sm-5 > :nth-child(1) > :nth-child(2) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
     .click()
     .clear()
     .type('Razão Social Teste Automatizado')

    // inserir Nome Fantasia
  cy.get(':nth-child(4) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
    .click()
    .clear()
    .type('Teste Nome Fantasia Automatizado')

  // Salvar alterações dos dados gerais
  cy.get('.mud-grid-item-sm-5 > :nth-child(1) > .mud-button-root > .mud-button-label')
    .click()
  })
})
