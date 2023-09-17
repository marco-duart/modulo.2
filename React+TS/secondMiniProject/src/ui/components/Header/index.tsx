import { HeaderStyle, TitleHeaderStyle, SectionHeaderStyle, TextHeaderStyle, StyledLink } from "../../styles/Header"


const Header = () => {
    const userName = localStorage.getItem("user");
    return (
        <HeaderStyle>
            <TitleHeaderStyle>Arnia Trello</TitleHeaderStyle>
            <SectionHeaderStyle>
                {userName && <TextHeaderStyle>Olá, {userName}</TextHeaderStyle>}
                <div><StyledLink to="/">Sair</StyledLink></div>
            </SectionHeaderStyle>
        </HeaderStyle>
    )
}

export default Header