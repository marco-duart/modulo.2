import { HeaderStyle } from "../../styles/Header"
import { Link } from "react-router-dom";


const Header = () => {
    const userName = localStorage.getItem("user");
    return (
        <HeaderStyle>
            <div>Arnia Trello</div>
            <div>
                {userName && <div>Olá, {userName}</div>}
                <div><Link to="/">Sair</Link></div>
            </div>
        </HeaderStyle>
    )
}

export default Header