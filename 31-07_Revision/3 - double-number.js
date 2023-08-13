/* 3 - Escreva uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. 
A função dobrarNumeros deve aplicar a função de callback a cada número do array e retornar um novo array com os valores resultantes. */

const dobrarNumeros = (numeros, dobrar) => numeros.map((numero) => dobrar(numero));

const dobrar = num => num * 2;
const numeros = [1, 2, 3, 4, 5];
const resultado = dobrarNumeros(numeros, dobrar);

console.log(resultado); // Output: [2, 4, 6, 8, 10]