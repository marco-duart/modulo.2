import { useContext, useState } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { CardStyle } from "../../styles/Card";
import { DeleteCard, PutCard, ChangeColumn } from "../../../data/services/card";

//TIPO ESPECÍFICO PARA ESSA PROP
type Props = {
  card: IData;
  column: string;
};

const Card = ({ card, column }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false); //CONFIRMAR SE ESTÁ EDITANDO
  const [editedTitle, setEditedTitle] = useState<string>(card.title); //VALOR TEMPORARIO DO TÍTULO
  const [editedContent, setEditedContent] = useState<string>(card.content); //VALOR TEMPORÁRIO DO CONTEÚDO
  const context = useContext(CardContext); //CONTEXTO
  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;

  //DELETAR O CARD (IMPLEMENTAR O MODAL DE CONFIRMAÇÃO)
  const handleDelete = async (id: string) => {
    const NewCards = await DeleteCard(id);
    if (NewCards) {
      setCards(NewCards);
    }
  };
  //MUDAR A COLUNA
  const handleChangeColumn = async (
    id: string,
    column: string,
    operator: string
  ) => {
    if (operator === "+") {
      if (column === "TODO") {
        const NewCards = await ChangeColumn(id, "DOING");
        if (NewCards) {
          setCards(NewCards);
        }
      }
      if (column === "DOING") {
        const NewCards = await ChangeColumn(id, "DONE");
        if (NewCards) {
          setCards(NewCards);
        }
      }
    }
    if (operator === "-") {
      if (column === "DOING") {
        const NewCards = await ChangeColumn(id, "TODO");
        if (NewCards) {
          setCards(NewCards);
        }
      }
      if (column === "DONE") {
        const NewCards = await ChangeColumn(id, "DOING");
        if (NewCards) {
          setCards(NewCards);
        }
      }
    }
  };
  //MUDAR PARA A RENDERIZAÇÃO DE ESTILO DE EDIÇÃO
  const handleEditClick = () => {
    setIsEditing(true);
  };
  //SALVAR A EDIÇÃO ENVIANDO PARA A API E RENDERIZANDO NOVAMENTE
  const handleSaveClick = async (
    id: string,
    title: string,
    content: string
  ) => {
    const NewCards = await PutCard(id, title, content);
    if (NewCards) {
      setCards(NewCards);
    }
    setIsEditing(false);
  };
  //CANCELAR A EDIÇÃO, RETORNA OS VALORES PADRÕES
  const handleCancelClick = () => {
    setEditedTitle(card.title);
    setEditedContent(card.content);
    setIsEditing(false);
  };

  return (
    <CardStyle>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(element) => setEditedTitle(element.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(element) => setEditedContent(element.target.value)}
          />
          <button
            onClick={() =>
              handleSaveClick(card._id, editedTitle, editedContent)
            }
          >
            Salvar
          </button>
          <button onClick={() => handleCancelClick()}>Cancelar</button>
        </>
      ) : (
        <>
          <h3>{card.title}</h3>
          <button onClick={handleEditClick}>Editar</button>
          <p>{card.content}</p>
          <button onClick={() => handleDelete(card._id)}>Deletar</button>
          {(column === "DOING" || column === "DONE") && (
            <button onClick={() => handleChangeColumn(card._id, column, "-")}>
              -
            </button>
          )}
          {(column === "TODO" || column === "DOING") && (
            <button onClick={() => handleChangeColumn(card._id, column, "+")}>
              +
            </button>
          )}
        </>
      )}
    </CardStyle>
  );
};

export default Card;
