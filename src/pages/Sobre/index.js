import { Link } from "react-router-dom";

const Sobre = () => {
    return (
      <>
        <h1>Sobre a Empresa</h1> <br></br>

        <Link to="/">Home</Link> <br></br>
        <Link to="/contacto">Contato</Link>
      </>
    );
}
 
export default Sobre;