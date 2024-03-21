/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })

it('Mensagem - Altera DPO', () => {
    // Entra na Tela de Acompanhamento
    cy.get(':nth-child(5) > .mud-nav-link')
      .click()
    })
})