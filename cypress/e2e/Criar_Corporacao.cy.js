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
    cy.login2(admuser, admpass)
  })

    it('Entra no Sistema como ADM', () => {     
      // Entrar no Sistema
      cy.get('.mud-button-label')
        .click()

      // Entra na tela Sistêmicos
      cy.get(':nth-child(2) > .mud-nav-link')
        .click()

      // Cria Corporação
      cy.get('.mt-2 > .mud-button-root > .mud-fab-label > .mud-icon-root')
        .click()

      //Insere os Dados da Corporação
      //Razão Social
      cy.get(':nth-child(2) > :nth-child(3) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('Razão Social Cypress')

      // CNPJ
      cy.get(':nth-child(2) > :nth-child(4) > .mud-input-control-input-container')
        .click()
        .type(cnpj)

      // Telefone
      cy.get(':nth-child(2) > :nth-child(5) > .mud-input-control-input-container > .mud-input > input.mud-input-slot').click()
        .type(telefone)

      // Nome Fantasia
      cy.get(':nth-child(2) > :nth-child(6) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('Fantasia Cypress')

      // Dados do Responsável
      // Nome
      cy.get(':nth-child(4) > :nth-child(3) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('Responsável Cypress')

      // E-mail
      cy.get(':nth-child(4) > :nth-child(4) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('cypress@mail.com')

      // CPF
      cy.get(':nth-child(4) > :nth-child(5) > .mud-input-control-input-container')
        .click()
        .type(cpf)

      // Departamento
      cy.get(':nth-child(4) > :nth-child(6) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('Cypress')

      // Senha
      cy.get(':nth-child(7) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type(pass)

       // Confirma Senha
       cy.get(':nth-child(8) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
         .click()
         .type(pass)

       // Botão Sair
       //cy.get('.mud-button-filled-error > .mud-button-label')
       //  .click()

       // Botão Salvar
       //cy.get('.mud-button-filled-primary > .mud-button-label')
       //  .click()
      }) 
})