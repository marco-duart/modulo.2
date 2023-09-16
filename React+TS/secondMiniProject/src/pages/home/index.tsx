import { useEffect, useState, useCallback, useContext } from "react";
import { GetCards } from "../../data/services/card";
import { CardContext } from "../../data/contexts/CardContext";
import { HomeStyle } from "../../ui/styles/Home";
import Column from "../../ui/components/KanbanColumn/Column";
import Header from "../../ui/components/Header";
import NewColumn from "../../ui/components/KanbanColumn/NewColumn";

const Home = () => {
  const context = useContext(CardContext);
  //UM IFZINHO PRA "OBRIGAR" O CONTEXTO A "SER" DE UM TIPO
  if (!context) {
    console.log("Num ta vindo nada");
    return null;
  }
  const { setCards } = context;

  useEffect(() => {
    const fetchData = async () => {
      const newData = await GetCards();
      if (newData) {
        setCards(newData);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <HomeStyle>
        <NewColumn />
        <Column column="TODO" />
        <Column column="DOING" />
        <Column column="DONE" />
      </HomeStyle>
    </>
  );
};

export default Home;
