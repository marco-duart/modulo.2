import {styled} from "styled-components"

const TitleOfCard = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`

const InforStatus = styled.span`
    font-size: 12px;
    margin-bottom: 10px;
`

const PageCard = styled.div`
    box-sizing: border-box;
    background-color: #F9FBFD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 20%;
    padding: 20px 0;
`

const ColorsBox = styled.div`
    box-sizing: border-box;
    width: 280px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    background-color: #F9FBFD;
    margin-bottom: 10px;
`

const ColorBlock = styled.div`
    box-sizing: border-box;
    border: 1px solid #E4E5E0;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
`

const ColorButton = styled.button`
    box-sizing: border-box;
    border: none;
    width: 80px;
    height: 38px;
    color: black;
    font-size: 24px;
    font-weight: bold;
    background-image: linear-gradient(to right, pink,orange,yellow,lightgreen,lightblue,indigo,violet); 
    border-radius: 10px;
    cursor: pointer;
`


export {TitleOfCard, InforStatus, PageCard, ColorsBox, ColorBlock, ColorButton}