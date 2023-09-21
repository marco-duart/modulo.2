import { useState } from "react";
import { PostQuestion } from "../../../data/services/questions";
import Header from "../Header";

const CreateQuestion = () => {
  const [newData, setNewData] = useState({
    question: "",
    answer: "",
  });

  const handleSubmit = async () => {
    try {
      await PostQuestion(newData.question, newData.answer);
      return;
    } catch (error) {
      console.log("Errrooooo!!!!");
    }
  };

  return (
    <>
      <Header />
      <div>
        <label htmlFor="">Pergunta: </label>
        <input
          value={newData.question}
          type="text"
          name="question"
          id="question"
          onChange={(event) =>
            setNewData({
              ...newData,
              question: event.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="">Resposta: </label>
        <input
          value={newData.answer}
          type="text"
          name="answer"
          id="answer"
          onChange={(event) =>
            setNewData({
              ...newData,
              answer: event.target.value,
            })
          }
        />
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </>
  );
};

export default CreateQuestion;
