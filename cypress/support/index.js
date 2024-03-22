// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Não falhe no teste por exceções não capturadas
    console.error('Uncaught exception', err)
    return false
  })
  