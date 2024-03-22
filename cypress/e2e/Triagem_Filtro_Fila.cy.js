/// <reference types="cypress" />

// Importa a função de gerar CNPJ
const cypress = require('cypress')
const { gerarCNPJ } = require('../support/Gerador_CNPJ')
// Importa a função de gerar CPF
const { gerarCPF } = require('../support/Gerador_CPF')
// Importa a função de gerar número de Telefone
const { gerarTelefone } = require('../support/Gerador_Telefone')

const admuser   = Cypress.env('adm')
const admpass   = Cypress.env('admsenha')
const cnpj      = gerarCNPJ()
const telefone  = gerarTelefone()
const cpf       = gerarCPF()
const pass      = Cypress.env('senha')
const newpass   = Cypress.env('novasenha')
const fila      = cypress.env('fila')

context('Administrador', () => {
  beforeEach(() => {
    cy.adm(admuser, admpass)
  })

    it('Entra no Sistema como ADM', () => {     
      // Entrar no Sistema
      cy.get('.mud-button-label')
        .click()

      // Entra na tela Triagem
      cy.get(':nth-child(4) > .mud-nav-link')
        .click()

      // Abre Filtro de Fila
      cy.get('[d="M7 10l5 5 5-5z"]').then($element => {
        const element = $element[0]
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
        element.dispatchEvent(event);
      })

      // Escolhe um filtro de Fila 
      cy.get('.mud-list-item-text > .mud-typography')
      .eq(fila) // Aqui vc escolhe o filtro -> 0 - Aguardando; 1 - Comite; 2 - Executivo; 3 - Outros
      .click({ force: true })
      }) 
})