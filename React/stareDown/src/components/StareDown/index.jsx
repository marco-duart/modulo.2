import { useState } from 'react'

const sortRandomNumber = () => Math.floor(Math.random() * 16)

const sortColorString = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

const StareDown = () => {
    const initialColors = Array.from({ length: 16 }, () => sortColorString());
    const [colors, setColors] = useState(initialColors)
    const [result, setResult] = useState(colors[sortRandomNumber()])
    const [randomNumber, setRandomNumber] = useState(sortRandomNumber())
    const [lives, setLives] = useState(5)
    const [score, setScore] = useState(0)
    


    const changeColors = () => {
        const updatedColors = colors.map(item => sortColorString())
        const updatedResult = updatedColors[Math.floor(Math.random() * updatedColors.length)]
        setRandomNumber(sortRandomNumber())
        while(updatedColors[randomNumber] === updatedResult) {
            setRandomNumber(sortRandomNumber())
        }
        updatedColors[randomNumber] = updatedResult
        
        setResult(updatedResult)
        setColors(updatedColors)
    }

    const gaming = (cor) => {
        if(cor === result) {
            const updatedScore = score + 10
            setScore(updatedScore)
            changeColors()
        } else {
            const updatedLives = lives - 1
            setLives(updatedLives)
            if(updatedLives > 0) {
                changeColors()
            } else {
                alert("Perdeu!")
            }
        }
    }

    return (
        <div>
            <div style={{display: "flex"}}>
                {colors.map(cor => <p key={Math.random()} style={{width: "60px", height: "60px", backgroundColor: cor}} onClick={() => gaming(cor)}></p>)}
            </div>
            <button onClick={() => changeColors()}>Change color</button>
            <p>Pontos: {score} Vidas: {lives}</p>
            <p style={{width: "60px", height: "60px", backgroundColor: result}}></p>
        </div>
    )
}

export default StareDown