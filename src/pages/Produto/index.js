import { useParams } from "react-router-dom"

const Produto = () => {
    const {id} = useParams();
    return (
      <div>
        <h2>Pagina do Produto</h2> <br></br>
        <p>Detalhes do produto : {id}</p>
      </div>
    );
}
 
export default Produto;