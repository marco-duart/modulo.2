/* 3 - Crie uma função que possa receber uma quantidade variável de argumentos numéricos e retorne a soma de todos eles. */


const sum = (...numbers) => numbers.reduce((sum, number) => sum + number,0)

const result1 = sum(1, 2, 3);
console.log(result1); // Output: 6

const result2 = sum(10, 20, 30, 40, 50);
console.log(result2); // Output: 150