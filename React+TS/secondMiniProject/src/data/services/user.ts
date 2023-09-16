import { AxiosResponse, isAxiosError } from "axios";
import api from "./config";

type LoginApi = {
  token: string;
  name: string;
};

export const Login = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<LoginApi> = await api.post(
      "/api/user/login",
      {
        email,
        password,
      }
    );

    const token = userData.data.token;
    const userName = userData.data.name;

    localStorage.setItem("token", token);
    return userName;
  } catch (error) {
    if (isAxiosError(error)) {
      //retorna o valor no retorno da "response"
      return error.response?.status
    }
  }
};

type SignUpApi = {
  message: string;
};

export const SignUp = async (email: string, password: string, name: string) => {
  try {
    const userData: AxiosResponse<SignUpApi> = await api.post(
      "/api/user",
      {
        email,
        password,
        name,
      }
    );
    const responseMensage = userData.data.message;

    return responseMensage;
  } catch (error) {
    if (isAxiosError(error)) {
      //retorna o valor no retorno da "response"
      return error.response?.status
    }
  }
};