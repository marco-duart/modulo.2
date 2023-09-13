import {styled} from "styled-components"

const HeaderStyle = styled.header`
    box-sizing: border-box;
    width: 595px;
    height: 86px;
    background-color: rgba(105, 80, 161, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

const LogoStyle = styled.div`
    width: 128px;
    height: 38px;
    padding-bottom: 10px;
`

const TitleStyle = styled.div`
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
`

export {HeaderStyle, LogoStyle, TitleStyle}