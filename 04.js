// mathFunctions.js

// Função de soma
function soma(a, b) {
    return a + b;
  }
  
  // Função de subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função de multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função de divisão
  function divisao(a, b) {
    if (b === 0) {
      return 'Erro: Divisão por zero';
    }
    return a / b;
  }
  
  // Função de exponenciação
  function exponenciacao(a, b) {
    return Math.pow(a, b);
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

// Importando o módulo de funções matemáticas
const math = require('./mathFunctions');

// Utilizando as funções matemáticas
console.log("Soma: ", math.soma(5, 3));            
console.log("Subtração: ", math.subtracao(5, 3));   
console.log("Multiplicação: ", math.multiplicacao(5, 3)); 
console.log("Divisão: ", math.divisao(6, 3));      
console.log("Exponenciação: ", math.exponenciacao(2, 3)); 
  