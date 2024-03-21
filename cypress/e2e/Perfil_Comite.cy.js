/// <reference types="cypress" />
// Importa a função de gerar CPF
const { gerarCPF } = require('../support/Gerador_CPF')

const user = Cypress.env('usuario')
const pass = Cypress.env('senha')
const cpf = gerarCPF()
const newpass = Cypress.env('novasenha')

context('Portal de Denuncia/Login', () => {
  beforeEach(() => {
    cy.login(user, pass)
  })

it('Mensagem - Altera DPO', () => {
    // Entra na Tela de Funcionários
    cy.get(':nth-child(4) > .mud-nav-link')
      .click()

    // Criar Funcionário
    cy.get('.mud-toolbar > :nth-child(2) > .mud-button-root')
      .click()

    // Abre Lista de Perfil
    cy.get('[d="M7 10l5 5 5-5z"]')
      .click()

    // Escolhe o Perfil Comite
    cy.get('.mud-list-item-text > .mud-typography')
      .eq(0)
      .click(); 

    // Insere Nome Funcionário
    cy.get(':nth-child(3) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .type('Teste Comitê Automatizado')

    // Insere Email Funcionário
    cy.get(':nth-child(4) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .type('comite@automatizado.com')

    // Insere CPF Funcionário
    cy.get(':nth-child(5) > .mud-input-control-input-container')
      .click()
      .type(cpf)

    // Insere Departamento
    cy.get(':nth-child(6) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .type('Comitê Automatizado')

    // Insere Senha
    cy.get(':nth-child(7) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .type(newpass)

    // Confirma Senha
    cy.get(':nth-child(8) > .mud-input-control-input-container > .mud-input > input.mud-input-slot')
      .click()
      .type(newpass)

    // Sair
    // cy.get('.mud-button-filled-error > .mud-button-label')
    //   .click()

    // Salvar Funcionário
    // cy.get('.mud-button-filled-primary > .mud-button-label')
    //   .click()
    
    })

})