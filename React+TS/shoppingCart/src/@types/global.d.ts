interface ICartContext {
    cart: IProducts[] | undefined
    addToCart: (item: IProducts) => void
}

interface IProducts {
    "id": string
    "name": string
    "value": number
    "image": string
}