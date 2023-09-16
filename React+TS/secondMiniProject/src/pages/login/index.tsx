import { useState, useEffect } from "react";
import { LoginStyle, ContainerLoginStyle } from "../../ui/styles/Login";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../data/services/user";

const LoginPage = () => {
  localStorage.removeItem("token");
  const [loginResult, setLoginResult] = useState<number>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const result = await Login(formData.email, formData.password);
    if (typeof result === 'number') {
      setLoginResult(result);
    } 
    if (typeof result === 'string') {
      navigate("/home");
    }
  };

  return (
    <ContainerLoginStyle>
      <LoginStyle>
        <h1>Arnia Trello</h1>
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
          {loginResult === 404 && (
            <small>Usuário não cadastrado</small>
          )}
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
          {loginResult === 401 && <small>Senha incorreta</small>}
        </div>
        <div>
          {formData.email} &&& {formData.password}
        </div>
        <div>
          <button onClick={() => handleSubmit()}>ENTRAR</button>
        </div>
        <div>
          <Link to="/signup">Cadastre-se</Link>
        </div>
      </LoginStyle>
    </ContainerLoginStyle>
  );
};

export default LoginPage;
