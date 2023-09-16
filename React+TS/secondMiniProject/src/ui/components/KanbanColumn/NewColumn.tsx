import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { useState } from "react";
import { ColumnStyle } from "../../styles/Column";
import { CardStyle } from "../../styles/Card";
import { PostCard } from "../../../data/services/card";

const NewColumn = () => {
  const [cardTitle, setcardTitle] = useState<string>(""); //VALOR TEMPORARIO DO TÍTULO
  const [cardContent, setcardContent] = useState<string>(""); //VALOR TEMPORÁRIO DO CONTEÚDO
  const context = useContext(CardContext);

  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;

  //SALVAR A EDIÇÃO ENVIANDO PARA A API E RENDERIZANDO NOVAMENTE
  const handleSaveClick = async () => {
    const NewCards = await PostCard(cardTitle, cardContent);
    if (NewCards) {
      setCards(NewCards);
    }
  };

  return (
    <ColumnStyle>
      <div>NEW</div>
      <CardStyle>
        <input
          type="text"
          value={cardTitle}
          onChange={(element) => setcardTitle(element.target.value)}
        />
        <textarea
          value={cardContent}
          onChange={(element) => setcardContent(element.target.value)}
        />
        <button onClick={() => handleSaveClick()}>Salvar</button>
      </CardStyle>
    </ColumnStyle>
  );
};

export default NewColumn;
