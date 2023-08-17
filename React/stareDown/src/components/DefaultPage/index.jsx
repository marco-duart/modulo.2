import { useState } from 'react'
import StareDown from '../StareDown'
import {GameOverCard, GameOverButton, GameOverImg, CryingIMG, CryingCatIMG, GameOverScore} from './style.js'
import gameover from '../../assets/img/gameover.png'
import crying from '../../assets/img/crying.png'
import cryingCat from '../../assets/img/cryingCat.png'

const DefaultPage = () => {
    const [screen, setScreen] = useState("GAME")
    const [score, setScore] = useState(0)

    return (
        <div>
            {screen === "GAME" && <StareDown setScreen={setScreen} setScore={setScore} />}
            {screen === "GAMEOVER" && (
                <GameOverCard>
                    <GameOverImg src={gameover} alt="" />
                    <GameOverScore>Pontos: {score}</GameOverScore>
                    <GameOverButton onClick={() => setScreen("GAME")}>
                        Recomeçar
                    </GameOverButton>
                    <CryingIMG src={crying} alt="" />
                    <CryingCatIMG src={cryingCat} alt="" />
                </GameOverCard>
            )}
        </div>
    )
}

export default DefaultPage