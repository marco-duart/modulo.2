import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { ColumnStyle } from "../../styles/Column";
import Card from "./Card";

type Props = {
  column: string;
};

const Column = ({ column }: Props) => {
  const context = useContext(CardContext);
  //Um ifzinho pra "obrigar" o contexto ter um tipo
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }

  const { cards, setCards } = context;
  const columnCards: IData[] = cards.filter(
    (card: IData) => card.column === column
  );
  return (
    <ColumnStyle>
      <div>{column}</div>
      {columnCards.map((card: IData) => (
        <Card card={card} />
      ))}
    </ColumnStyle>
  );
};

export default Column;
