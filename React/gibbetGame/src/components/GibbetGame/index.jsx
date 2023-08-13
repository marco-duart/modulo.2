import { useState } from 'react'

const isCorrect = (char, gamerChar) => char === gamerChar ? 1 : -1



const GibbetGame = () => {
    const word = 'escola'
    const characters = word.split('')
    const [points, setPoints] = useState(0)

    return (
        <div>
            <div>
                {characters.map((character) =>  <small key={character}>{character}</small>)}
            </div>
            <button onClick={() => setPoints(points + isCorrect(characters[0],'e'))}>Testar letra</button>
            <div>Pontos: {points}</div>
        </div>
    )
}

export default GibbetGame