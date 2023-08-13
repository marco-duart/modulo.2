const products = [
	{
		name: 'Detergente',
		stock: 23,
		price: 3.4
    },
    {
        name: 'Veja Limpeza Pesada',
        stock: 5,
        price: 5.4

    },
    {
        name: 'Sabonete Dove',
        stock: 0,
        price: 3.0
    }
]

const StockList = () => {
    return (
        <ul>
            {products.map(product => (
                <div>
                    <li>{product.name}</li>
                    {product.stock > 0 ? <span><small>R$ {product.price}</small><button>Adicionar ao carrinho</button></span> : <small>O produto está esgotado</small>}
                </div>
            ))}
        </ul>
    )
}


export default StockList