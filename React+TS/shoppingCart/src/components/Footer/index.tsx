import Payment from "./Payment"
import {FooterStyle, PaymentStyle, TitleStyle, LogoStyle} from "./styles"


const Footer = () => {
    return (
        <FooterStyle>
            <TitleStyle>Meios de pagamento:</TitleStyle>
            <PaymentStyle>
                <LogoStyle><Payment card="mastercard" /></LogoStyle>
                <LogoStyle><Payment card="hipercard" /></LogoStyle>
                <LogoStyle><Payment card="visa" /></LogoStyle>
                <LogoStyle><Payment card="ticket" /></LogoStyle>
            </PaymentStyle>
        </FooterStyle>
    )
}

export default Footer