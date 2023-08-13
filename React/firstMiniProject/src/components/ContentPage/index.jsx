import { useState } from 'react'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout'
import {MainStyle, CartButton, PageOneButtonContainer, PageTwoButtonContainer, PageThreeButtonContainer} from './styles'

const changePage = (page, operation) => {
    if(operation === "+" && page<3) {
        return page+1
    }
    if(operation === "-" && page>1) {
        return page-1
    }
}

const ContentPage = ({products}) => {
    const [total, setTotal] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [cartItems, setCartItems] = useState([])

    const addToCart = (checkbox, gameId, product) => {
        if (checkbox) {
          setCartItems([...cartItems, product])
        } else {
          const updatedCart = cartItems.filter(item => item.id !== gameId)
          setCartItems(updatedCart)
        }
    }

    const changeItemAmount = (itemId, operation) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                if (operation === "+") return { ...item, amount: item.amount+1 }
                if (operation === "-") return { ...item, amount: item.amount-1 }
            }
            return item
        })
        setCartItems(updatedCart)
    }

    const changeTotalValue = (cartItems) => {
        const updatedTotal = cartItems.reduce((sum, item) => sum+(item.value*item.amount), 0)
        setTotal(updatedTotal)
    }

    return (
        <MainStyle>
            {currentPage === 1 && <Products products={products} cartItems={cartItems} addToCart={addToCart} changeTotalValue={changeTotalValue}/> }
            {currentPage === 2 && <ShoppingCart cartItems={cartItems} changeItemAmount={changeItemAmount} changeTotalValue={changeTotalValue} total={total} /> }
            {currentPage === 3 && <Checkout cartItems={cartItems} total={total} /> }
            <div style={{marginBottom: "20px", marginRight: "20px", marginLeft: "20px"}}>
                <PageOneButtonContainer>
                    {currentPage === 1 && <CartButton onClick={() => setCurrentPage(changePage(currentPage, "+"))}>Ir para o carrinho</CartButton>}
                </PageOneButtonContainer>
                <PageTwoButtonContainer>
                    {currentPage === 2 && <CartButton onClick={() => setCurrentPage(changePage(currentPage, "-"))}>Produtos</CartButton>}
                    {currentPage === 2 && <CartButton onClick={() => setCurrentPage(changePage(currentPage, "+"))}>Finalizar Compra</CartButton>}
                </PageTwoButtonContainer>
                <PageThreeButtonContainer>
                    {currentPage === 3 && <CartButton onClick={() => setCurrentPage(changePage(currentPage, "-"))}>Editar Compra</CartButton>}
                    {currentPage === 3 && <CartButton onClick={() => alert("Compra Realizada!")}>Confirmar Compra</CartButton>}
                </PageThreeButtonContainer>
            </div>
        </MainStyle>
    )
}

export default ContentPage