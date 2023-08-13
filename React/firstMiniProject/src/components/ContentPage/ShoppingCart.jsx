import { useState } from 'react'
import {
    TitleContainerStyle, 
    TitleStyle, 
    CartAmountContainer, 
    ItemImageStyle, 
    ContainerCartListStyle, 
    CartListStyle, 
    ItemCartCardStyle, 
    ItemCartTitleStyle, 
    ItemCartDescriptionStyle, 
    ItemCartButtonStyle,
    ItemCartButtonContainerStyle,
    ItemCartTotal
} from './styles'

const ShoppingCart = (prop) => {
    const [cartItems, setCartItems] = useState(prop.cartItems)
    const [total, setTotal] = useState(prop.total)

    const changeItemAmount = (itemId, operation) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                if (operation === "+") return { ...item, amount: item.amount+1 }
                if (operation === "-") return { ...item, amount: item.amount-1 }
            }
            return item
        })
        setCartItems(updatedCart)
        prop.changeItemAmount(itemId, operation)
        changeLocalTotalValue(updatedCart)
        prop.changeTotalValue(updatedCart)
    }

    const changeLocalTotalValue = (cartItems) => {
        const updatedTotal = cartItems.reduce((sum, item) => sum+(item.value*item.amount), 0)
        setTotal(updatedTotal)
    }

    return (
        <div style={{marginBottom: "30px"}}>
            <TitleContainerStyle>
                <TitleStyle>Carrinho</TitleStyle>
                <CartAmountContainer>{cartItems.length}</CartAmountContainer>
            </TitleContainerStyle>
            <ContainerCartListStyle>
                {cartItems.map((game) => (
                    <CartListStyle key={game.id}>
                        <ItemImageStyle src={game.image} alt={game.name} />
                        <ItemCartCardStyle>
                            <ItemCartTitleStyle>{game.name}</ItemCartTitleStyle>
                            <ItemCartDescriptionStyle>Valor: R${(game.amount * game.value).toFixed(2)}</ItemCartDescriptionStyle>
                            <ItemCartDescriptionStyle>Quantidade: {game.amount}</ItemCartDescriptionStyle>
                            <ItemCartButtonContainerStyle>
                                <ItemCartButtonStyle onClick={() => changeItemAmount(game.id, "+")}>+</ItemCartButtonStyle>
                                {game.amount > 1 && <ItemCartButtonStyle onClick={() => changeItemAmount(game.id, "-")}>-</ItemCartButtonStyle>}
                            </ItemCartButtonContainerStyle>
                        </ItemCartCardStyle>
                    </CartListStyle>
                ))}
            </ContainerCartListStyle>
            <ItemCartTotal>Total: R${total.toFixed(2)}</ItemCartTotal>
        </div>
    )
}

export default ShoppingCart