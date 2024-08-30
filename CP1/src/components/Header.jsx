import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/sobre">Sobre</Link>
            </p>
            <p>
                <Link to="/contato">Contato</Link>
            </p>
        </header>
    );
}

export default Header;