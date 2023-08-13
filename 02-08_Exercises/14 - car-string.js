/* 14 - Crie uma função que recebe o seguinte objeto:
Utilize a destructuring para extrair as propriedades marca, modelo e motor do carro e retorne uma string no 
formato "O carro {marca} {modelo} tem um motor {motor}". */

const mostrarCarro = (carro) => {
    const {marca} = carro
    const {modelo} = carro
    const {motor} = carro.caracteristicas
    return `O carro ${marca} ${modelo} tem um motor ${motor}`
}

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  caracteristicas: {
    motor: "2.0",
    cor: "Prata"
  }
}

console.log(mostrarCarro(carro))