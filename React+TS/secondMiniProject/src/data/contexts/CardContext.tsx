import React, { createContext, useState } from 'react';

const CardContext = createContext<CardContextData | null>(null);

const CardContextProvider:React.FC<CardContextProviderProps> = ({ children }) => {
    const [cards, setCards] = useState<IData[]>([])

    return (
        <CardContext.Provider value={{cards, setCards}}>
            {children}
        </CardContext.Provider>
    )
}

export { CardContextProvider, CardContext };