/// <reference types="cypress" />

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })

it('Mensagem - Altera Dados Ouvidoria', () => {
   // Entra na Tela de Mensagem
   cy.get(':nth-child(3) > .mud-nav-link > .mud-nav-link-text')
     .click()

   // Abre Mensagens
   cy.get('input.mud-input-slot')
     .click()
   
   // Escolher Quarta Mensagem
   cy.get('.mud-list-item-text > .mud-typography')
     .eq(3)
     .click(); 

   // Alterar Dados da Ouvidoria
   cy.get('.mud-grid-item > :nth-child(1) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
     .click()
     .clear()
     .type('Olá Automatizado')

   // Salvar Dados Ouvidoria
   cy.get(':nth-child(1) > .mud-input-control-input-container > .mud-input > .mud-input-adornment > .mud-button-root > .mud-icon-button-label > .mud-icon-root > [d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"]')
     .click()
  })
  })