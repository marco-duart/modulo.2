import {styled} from "styled-components"

const FooterStyle = styled.header`
    box-sizing: border-box;
    width: 595px;
    height: 86px;
    border: 4px solid rgba(105, 80, 161, 1);
    background-color: rgba(255, 255, 255, 1);
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PaymentStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoStyle = styled.div`
    max-height: 38px;
`

const TitleStyle = styled.div`
    font-size: 12px;
    font-weight: 600;
`

export {FooterStyle, PaymentStyle, TitleStyle, LogoStyle}