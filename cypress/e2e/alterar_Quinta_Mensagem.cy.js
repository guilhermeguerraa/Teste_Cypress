/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })

it('Mensagem - Altera DPO', () => {
    // Entra na Tela de Mensagem
    cy.get(':nth-child(3) > .mud-nav-link > .mud-nav-link-text')
      .click()

    // Abrir Mensagens
    cy.get('.mud-input-adornment > .mud-icon-root')
      .click()

    // Escolher Quinta Mensagem
    cy.get('.mud-list-item-text > .mud-typography')
      .eq(4)
      .click(); 

    // Alterar Dados DPO
    cy.get('.mud-grid-item > .mud-input-control > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .clear()
      .type('teste123@automatizado.com')
      
    // Salvar Dados DPO
    cy.get('.mud-input-adornment > .mud-button-root > .mud-icon-button-label > .mud-icon-root')
      .click()
    })
})