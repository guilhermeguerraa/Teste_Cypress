/// <reference types="cypress" />

// Importa a função de gerar CNPJ
const { gerarCNPJ } = require('../support/Gerador_CNPJ')
// Importa a função de gerar CPF
const { gerarCPF } = require('../support/Gerador_CPF')
// Importa a função de gerar número de Telefone
const { gerarTelefone } = require('../support/Gerador_Telefone')

const admuser = Cypress.env('adm')
const admpass = Cypress.env('admsenha')
const cnpj = gerarCNPJ()
const telefone = gerarTelefone()
const cpf = gerarCPF()
const pass = Cypress.env('senha')

context('Administrador', () => {
  beforeEach(() => {
    cy.adm(admuser, admpass)
  })

    it('Entra no Sistema como ADM', () => {     
      // Entrar no Sistema
      cy.get('.mud-button-label')
        .click()

      // Entra na tela Sistêmicos
      cy.get(':nth-child(2) > .mud-nav-link')
        .click()

      // Criar Perfil Triagem
      cy.get('.mud-container > :nth-child(1) > .mud-toolbar > :nth-child(3) > .mud-button-root > .mud-icon-button-label > .mud-icon-root')
        .click()

      // Abre Lista Perfil(Adm ou Triagem)
      cy.get('[d="M7 10l5 5 5-5z"]')
        .click() 


      // Selecionar Perfil Triagem
      cy.get('.mud-list-item-text > .mud-typography')
        .eq(1)
        .click() 
        
      }) 
})