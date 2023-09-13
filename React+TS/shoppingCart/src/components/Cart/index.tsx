import { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"

type Props = {
    products: IProducts[]
}

const Cart = (props: Props) => {
    const { cart } = useContext<ICartContext>(CartContext)
    return (
        <div>{cart}</div>
    )
}

export default Cart