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
const newpass = Cypress.env('novasenha')

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

      // Abre Lista Perfil    
      cy.get('[d="M7 10l5 5 5-5z"]').then($element => {
        const element = $element[0];
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        element.dispatchEvent(event);
      });

      // Selecionar Perfil Triagem
      cy.get('.mud-list-item-text > .mud-typography')
        .eq(1)
        .click({ force: true }) 
      
      // Nome Perfil Triagem
      cy.get(':nth-child(3) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('Triagem Cypress')

      // E-mail Triagem
      cy.get(':nth-child(4) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
        .click()
        .type('triagem@cypress.com')

      // CPF
      cy.get(':nth-child(5) > .mud-input-control-input-container')
        .click()
        .type(cpf)

      // Departamento
      cy.get(':nth-child(6) > .mud-input-control-input-container')
      .click()
      .type('Triagem Cypress')

      // Senha
      cy.get(':nth-child(7) > .mud-input-control-input-container')
      .click()
      .type(newpass)

      // Nova Senha
      cy.get(':nth-child(8) > .mud-input-control-input-container')
      .click()
      .type(newpass)

      // Sair
    //  cy.get('.mud-button-filled-error > .mud-button-label')
    //  .click()

    // Salvar 
    // cy.get('.mud-button-filled-primary > .mud-button-label')
    //   .click()
      }) 
})