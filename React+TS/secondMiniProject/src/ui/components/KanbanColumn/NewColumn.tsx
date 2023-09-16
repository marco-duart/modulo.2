import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { useState } from "react";
import { ColumnStyle } from "../../styles/Column";
import { CardStyle } from "../../styles/Card";
import { PostCard } from "../../../data/services/card";

const NewColumn = () => {
  //VALORES TEMPORÁRIOS PARA TITLE E CONTENT
  const [cardForm, setCardForm] = useState({
    title: {
      value: "",
      valid: true,
    },
    content: {
      value: "",
      valid: true,
    },
  });
  const context = useContext(CardContext);

  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;

  //SALVAR A EDIÇÃO ENVIANDO PARA A API E RENDERIZANDO NOVAMENTE
  const handleSaveClick = async () => {
    if (!cardForm.title.value || !cardForm.content.value) {
      setCardForm({
        title: {
          ...cardForm.title,
          valid: cardForm.title.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        content: {
          ...cardForm.content,
          valid: cardForm.content.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
      console.log
      return;
    }
    const NewCards = await PostCard(
      cardForm.title.value,
      cardForm.content.value
    );
    if (NewCards) {
      //LIMPANDO OS CAMPOS APÓS GERAR NOVO CARD
      setCardForm({
        title: {
          value: "",
          valid: true,
        },
        content: {
          value: "",
          valid: true,
        },
      })
      setCards(NewCards);
    }
  };

  return (
    <ColumnStyle>
      <div>NEW</div>
      <CardStyle>
        <input
          type="text"
          value={cardForm.title.value}
          onChange={(element) =>
            setCardForm({
              ...cardForm,
              title: { value: element.target.value, valid: true },
            })
          }
        />
        <textarea
          value={cardForm.content.value}
          onChange={(element) =>
            setCardForm({
              ...cardForm,
              content: { value: element.target.value, valid: true },
            })
          }
        />
        {(!cardForm.title.valid || !cardForm.content.valid) && (
          <small>Preencha todos os campos!</small>
        )}
        <button onClick={() => handleSaveClick()}>Salvar</button>
      </CardStyle>
    </ColumnStyle>
  );
};

export default NewColumn;
