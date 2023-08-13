/* 6 - Crie uma função que receba uma propriedade e um valor, e adicione em um objeto já existe, criando um novo objeto. */

const addProperty = (person, property, propertyValue) => {
    let newPerson = {
        ...person
    }
    newPerson[property] = propertyValue
    return newPerson
}

const person = { name: 'Marcos', age: 34 };
const updatedPerson = addProperty(person, 'state', 'Bahia');
console.log(updatedPerson); // Output: { name: 'Marcos', age: 34, state: 'Bahia' }