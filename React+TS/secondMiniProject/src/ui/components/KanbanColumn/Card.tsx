import { useContext, useState } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import { CardStyle } from "../../styles/Card";
import { DeleteCard, PutCard, ChangeColumn } from "../../../data/services/card";
import Modal from "react-modal";

//TIPO ESPECÍFICO PARA ESSA PROP
type Props = {
  card: IData;
  column: string;
};

const Card = ({ card, column }: Props) => {
  const [editCard, setEditCard] = useState({
    title: {
      value: card.title,
      valid: true,
    },
    content: {
      value: card.title,
      valid: true,
    },
  })
  const [isModalOpen, setIsModalOpen] = useState(false); //MODAL PARA CONFIRMAÇÃO DE EXCLUSÃO
  const [isEditing, setIsEditing] = useState<boolean>(false); //CONFIRMAR SE ESTÁ EDITANDO
  const context = useContext(CardContext); //CONTEXTO
  
  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;
  
  //FUNÇÕES DE ABRIR E FECHAR MODAL
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //DELETAR O CARD
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
    if(!editCard.title.value || !editCard.content.value) {
      setEditCard({
        title: {
          ...editCard.title,
          valid: editCard.title.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        content: {
          ...editCard.content,
          valid: editCard.content.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      })
      return;
    }
    const NewCards = await PutCard(id, title, content);
    if (NewCards) {
      setCards(NewCards);
    }
    setIsEditing(false);
  };

  //CANCELAR A EDIÇÃO, RETORNA OS VALORES PADRÕES
  const handleCancelClick = () => {
    setEditCard({
      title: {
        value: card.title,
        valid: true,
      },
      content: {
        value: card.content,
        valid: true,
      },
    })
    setIsEditing(false);
  };

  return (
    <CardStyle>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editCard.title.value}
            onChange={(element) => setEditCard({...editCard, title: {value: element.target.value, valid: true}})}
          />
          <textarea
            value={editCard.content.value}
            onChange={(element) => setEditCard({...editCard, content: {value: element.target.value, valid: true}})}
          />
          {(!editCard.title.valid || !editCard.content.valid) && <small>Preencha todos os campos!</small>}
          <button onClick={() => handleSaveClick(card._id, editCard.title.value, editCard.content.value)}>
            Salvar
          </button>
          <button onClick={() => handleCancelClick()}>Cancelar</button>
        </>
      ) : (
        <>
          <h3>{card.title}</h3>
          <button onClick={handleEditClick}>Editar</button>
          <p>{card.content}</p>
          <button onClick={() => openModal()}>Deletar</button>
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
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Confirmação de Exclusão">
        <h2>DESEJA REALMENTE EXCLUIR ESTE CARD?</h2>
        <button onClick={() => closeModal()}>NÃO</button>
        <button onClick={() => handleDelete(card._id)}>SIM</button>
      </Modal>
    </CardStyle>
  );
};

export default Card;
