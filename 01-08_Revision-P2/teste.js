let numeros = [1,2,3,4,5,6]

/* numeros.splice(1,1) Remove algo*/
numeros.splice(1,1)


console.log(numeros)


/* ------------------------ */

const removeProperties = (person,propertiesToRemove) => Object.keys(person).map((atribute) => {
    console.log(atribute)
    console.log(person[atribute])
});

const person = { name: 'John', age: 30, city: 'New York' };
const propertiesToRemove = ['age', 'city'];
const newPerson = removeProperties(person, propertiesToRemove);
/* console.log(newPerson); // Output: { name: 'John' } */
/* ------------------------ */