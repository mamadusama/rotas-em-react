import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import Header from "./components/Header"
import Notfound from "./pages/Notfound";
import Produto from "./pages/Produto";



const RoutesApp = () => {
    return (
    
       
        <BrowserRouter>
            <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
        </BrowserRouter>
     
    );
}
 
export default RoutesApp;