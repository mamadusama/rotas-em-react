import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return ( 
        <header>
            <h1>My Blog</h1>
            <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contacto">Contacto</Link>
            </div>
        </header>
     );
}
 
export default Header;