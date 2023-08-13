/* Exercício 5: Dado o array de strings ["Olá", "Mundo", "Javascript"], utilize o método reduce para concatenar 
todas as strings em uma única string. */

const words = ["Olá", "Mundo", "Javascript"]
const newWords = words.reduce((phrase, word) => phrase + word,'')
console.log(newWords)