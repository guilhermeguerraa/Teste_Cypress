const { defineConfig } = require("cypress");

module.exports = defineConfig({
   e2e: {
     setupNodeEvents(on, config) {
       // implement node event listeners here
      
     },
   },
  env: {
    usuario: "responsavel@mail.com",
    senha: "Senha@123",
    adm: "administrador@denunciamartinelli.adv.br",
    admsenha: "Senha@123",
    novasenha: "Senha@123",
    temp_tratat_anda: "80",
    dados_temp_medio: "60",
    status: "1",
    fila: "0",
    corporacao: "2"
  }
});
