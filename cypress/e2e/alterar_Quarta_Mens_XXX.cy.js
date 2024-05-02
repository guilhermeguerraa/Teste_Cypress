/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })

  it('Mensagem - Altera XXX', () => {
   // Entra na Tela de Mensagem
   cy.get(':nth-child(3) > .mud-nav-link > .mud-nav-link-text')
     .click()

   // Abrir Mensagens
   cy.get('input.mud-input-slot')
     .click()

   // Escolher Quarta Mensagem
   cy.get('.mud-list-item-text > .mud-typography')
     .eq(3)
     .click(); 

   // Alterar Dados XXX
   cy.get(':nth-child(3) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
     .click()
     .clear()
     .type('José Automatizado')

   // Salvar Dados XXX
   cy.get(':nth-child(3) > .mud-input-control-input-container > .mud-input > .mud-input-adornment > .mud-button-root')
     .click()
   })
  })