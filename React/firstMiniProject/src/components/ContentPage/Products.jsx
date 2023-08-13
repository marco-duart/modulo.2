import React, { useState } from 'react'
import {TitleContainerStyle, TitleStyle, CartAmountContainer, GameContainerStyle, GameCardStyle, GameImageStyle, IHateCheckbox} from './styles'

const Products = (props) => {
  const [cartItems, setCartItems] = useState(props.cartItems)
  const [checkedItems, setCheckedItems] = useState(cartItems.map(item => item.id))

  const localAddCart = (checkbox, gameId, product) => {
    if (checkbox) {
      const updatedProduct = {...product, amount: 1}
      const updatedCart = [...cartItems, updatedProduct]
      setCartItems(updatedCart)
      props.addToCart(true, gameId, updatedProduct)
      setCheckedItems([...checkedItems, gameId])
      props.changeTotalValue(updatedCart)
    } else {
      const updatedCart = cartItems.filter(item => item.id !== gameId)
      setCartItems(updatedCart)
      props.addToCart(false, gameId, product)
      setCheckedItems(checkedItems.filter(id => id !== gameId))
      props.changeTotalValue(updatedCart)
    }
  }

  return (
    <div>
      <TitleContainerStyle>
        <TitleStyle>Produtos</TitleStyle>
        <CartAmountContainer>{cartItems.length}</CartAmountContainer>
      </TitleContainerStyle>
      <GameContainerStyle>
        {props.products.map((game) => (
          <GameCardStyle key={game.id}>
            <GameImageStyle src={game.image} alt={game.name} />
            <IHateCheckbox>
              <input type="checkbox" name={game.name} id={game.id} checked={checkedItems.includes(game.id)} onChange={(check) => localAddCart(check.target.checked, game.id, game)}/>
              <strong>Valor: R${game.value.toFixed(2)}</strong>
            </IHateCheckbox>
          </GameCardStyle>
        ))}
      </GameContainerStyle>
    </div>
  )
}

export default Products