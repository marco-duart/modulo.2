import { useState } from "react";
import { LoginStyle, ContainerLoginStyle, TitleLoginStyle, SectionLoginStyle, LabelLoginStyle, InputLoginStyle, ButtonLoginStyle, StyledLink, SmallLoginStyle } from "../../ui/styles/Login";
import { useNavigate } from "react-router-dom";
import { Login } from "../../data/services/user";

const LoginPage = () => {
  localStorage.removeItem("token");
  const navigate = useNavigate();
  const [loginResult, setLoginResult] = useState<number>();
  const [formData, setFormData] = useState({
    email: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
  });

  const handleSubmit = async () => {
    if (!formData.email.value || !formData.password.value) {
      setFormData({
        email: {
          ...formData.email,
          valid: formData.email.value.trim() !== "" //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
        password: {
          ...formData.password,
          valid: formData.password.value.trim() !== "" //SE ESTIVER EM BRANCO, RESULTA EM FALSE
        },
      });
      setLoginResult(400);//COD DE ERRO DO CLIENTE
      return;
    }
    const result = await Login(formData.email.value, formData.password.value);
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
        <TitleLoginStyle>Arnia Trello</TitleLoginStyle>
        <SectionLoginStyle>
          <LabelLoginStyle htmlFor="email">E-mail</LabelLoginStyle>
          <InputLoginStyle
            type="email"
            id="email"
            name="email"
            value={formData.email.value}
            onChange={(event) => setFormData({...formData, email: {value: event.target.value, valid: true,},})}
          />
          {(!formData.email.valid && loginResult === 400) && <SmallLoginStyle>Insira o e-mail!</SmallLoginStyle>}
          {loginResult === 404 && <SmallLoginStyle>Usuário não cadastrado</SmallLoginStyle>}
        </SectionLoginStyle>
        <SectionLoginStyle>
          <LabelLoginStyle htmlFor="password">Senha</LabelLoginStyle>
          <InputLoginStyle
            type="password"
            id="password"
            name="password"
            value={formData.password.value}
            onChange={(event) => setFormData({ ...formData, password: {value: event.target.value, valid: true} })}
          />
          {(!formData.password.valid && loginResult === 400) && <SmallLoginStyle>Insira a senha!</SmallLoginStyle>}
          {loginResult === 401 && <SmallLoginStyle>Senha incorreta!</SmallLoginStyle>}
        </SectionLoginStyle>
        <div>
          <ButtonLoginStyle onClick={() => handleSubmit()}>ENTRAR</ButtonLoginStyle>
        </div>
        <div>
          <StyledLink to="/signup">Cadastre-se</StyledLink>
        </div>
      </LoginStyle>
    </ContainerLoginStyle>
  );
};

export default LoginPage;