import { useState } from "react";
import { LoginStyle, ContainerLoginStyle } from "../../ui/styles/Login";
import { Link } from "react-router-dom";
import { SignUp } from "../../data/services/user";
import Modal from "react-modal";

const SignUpPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //MODAL PARA CONFIRMAÇÃO DE NOVO USUÁRIO
  const [newUserResult, setNewUserResult] = useState<number>(); //BUSCAR IMPLEMENTAR UMA LÓGICA MELHOR PARA MOSTRAR AS MENSAGENS DE ERRO
  //TIPO FOI DEFINIDO POR INFERÊNCIA
  const [formData, setFormData] = useState({
    name: {
      value: "",
      valid: true,
    },
    email: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
    repassword: {
      value: "",
      valid: true,
    },
  });

  const handleSubmit = async () => {
    //COMEÇANDO COM O TRATAMENTO DO ERRO "CAMPOS VAZIOS"
    if (
      !formData.name.value ||
      !formData.email.value ||
      !formData.password.value ||
      !formData.repassword.value
    ) {
      setFormData({
        name: {
          ...formData.name,
          valid: formData.name.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        email: {
          ...formData.email,
          valid: formData.email.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        password: {
          ...formData.password,
          valid: formData.password.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        repassword: {
          ...formData.repassword,
          valid: formData.repassword.value.trim() !== "", //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
      setNewUserResult(400); //COD DE ERRO DO CLIENTE
      return;
    }
    //ERRO SENHAS DIFERENTES
    if (formData.password.value !== formData.repassword.value) {
      setNewUserResult(400); //COD DE ERRO DO CLIENTE
      return;
    }
    const result = await SignUp(
      formData.email.value,
      formData.password.value,
      formData.name.value
    );
    //SE O RETORNO FOR UM NUMBER, É ERRO
    if (typeof result === "number") {
      setNewUserResult(result);
    }
    if (typeof result === "string") {
      //LIMPANDO OS CAMPOS, TEM ALGUMA FORMA MAIS LEGAL?
      setFormData({
        name: {
          value: "",
          valid: true,
        },
        email: {
          value: "",
          valid: true,
        },
        password: {
          value: "",
          valid: true,
        },
        repassword: {
          value: "",
          valid: true,
        },
      });
      openModal(); //MODAL PARA AVISAR QUE DEU CERTO A CRIAÇÃO DO USUÁRIO!
    }
  };

  const openModal = () => {

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ContainerLoginStyle>
      <LoginStyle>
        <h1>Arnia Trello</h1>
        <h2>Cadastro</h2>
        <div>
          <label htmlFor="name">Nome completo</label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name.value}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: { value: event.target.value, valid: true },
              })
            }
          />
          {!formData.name.valid && newUserResult === 400 && (
            <small>Insira o nome</small>
          )}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email.value}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: { value: event.target.value, valid: true },
              })
            }
          />
          {!formData.email.valid && newUserResult === 400 && (
            <small>Insira o e-mail!</small>
          )}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password.value}
            onChange={(event) =>
              setFormData({
                ...formData,
                password: { value: event.target.value, valid: true },
              })
            }
          />
          {!formData.password.valid && newUserResult === 400 && (
            <small>Insira a senha!</small>
          )}
        </div>
        <div>
          <label htmlFor="repassword">Repita sua senha</label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            value={formData.repassword.value}
            onChange={(event) =>
              setFormData({
                ...formData,
                repassword: { value: event.target.value, valid: true },
              })
            }
          />
          {!formData.repassword.valid && newUserResult === 400 && (
            <small>Insira novamente a senha!</small>
          )}
        </div>
        <div>
          <button onClick={() => handleSubmit()}>CADASTRAR</button>
        </div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Confirmação de criação de usuário"
        >
          <h2>USUÁRIO CRIADO COM SUCESSO!</h2>
          <button onClick={() => closeModal()}>OK</button>
        </Modal>
      </LoginStyle>
    </ContainerLoginStyle>
  );
};

export default SignUpPage;
