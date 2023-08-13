/* 12 - Crie uma função que recebe o seguinte objeto:
Utilize a destructuring para extrair o nome e as notas do aluno. Em seguida, calcule a média das notas e retorne 
uma string no formato "O aluno {nome} possui uma média de {media}". */

const resultadoFinal = (aluno) => {
    const {nome} = aluno
    const {notas} = aluno
    const media = notas.reduce((total, nota) => total + nota, 0)/notas.length
    return `O aluno ${nome} possui uma média de ${media}`
}

const aluno = {
  nome: "Pedro",
  notas: [7, 9, 8, 5]
}
console.log(resultadoFinal(aluno)) //Output: Ana