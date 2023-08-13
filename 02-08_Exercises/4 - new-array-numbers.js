/* 4 - Crie uma função que recebe os seguintes arrays de números:
Utilize o operador spread para criar um terceiro array que contém todos os números dos dois arrays anteriores. */

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numeros3 = [...numeros1, ...numeros2]
console.log(numeros3) //Output: [1, 2, 3, 4, 5, 6]
