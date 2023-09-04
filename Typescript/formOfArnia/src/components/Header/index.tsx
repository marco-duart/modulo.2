import logo from '../../assets/images/arnialogo.png'
import { HeaderStyle, HeaderDivStyle, HeaderImageStyle, HeaderTitleStyle } from './style.ts'

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderDivStyle>
        <HeaderImageStyle src={logo} alt="" />
      </HeaderDivStyle>
      <HeaderDivStyle>
        <HeaderTitleStyle>
          Se torne hoje mesmo um desenvolvedor de software. Conheça a Arnia
        </HeaderTitleStyle>
      </HeaderDivStyle>
    </HeaderStyle>
  );
};

export default Header