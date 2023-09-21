import { useEffect, useState, useCallback, useContext } from "react";
import { GetQuestions } from "../../data/services/questions";
import { QuestionsContext } from "../../data/contexts/QuestionsContext";
import Header from "../../ui/components/Header";

const HomePage = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    return null;
  }
  const { questions, setQuestions } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await GetQuestions();
        if (newData) {
          setQuestions(newData);
        }
      } catch (error) {
        console.log("Deu errooooooo!!!!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Header />
      {questions.map((item) => (
        <div key={item.id}>
          <h3>{item.question}</h3>
          <div>{item.answer}</div>
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePage;
