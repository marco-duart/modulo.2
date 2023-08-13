/* 1 - Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os 
valores do array utilizando a função reduce. */

const somarValores = (numeros) => numeros.reduce((soma, numero) => soma + numero,0);

const numeros = [1, 2, 3, 4, 5];
const resultado = somarValores(numeros);
console.log(resultado); // Output: 15