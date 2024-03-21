// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o erro não capturado falhe no teste
    return false;
  });
  