import Logo from "./Logo"
import {HeaderStyle, LogoStyle, TitleStyle} from "./styles"

const Header = () => {
    return (
        <HeaderStyle>
            <LogoStyle>
                <Logo />
            </LogoStyle>
            <TitleStyle>Loja Virtual</TitleStyle>
        </HeaderStyle>
    )
}

export default Header