import {
    TitleStyle, 
    ItemImageStyle, 
    CartCheckoutStyle,
    CartCheckoutTextStyle
} from './styles'

const Checkout = (prop) => {
    return (
        <div style={{marginBottom: "30px", marginLeft: "20px", marginRight: "20px"}}>
            <TitleStyle>Checkout</TitleStyle>
            <div>
                <CartCheckoutTextStyle>Produtos Escolhidos:</CartCheckoutTextStyle>
                <CartCheckoutStyle>
                    {prop.cartItems.map((game) => (
                        <div key={game.id}>
                            <ItemImageStyle src={game.image} alt={game.name} />
                        </div>
                    ))}
                </CartCheckoutStyle>
                <CartCheckoutTextStyle>Total produtos: {prop.cartItems.reduce((sum, item) => sum + item.amount,0)}</CartCheckoutTextStyle>
                <CartCheckoutTextStyle>Total: {prop.total.toFixed(2)}</CartCheckoutTextStyle>
            </div>
        </div>
    )
}

export default Checkout