// Função para gerar um número de telefone aleatório
function gerarTelefone() {
  const ddd = Math.floor(Math.random() * (99 - 10 + 1)) + 10 // Gera um DDD aleatório entre 10 e 99
  const parte1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0') // Gera uma parte do número aleatória entre 0000 e 9999
  const parte2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0') // Gera outra parte do número aleatória entre 0000 e 9999
  return `(${ddd}) ${parte1}-${parte2}`; // Retorna o número de telefone formatado
}

// Exemplo de uso da função para gerar um número de telefone aleatório
//const telefone = gerarTelefone();
//console.log(telefone); // Imprime o número de telefone gerado no console

    
// Exporta a função de gerar Telefone para ser utilizada em outros arquivos
module.exports = { gerarTelefone }
  
