import { createContext, useState } from "react";

const QuestionsContext = createContext<IQuestionsContextData | null>(null)

const QuestionsContextProvider:React.FC<IQuestionsContextProviderProps> = ({ children }) => {
    const [ questions, setQuestions ] = useState<IDataArray>([])

    return (
        <QuestionsContext.Provider value={{questions, setQuestions}}>
            {children}
        </QuestionsContext.Provider>
    )
}

export { QuestionsContext, QuestionsContextProvider }