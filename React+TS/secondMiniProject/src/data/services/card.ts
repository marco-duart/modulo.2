import { isAxiosError } from "axios";
import api from "./config";

export const GetCards = async () => {
  try {
    const token = localStorage.getItem("token");
    const cards = await api.get("/api/card", {
      headers: { Authorization: token },
    });
    return cards.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateCard = async () => {
  try {
    const token = localStorage.getItem("token");
    const cards = await api.post("/api/card", {
      headers: { Authorization: token },
    });
    return cards.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCard = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const cards = await api.delete(`/api/card/${id}`, {
      headers: { Authorization: token },
    });
    return cards.data;
  } catch (error) {
    if (isAxiosError(error)) {
      //retorna o valor no retorno da "response"
      return null;
    }
    return null;
  }
};

export const PutCard = async (id: string, title:string, content: string) => {
  try {
    const token = localStorage.getItem("token");
    const cards = await api.put(
      `/api/card/${id}`,
      { 
        title,
        content,
      },
      {
        headers: { Authorization: token },
      }
    );
    return cards.data;
  } catch (error) {
    console.log(error);
  }
};

export const ChangeColumn = async (id: string, column: string) => {
  try {
    const token = localStorage.getItem("token");
    const cards = await api.put(
      `/api/card/${id}`,
      { column },
      {
        headers: { Authorization: token },
      }
    );
    return cards.data;
  } catch (error) {
    console.log(error);
  }
};
