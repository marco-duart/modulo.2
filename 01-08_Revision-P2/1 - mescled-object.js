/* 1 - Crie uma função que receba dois objetos como argumentos e retorne um novo objeto que seja uma cópia do primeiro 
objeto com as propriedades do segundo objeto mescladas nele. */


const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    }
}


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }