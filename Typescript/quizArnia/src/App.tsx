import { useState } from 'react'
import BaseLayout from './layout/BaseLayout'
import data from './assets/constants/questions.json'
import QuestionsList from './pages/QuestionList'
import NewQuestion from './pages/NewQuestion'

function App() {
  const [questions, setQuestions] = useState<QuestionsType>(data as QuestionsType)
  return (
    <>
      {/* <QuestionsList questions={questions} /> */}
      <NewQuestion questions={questions}/>
    </>
  )
}

export default App
