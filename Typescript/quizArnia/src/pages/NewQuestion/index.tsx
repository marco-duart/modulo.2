import React, { useState, ChangeEvent } from "react";

type PropsType = {
  questions: QuestionType[];
};

const NewQuestion = (props: PropsType) => {
  const inicializacao: QuestionType = {
    id: props.questions.length,
    question: "",
    options: ["", "", "", ""],
    correctOption: 0,
  };

  const [newQuestion, setNewQuestion] = useState<QuestionType>(inicializacao);

  const handleChange = () => {
  };

  return (
    <div>
      <div>
        <label htmlFor="question">Pergunta</label>
        <input
          type="text"
          name="question"
          value={newQuestion.question}
          onChange={handleChange}
        />
      </div>
      {newQuestion.options.map((option, index) => (
        <div key={index}>
          <label htmlFor="">Alternativa {index + 1}</label>
          <div>
            <input
              type="text"
              name="options"
              value={option}
              onChange={(event) => handleChange(event, index)}
            />
            <input
              type="radio"
              name="correct"
              value={index}
              checked={newQuestion.correctOption === index}
              onChange={}
            />
          </div>
        </div>
      ))}
      <div>
        <button onClick={() => }>Salvar</button>
      </div>
    </div>
  );
};

export default NewQuestion;
