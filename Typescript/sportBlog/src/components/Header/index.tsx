import logo from '../../assets/images/logo.png'
import { HeaderStyle, HeaderImgDivStyle, HeaderTitleStyle } from './styles'

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderImgDivStyle>
                <img src={logo} alt="logo" />
            </HeaderImgDivStyle>
            <div>
                <HeaderTitleStyle>Esportes</HeaderTitleStyle>
            </div>
        </HeaderStyle>
    )
}

export default Header;