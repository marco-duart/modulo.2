import { useState, useEffect } from "react";
import { LoginStyle, ContainerLoginStyle } from "../../ui/styles/Login";
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "../../data/services/user";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [newUserResult, setNewUserResult] = useState<number>();
  const [repassword, setRepassword] = useState<string>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const result = await SignUp(
      formData.email,
      formData.password,
      formData.name
    );
    if (typeof result === "number") {
      console.log("Veio Number")
      setNewUserResult(result);
    }
    if (typeof result === "string") {
      console.log("Veio String")
      navigate("/");
    }
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
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="repassword">Repita sua senha</label>
          <input
            type="repassword"
            id="repassword"
            name="repassword"
            value={repassword}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
        </div>
        <div>
          {newUserResult === 404 && <small>Usuário não cadastrado</small>}
        </div>
        <div>
          <button onClick={() => handleSubmit()}>CADASTRAR</button>
        </div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
      </LoginStyle>
    </ContainerLoginStyle>
  );
};

export default SignUpPage;
