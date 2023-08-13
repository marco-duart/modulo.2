/* 2 - Dado o seguinte array de objetos que representa produtos em um e-commerce: */

const calcularTotal = (produtos) => produtos.reduce((total, produto) => total + produto.preco,0);

const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
];

const total = calcularTotal(produtos);
console.log(total); // Output: 189.7