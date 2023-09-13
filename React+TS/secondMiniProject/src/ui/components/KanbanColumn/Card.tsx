import { CardStyle } from "../../styles/Card"

const Card = ({card}) => {
    return (
        <CardStyle>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
        </CardStyle>
    )
}

export default Card