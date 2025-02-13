// Importando a biblioteca mathjs
const math = require('mathjs');

// Função para calcular o logaritmo de um número
function calcularLogaritmo() {
  // Obtendo o número do usuário
  const numero = parseFloat(prompt('Digite um número para calcular o logaritmo: '));

  // Verificando se o número é válido
  if (isNaN(numero) || numero <= 0) {
    console.log('Por favor, forneça um número válido maior que zero.');
    return;
  }

  // Calculando o logaritmo na base 10 (logaritmo comum)
  const logaritmo = math.log10(numero);

  // Exibindo o resultado
  console.log(`O logaritmo de ${numero} na base 10 é: ${logaritmo}`);
}

// Chamando a função
calcularLogaritmo();
