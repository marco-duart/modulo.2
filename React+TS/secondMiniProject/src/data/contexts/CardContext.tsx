import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
    const [cards, setCards] = useState([])

    return (
        <CardContext.Provider value={{cards, setCards}}>
            {children}
        </CardContext.Provider>
    )
}

export { CardContextProvider, CardContext };