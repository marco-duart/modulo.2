interface IData {
    "id": string
    "question": string
    "answer": string
}

interface IDataArray extends Array<IData> {}

interface IQuestionsContextData {
    questions: IData[];
    setQuestions: React.Dispatch<React.SetStateAction<IData[]>>;
}

interface IQuestionsContextProviderProps {
    children: ReactNode;
}

type Props = {
    data: IData[]
}