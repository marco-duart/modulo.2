import { useEffect, useState, useCallback, useContext } from "react";
import Column from "../../ui/components/KanbanColumn/Column";
import { GetCards } from "../../data/services/card";
import { CardContext } from "../../data/contexts/CardContext";

const Home = () => {
  const {cards, setCards} = useContext(CardContext)

  useEffect(() => {
    const fetchData = async () => {
      const newData = await GetCards();
      setCards(newData);
    };
    fetchData();
  }, []);
  console.log(cards)
  return (
    <>
      <Column column="DONE"/>
{/*       <Column column="DOING"/>
      <Column column="DONE"/> */}
    </>
  );
};

export default Home;
