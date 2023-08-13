import { useState } from "react"

const frases = [
    "A palavra “impossível” foi inventada para ser desafiada.",
    "Somos capazes de fazer muito mais do que imaginamos!",
    "Nós somos como o clima: feitos de dias de chuva e de sol!",
    "Que todos os nossos passos nos levem para o que nos faz feliz de verdade.",
    "Abra os olhos e aventure-se nessa jornada chamada vida!",
    "Há tantas pessoas que torcem por você na vida.",
    "Há ainda tanta coisa linda na vida para se descobrir.",
    "Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.",
    "Siga sempre confiante do seu potencial!",
    "Hoje é um novo dia. Não fique pensando no ontem."
]

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

const RandomPhrase = () => {
    const [activePhrase, setActivePhrase] = useState(1)

    return (
        <div>
            <button onClick={() => setActivePhrase(randomIntFromInterval(0,frases.length - 1))}>Mudar Frase</button>
            <p>{frases[activePhrase]}</p>
        </div>
    )
}

export default RandomPhrase