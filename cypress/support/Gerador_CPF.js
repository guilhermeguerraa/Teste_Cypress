/*
// Função para gerar um CPF válido no navegador
function gerarCPF() {
    const n = () => Math.floor(Math.random() * 10) // Função para gerar um dígito aleatório
    const digits = Array.from({ length: 9 }, n); // Gera os primeiros 9 dígitos aleatórios
    const dv1 = (digits.reduce((acc, digit, i) => acc + digit * (10 - i), 0) * 10) % 11 % 10 // Calcula o primeiro dígito verificador
    const dv2 = (digits.reduce((acc, digit, i) => acc + digit * (11 - i), 0) * 10) % 11 % 10 // Calcula o segundo dígito verificador
    return `${digits.join('')}${dv1}${dv2}`; // Retorna o CPF formatado
  }
    */

// Função para gerar um CPF válido no navegador
function gerarCPF() {
  const n = () => Math.floor(Math.random() * 10) // Função para gerar um dígito aleatório

  // Gera os primeiros 9 dígitos aleatórios
  const firstDigits = [
    n(), n(), n(), n(), n(), n(), n(), n(), n()
  ];

  // Calcula o primeiro dígito verificador
  const firstVerifier = (firstDigits.reduce((acc, digit, i) => acc + digit * (10 - i), 0) * 10) % 11
  const firstDigit = (firstVerifier === 10 || firstVerifier === 11) ? 0 : firstVerifier

  // Calcula o segundo dígito verificador
  const secondVerifier = ((firstDigits.reduce((acc, digit, i) => acc + digit * (11 - i), 0) + firstDigit * 2) * 10) % 11
  const secondDigit = (secondVerifier === 10 || secondVerifier === 11) ? 0 : secondVerifier

  // Gera o CPF formatado
  return `${firstDigits.join('')}${firstDigit}${secondDigit}`
}

// Exporta a função de gerar CPF para ser utilizada em outros arquivos
module.exports = { gerarCPF }
  
