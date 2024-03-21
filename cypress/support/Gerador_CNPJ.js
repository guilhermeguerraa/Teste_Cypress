// Função para gerar um CNPJ válido no navegador
function gerarCNPJ() {
  const n = () => Math.floor(Math.random() * 10) // Função para gerar um dígito aleatório

  // Gera os primeiros 8 dígitos aleatórios
  const firstDigits = [
    n(), n(), n(), n(), n(), n(), n(), n()
  ]

  // Calcula os dígitos verificadores
  const firstVerifier = ((
    firstDigits[0] * 5 +
    firstDigits[1] * 4 +
    firstDigits[2] * 3 +
    firstDigits[3] * 2 +
    firstDigits[4] * 9 +
    firstDigits[5] * 8 +
    firstDigits[6] * 7 +
    firstDigits[7] * 6
  ) % 11) < 2 ? 0 : 11 - ((
    firstDigits[0] * 5 +
    firstDigits[1] * 4 +
    firstDigits[2] * 3 +
    firstDigits[3] * 2 +
    firstDigits[4] * 9 +
    firstDigits[5] * 8 +
    firstDigits[6] * 7 +
    firstDigits[7] * 6
  ) % 11)

  const secondVerifier = ((
    firstDigits[0] * 6 +
    firstDigits[1] * 5 +
    firstDigits[2] * 4 +
    firstDigits[3] * 3 +
    firstDigits[4] * 2 +
    firstDigits[5] * 9 +
    firstDigits[6] * 8 +
    firstDigits[7] * 7 +
    firstVerifier * 6
  ) % 11) < 2 ? 0 : 11 - ((
    firstDigits[0] * 6 +
    firstDigits[1] * 5 +
    firstDigits[2] * 4 +
    firstDigits[3] * 3 +
    firstDigits[4] * 2 +
    firstDigits[5] * 9 +
    firstDigits[6] * 8 +
    firstDigits[7] * 7 +
    firstVerifier * 6
  ) % 11)

  // Gera os próximos 4 dígitos aleatórios
  const nextDigits = [
    n(), n(), n(), n()
  ];

  // Gera o CNPJ formatado
  return `${firstDigits.join('')}.${nextDigits.slice(0, 2).join('')}.${nextDigits.slice(2).join('')}-${firstVerifier}${secondVerifier}`
}

// Exemplo de uso da função para gerar um CNPJ válido
//const cnpj = gerarCNPJ()
//console.log(cnpj) // Imprime o CNPJ gerado no console

// Exporta a função de gerar CNPJ para ser utilizada em outros arquivos
module.exports = { gerarCNPJ }
