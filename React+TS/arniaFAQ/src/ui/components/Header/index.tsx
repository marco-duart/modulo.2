import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <span>
                <Link to="/">Home</Link>
                <Link to="/new">New Question</Link>
            </span>
        </>
    )
}

export default Header