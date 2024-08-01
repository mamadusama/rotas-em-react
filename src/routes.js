import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";



const RoutesApp = () => {
    return ( 
       <BrowserRouter>
       <Routes>
        <Route path="/" element= { <Home/> }/>
        <Route path="/sobre" element= { <Sobre/> }/>
        <Route path="/contacto" element= { <Contacto/> }/>
       </Routes>
       
       </BrowserRouter> 
     );
}
 
export default RoutesApp;