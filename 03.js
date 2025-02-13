// math.js

// Função para soma
function soma(a, b) {
    return a + b;
  }
  
  // Função para subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função para multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função para divisão
  function divisao(a, b) {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    return a / b;
  }
  
  // Função para exponenciação
  function exponenciacao(a, b) {
    return a ** b;
  }
  
  // Exportando as funções
  module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    exponenciacao
  };
// app.js

// Importando o módulo math.js
const math = require('./math');

// Usando as funções importadas
const resultadoSoma = math.soma(5, 3);
const resultadoSubtracao = math.subtracao(10, 4);
const resultadoMultiplicacao = math.multiplicacao(7, 6);
const resultadoDivisao = math.divisao(20, 4);
const resultadoExponenciacao = math.exponenciacao(2, 3);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
console.log(`Multiplicação: ${resultadoMultiplicacao}`);
console.log(`Divisão: ${resultadoDivisao}`);
console.log(`Exponenciação: ${resultadoExponenciacao}`);
  