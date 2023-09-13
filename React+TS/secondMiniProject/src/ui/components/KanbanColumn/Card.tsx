import { CardStyle } from "../../styles/Card"

//Tipo específico para essa prop
type Props = {
    card: IData
}

const Card = ({card}:Props) => {
    return (
        <CardStyle>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
        </CardStyle>
    )
}

export default Card