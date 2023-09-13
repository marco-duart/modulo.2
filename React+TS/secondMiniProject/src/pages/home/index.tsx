import { useEffect, useState, useCallback, useContext } from "react";
import { GetCards } from "../../data/services/card";
import { CardContext } from "../../data/contexts/CardContext";
import { HomeStyle } from "../../ui/styles/Home";
import Column from "../../ui/components/KanbanColumn/Column";
import Header from "../../ui/components/Header";
import NewColumn from "../../ui/components/KanbanColumn/NewColumn";

const Home = () => {
  const { cards, setCards } = useContext(CardContext);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await GetCards();
      setCards(newData);
    };
    fetchData();
  }, []);
  console.log(cards);
  return (
    <>
      <Header />
      <HomeStyle>
        <NewColumn />
        <Column column="TODO" />
        <Column column="DOING"/>
        <Column column="DONE"/>
      </HomeStyle>
    </>
  );
};

export default Home;
