import { HeaderStyle } from "../../styles/Header"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <HeaderStyle>
            <div>Arnia Trello</div>
            <div>
                <div>Olá, User</div>
                <div><Link to="/">Sair</Link></div>
            </div>
        </HeaderStyle>
    )
}

export default Header