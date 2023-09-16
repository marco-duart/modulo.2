import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { ColumnStyle } from "../../styles/Column";
import Card from "./Card";

type Props = {
  column: string;
};

const Column = ({ column }: Props) => {
  const context = useContext(CardContext);

  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { cards } = context;

  //SEPARANDO OS CARDS ESPECÍFICOS DA COLUNA
  const columnCards: IData[] = cards.filter(
    (card: IData) => card.column === column
  );
  return (
    <ColumnStyle>
      <div>{column}</div>
      {columnCards.map((card: IData) => (
        <div key={card._id}>
          <Card card={card} column={column}/>
        </div>
      ))}
    </ColumnStyle>
  );
};

export default Column;
