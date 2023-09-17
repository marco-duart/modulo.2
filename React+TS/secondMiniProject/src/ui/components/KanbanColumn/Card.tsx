import { useContext, useState } from "react";
import { CardContext } from "../../../data/contexts/CardContext";
import {
  StyledModal,
  NegateButton,
  AcceptButton,
  CardStyle,
  SectionCardStyle,
  TitleCardStyle,
  TitleInputCardStyle,
  ContentCardStyle,
  ContentInputCardStyle,
  IcoSectionCardStyle,
  MidIconImg, 
  LeftIconImg, 
  RightIconImg,
} from "../../styles/Card";
import { DeleteCard, PutCard, ChangeColumn } from "../../../data/services/card";
import editIco from "../../../assets/image/edit.png";
import prevIco from "../../../assets/image/previous.png";
import nextIco from "../../../assets/image/next.png";
import deleteIco from "../../../assets/image/delete.png";
import saveIco from "../../../assets/image/save.png";
import cancelIco from "../../../assets/image/cancel.png";

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
  });
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
    if (!editCard.title.value || !editCard.content.value) {
      setEditCard({
        title: {
          ...editCard.title,
          valid: editCard.title.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        content: {
          ...editCard.content,
          valid: editCard.content.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
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
    });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <CardStyle>
          <TitleInputCardStyle
            type="text"
            value={editCard.title.value}
            onChange={(element) =>
              setEditCard({
                ...editCard,
                title: { value: element.target.value, valid: true },
              })
            }
          />
          <ContentInputCardStyle
            value={editCard.content.value}
            onChange={(element) =>
              setEditCard({
                ...editCard,
                content: { value: element.target.value, valid: true },
              })
            }
          />
          {(!editCard.title.valid || !editCard.content.valid) && (
            <small>Preencha todos os campos!</small>
          )}
          <IcoSectionCardStyle>
            <LeftIconImg src={cancelIco} alt="cancel" onClick={() => handleCancelClick()}/>
            <RightIconImg src={saveIco} alt="save" onClick={() => handleSaveClick(card._id, editCard.title.value, editCard.content.value)}/>
          </IcoSectionCardStyle>
        </CardStyle>
      ) : (
        <CardStyle>
          <SectionCardStyle>
            <TitleCardStyle>{card.title}</TitleCardStyle>
            <RightIconImg
              src={editIco}
              alt="edit"
              onClick={() => handleEditClick()}
            />
          </SectionCardStyle>
          <ContentCardStyle>{card.content}</ContentCardStyle>
          <IcoSectionCardStyle>
              {(column === "DOING" || column === "DONE") && (<LeftIconImg src={prevIco} alt="previous" onClick={() => handleChangeColumn(card._id, column, "-")} />)}
              <MidIconImg src={deleteIco} alt="delete" onClick={() => openModal()} />
              {(column === "TODO" || column === "DOING") && (<RightIconImg src={nextIco} alt="edit" onClick={() => handleChangeColumn(card._id, column, "+")} />)}
          </IcoSectionCardStyle>
        </CardStyle>
      )}
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmação de Exclusão"
      >
        <TitleCardStyle>DESEJA REALMENTE EXCLUIR ESTE CARD?</TitleCardStyle>
        <SectionCardStyle>
          <NegateButton onClick={() => closeModal()}>NÃO</NegateButton>
          <AcceptButton onClick={() => handleDelete(card._id)}>SIM</AcceptButton>
        </SectionCardStyle>
      </StyledModal>
    </>
  );
};

export default Card;
