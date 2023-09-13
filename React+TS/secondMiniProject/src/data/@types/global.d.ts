interface IData {
    "_id": string
    "title": string
    "content": string
    "column": string
    "userId": string
    "__v": number
}

interface CardContextData {
    cards: IData[];
    setCards: React.Dispatch<React.SetStateAction<IData[]>>;
}

interface CardContextProviderProps {
    children: ReactNode;
}

type Props = {
    data: IData[]
}