import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
        <h1>Bem-vindo a pagina home</h1> <br></br><br></br>

        <Link to="/sobre">Sobre</Link> <br></br>
        <Link to="/contacto">Contato</Link>
      </>
    );
}
 
export default Home;