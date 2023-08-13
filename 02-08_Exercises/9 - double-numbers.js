/* 9 - Dado o array de números [3, 7, 1, 9], crie uma função que utiliza o método forEach para imprimir o dobro de cada número. */

const printNumbers = (numbers) => numbers.forEach(number => console.log(number*2))

const numbers = [3, 7, 1, 9]
printNumbers(numbers)