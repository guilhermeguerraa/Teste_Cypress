/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')
const dtm = Cypress.env('dados_temp_medio')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })
    
    it('Mensagens - Altera Tempo Médio', () => {
      // Entra na Tela de Mensagem
      cy.get(':nth-child(3) > .mud-nav-link > .mud-nav-link-text')
        .click()

      // Abre Mensagens
      cy.get('.mud-input-adornment > .mud-icon-root')
        .click()

      // Escolher Sexta Mensagem
      cy.get('.mud-list-item-text > .mud-typography')
        .eq(5)
        .click(); 

      // Alterar Dados Tempo Médio
      cy.get('.mud-grid-item > .mud-input-control > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .clear()
        .type(dtm)
      
      // Salvar dados Tempo Médio
      cy.get('.mud-input-adornment > .mud-button-root > .mud-icon-button-label > .mud-icon-root')
        .click()
      })
    })