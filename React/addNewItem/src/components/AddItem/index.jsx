import { useState } from "react"

const newItems = [
    "jogo de talheres",
    "tábua de corte",
    "ralador",
    "peneiras",
    "conjuntos de medidores",
    "protetor de colchão",
    "colchas",
    "jogos de lençol",
    "edredom",
    "toalhas de banho",
    "toalhas de rosto",
    "toalhas de piso",
    "roupões",
    "toalhas de lavabo",
    "pares de chinelo",
    "difusor aromático",
    "porta-velas",
    "mantas decorativas",
    "almofadas",
    "porta-retratos",
    "vasos"
]

const newArray = (arrayItens) => [...arrayItens, newItems[arrayItens.length-3]]

const AddItem = () => {
    const [currentItens, setCurrentItens] = useState(["panelas", "panela de pressão", "frigideiras"])

    return (
        <div>
            <ul>
                {currentItens.map(item => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={() => setCurrentItens(newArray(currentItens))}>Add Item</button>
        </div>
    )
}

export default AddItem