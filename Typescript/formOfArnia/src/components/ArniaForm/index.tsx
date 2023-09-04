import React, { useState } from "react";
import {
  FormContainer,
  FormTitleContainer,
  FormTitle,
  FormLabelItem,
  FormImputItem,
  FormButton,
  FormDiv,
  FormItemDiv,
} from "./style.ts";

type FormObj = {
  name: string;
  email: string;
  phone: string;
};

const ArniaForm = () => {
  const [first, setFirst] = useState(Math.floor(Math.random()*10))
  const [second, setSecond] = useState(Math.floor(Math.random()*10))
  const [third, setThird] = useState(Math.floor(Math.random()*10))
  const [answer, setAnswer] = useState(0)
  const [data, setData] = useState<FormObj>({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://landing-page-api.vercel.app/api/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
      } else {
        console.error("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <FormContainer>
      <FormTitleContainer>
        <FormTitle>
          Preencha o formulário abaixo e tenha acesso ao e-book “O passo-a-passo
          para se tornar um desenvolvedor de Software”
        </FormTitle>
      </FormTitleContainer>
      <FormDiv>
        <FormItemDiv>
          <FormLabelItem htmlFor="">Nome*</FormLabelItem>
          <FormImputItem
            type="text"
            value={data.name}
            onChange={(event) => setData({ ...data, name: event.target.value })}
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabelItem htmlFor="">E-mail*</FormLabelItem>
          <FormImputItem
            type="text"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabelItem htmlFor="">Telefone (Whatsapp)*</FormLabelItem>
          <FormImputItem
            type="text"
            value={data.phone}
            onChange={(event) =>
              setData({ ...data, phone: event.target.value })
            }
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabelItem htmlFor="">{first} + {second} - {third}?</FormLabelItem>
          <FormImputItem type="text"
            value={answer}
            onChange={(event) => setAnswer(Number(event.target.value))} />
        </FormItemDiv>
        <div>
          <FormButton onClick={handleSubmit}>BAIXAR E-BOOK</FormButton>
        </div>
      </FormDiv>
    </FormContainer>
  );
};

export default ArniaForm;
