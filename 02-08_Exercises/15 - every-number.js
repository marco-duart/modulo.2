/* Exercício 15: Crie uma função que recebe o seguinte array de números:
Utilize o método every para verificar se todos os números no array são maiores que 1. 
Retorne true se a condição for verdadeira e false caso contrário. */

const verificarNumeros = (numeros) => numeros.every(numero => numero > 1)

const numeros = [10, 5, 8, 2, 9];
console.log(verificarNumeros(numeros))