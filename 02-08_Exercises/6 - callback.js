/* Exercício 6: Crie uma função que recebe o seguinte objeto:
A função deve chamar a callback passando as propriedades a e b como argumentos e retornar o resultado. */

const resolucao = (operacoes) => {
    return operacoes.callback(operacoes.a, operacoes.b)
}

const operacoes = {
  a: 10,
  b: 5,
  callback: function(a, b) {
    return a + b;
  }
};

const resultado = resolucao(operacoes)
console.log(resultado) //Output: 15