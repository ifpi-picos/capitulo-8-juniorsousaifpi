// Importando a biblioteca 'convert'
const convert = require('convert');

// Função para converter dias em minutos
function diasParaMinutos(dias) {
  const minutos = convert(dias).from('days').to('minutes');
  return minutos;
}

// Função para converter dias em gigabytes
function diasParaGigabytes(dias) {
  const gigabytes = convert(dias).from('days').to('gigabytes');
  return gigabytes;
}

// Testando as conversões
const dias = 5; // exemplo de 5 dias

console.log(`${dias} dias em minutos:`, diasParaMinutos(dias));
console.log(`${dias} dias em gigabytes:`, diasParaGigabytes(dias));
