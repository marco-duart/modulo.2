/* 7 - Escreva uma função que receba uma quantidade variável de argumentos numéricos e retorne um objeto contendo 
a soma total e o restante quando dividido por 10. */

const sumAndRemainder = (...numbers) => {
    const sum = numbers.reduce((total, number) => total + number,0);
    const remainder = sum%10
    return {
        sum,
        remainder
    }
}


const result1 = sumAndRemainder(10, 20, 30, 40, 50);
console.log(result1); // Output: { sum: 150, remainder: 0 }

const result2 = sumAndRemainder(15, 7, 3);
console.log(result2); // Output: { sum: 25, remainder: 5 }