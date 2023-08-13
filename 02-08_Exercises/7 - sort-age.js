/* 7 - Dado o array de objetos com propriedades nome e idade:
Utilize o método sort com uma função de comparação para ordenar os objetos por idade, do mais jovem para o mais velho. */


const pessoas = [
  { nome: "Carlos", idade: 30 },
  { nome: "Alice", idade: 25 },
  { nome: "Eduardo", idade: 40 }
]

const novasPessoas = pessoas.sort((param) => {
    return param.idade;
  });
console.log(novasPessoas);