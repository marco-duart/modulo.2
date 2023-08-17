import {styled} from "styled-components"

const GameOverImg = styled.img`
    width: 600px;
    height: 200px;
    object-fit: cover;
`

const GameOverScore = styled.h1`
    color: white;
    font-weight: bold;
`

const CryingIMG = styled.img`
    position: fixed;
    bottom: -1%;
    left: 0;
    width: 400px;
`

const CryingCatIMG = styled.img`
    position: fixed;
    bottom: -1%;
    right: 0;
    width: 400px;
`

const GameOverCard = styled.div`
    margin-top: 10%;
    box-sizing: border-box;
    display: grid;
    place-items: center;
`

const GameOverButton = styled.button`
    box-sizing: border-box;
    border: none;
    width: 200px;
    height: 38px;
    color: black;
    font-size: 24px;
    font-weight: bold;
    background-image: linear-gradient(to right, pink,orange,yellow,lightgreen,lightblue,indigo,violet); 
    border-radius: 10px;
    cursor: pointer;
`

export {GameOverCard, GameOverButton, GameOverImg, CryingIMG, CryingCatIMG, GameOverScore}