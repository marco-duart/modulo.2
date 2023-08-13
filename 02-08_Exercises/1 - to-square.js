/* 1 - Dado o array de números [2, 4, 6, 8], utilize o método map para criar um novo array com os números elevados ao quadrado. */

const toSquare = (numbers) => numbers.map(number => number*number)

const numbers = [2, 4, 6, 8]
const newNumbers = toSquare(numbers)
console.log(newNumbers) //[4, 16, 36, 64]