/* 2 - Escreva uma função que receba um array com pelo menos 3 elementos e retorne um novo array contendo o primeiro, 
o último e o elemento do meio, naquela ordem. Obs.: O elemento do meio caso seja um número par 
será o número mais próximo da esquerda. */

const extractElements = (array) => {
    if (array.length < 3) {
      return 'O array deve conter pelo menos 3 elementos.'
    }
  
    const middle = array[Math.floor((array.length - 1) / 2)]
    const [first] = array
    const last = array.pop()
  
    return [first, middle, last]
}

const array = [1, 2, 3, 4, 5];
const extractedElements = extractElements(array);
console.log(extractedElements); // Output: [1, 3, 5]