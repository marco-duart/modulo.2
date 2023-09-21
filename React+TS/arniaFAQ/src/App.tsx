import { QuestionsContextProvider } from "./data/contexts/QuestionsContext"
import Router from "./router"
import GlobalStyle from "./ui/styles/globalStyle"

function App() {
  return (
    <>
      <GlobalStyle/>
      <QuestionsContextProvider>
        <Router />
      </QuestionsContextProvider>
    </>
  )
}

export default App
