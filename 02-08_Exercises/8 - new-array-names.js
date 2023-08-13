/* Exercício 8: Crie uma função que recebe o seguinte objeto:
Utilize a destructuring para extrair o nome e, em seguida, utilize o método map para criar um novo array contendo o nome de cada item. */

const listaCompras = {
  nome: "Supermercado",
  itens: ["Maçãs", "Bananas", "Laranjas"]
}
const {itens} = listaCompras
const nomes = itens.map(item => item)
console.log(nomes) //Output: [ 'Maçãs', 'Bananas', 'Laranjas' ]
