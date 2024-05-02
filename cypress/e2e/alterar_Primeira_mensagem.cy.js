/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')
const tta = Cypress.env('temp_tratat_anda')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })
  
     it('Mensagem - Altera Tempo Tratativa Andamento', () => {
      // Entra na Tela de Mensagem
      cy.get(':nth-child(3) > .mud-nav-link > .mud-nav-link-text')
        .click()
  
      // Abre a mensagens
      cy.get('input.mud-input-slot')
        .click()
  
      // Escolher a Primeira Mensagem
      cy.get('.mud-list-item-text > .mud-typography')
        .eq(0)
        .click(); 

      // Alterar Tempo Tratativa Andamento
      cy.get('.mud-grid-item > .mud-input-control > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .clear()
        .type(tta)

      // Salvar Tempo Tratativa Andamento
      cy.get('.mud-input-adornment > .mud-button-root > .mud-icon-button-label > .mud-icon-root')
        .click()
     })
  })
  