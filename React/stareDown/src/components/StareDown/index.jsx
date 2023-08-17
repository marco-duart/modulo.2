import React, { useState } from 'react'
import {TitleOfCard, InforStatus, PageCard, ColorsBox, ColorBlock, ColorButton} from './style.js'

const sortRandomNumber = () => Math.floor(Math.random() * 16)

const sortColorString = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const resetColors = (array) => array.map(item => '#FFF')

const amountLives = ["💚", "💚", "💚", "💚", "💚"]

const StareDown = (prop) => {
    const [colors, setColors] = useState(Array.from({ length: 16 }, () => '#FFF'))
    const [result, setResult] = useState('')
    const [lives, setLives] = useState(amountLives)
    const [score, setScore] = useState(0)

    const changeColors = (restart = null) => {
        if(restart) {
            setLives(amountLives)
            setScore(0)
            prop.setScore(0)
        }
        const updatedColors = colors.map(item => sortColorString())
        const updatedResult = updatedColors[sortRandomNumber()]
        let newRandomNumber = sortRandomNumber()
        while (updatedColors[newRandomNumber] === updatedResult) {
            newRandomNumber = sortRandomNumber()
        }
        updatedColors[newRandomNumber] = updatedResult
        setResult(updatedResult)
        setColors(updatedColors)
    }

    const gaming = (cor) => {
        if(cor !== "#FFF") {
            if (cor === result) {
                const updatedScore = score + 10
                setScore(updatedScore)
                prop.setScore(updatedScore)
                changeColors()
            } else {
                const updatedLives = lives.filter((live, index) => index < lives.length-1)
                setLives(updatedLives)
                if (updatedLives.length <= 0) {
                    setColors(resetColors(colors))
                    prop.setScreen("GAMEOVER")
                }
            }
        }
    }



    return (
        <PageCard>
            <TitleOfCard>Find duplicate color</TitleOfCard>
            <InforStatus>
                Score: {score} Health: {lives}
            </InforStatus>
            <ColorsBox >
                {colors.map((cor, index) => (
                <ColorBlock
                    key={index}
                    style={{backgroundColor: cor }}
                    onClick={() => gaming(cor)}
                ></ColorBlock>
                ))}
            </ColorsBox >
            <ColorButton onClick={() => changeColors(true)}>Begin</ColorButton>
            {/* <ColorBlock style={{backgroundColor: result }}></ColorBlock> */}
        </PageCard>
    )
}


export default StareDown