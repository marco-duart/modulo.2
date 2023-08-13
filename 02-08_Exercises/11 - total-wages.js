/* Exercício 11: Dado o array de objetos com propriedades nome e salario:
Crie uma função que utilize o método reduce para calcular o salário total de todos os funcionários. */

const somaSalarios = (funcionarios) => {
    return funcionarios.reduce((soma, funcionario) => soma + funcionario.salario, 0)
}

const funcionarios = [
  { nome: "João", salario: 2500 },
  { nome: "Maria", salario: 3000 },
  { nome: "Carlos", salario: 2200 }
]

const totalSalarios = somaSalarios(funcionarios)
console.log(totalSalarios)