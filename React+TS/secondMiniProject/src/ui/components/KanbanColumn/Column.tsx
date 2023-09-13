import { useContext } from "react";
import Card from "./Card";
import { CardContext } from "../../../data/contexts/CardContext";

const Column = ({column}) => {
  const {cards, setCards} = useContext(CardContext)
  const columnCards = cards.filter(card => card.column === column);
  return (
    <div>
        {columnCards.map((card) => <Card card={card}/> )}
    </div>
  );
};

export default Column;
