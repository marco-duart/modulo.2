/* Exercício 10: Crie uma função que recebe o seguinte array de objetos representando produtos:
Utilize o método map para criar um novo array com o preço dos produtos após aplicar o desconto. */

const applyDiscount = (produtos) => {
    const novosProdutos = produtos.map(produto => {
        const novoProduto = {
            nome: produto.nome,
            preco: produto.preco-(produto.preco*produto.desconto)
        }
        return novoProduto
    })
    return novosProdutos
}

const produtos = [
  { nome: "Camiseta", preco: 20, desconto: 0.1 },
  { nome: "Calça", preco: 50, desconto: 0.2 },
  { nome: "Tênis", preco: 80, desconto: 0.15 }
];

const novosProdutos = applyDiscount(produtos)
console.log(novosProdutos)