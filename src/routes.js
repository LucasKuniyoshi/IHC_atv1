import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MaiorNumero from './pages/MaiorNumero';
import Erro from './pages/Erro';
import Header from './components/Header';
import Nota from "./pages/Ex_3";
import Media from "./pages/Ex_4";
import Variavel from "./pages/Ex_5";
import Matriz from "./pages/Ex_6";
import Fatorial from "./pages/Ex_7";
import Opcao from "./pages/Ex_8";
import MaiorNumVetor from "./pages/Ex_9";
import MediaMatriz from "./pages/Ex_10";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Ex1" element={<MaiorNumero/>}/>
                <Route path="/Ex3" element={<Nota/>}/>
                <Route path="/Ex4" element={<Media/>}/>
                <Route path="/Ex5" element={<Variavel/>}/>
                <Route path="/Ex6" element={<Matriz/>}/>
                <Route path="/Ex7" element={<Fatorial/>}/>
                <Route path="/Ex8" element={<Opcao/>}/>
                <Route path="/Ex9" element={<MaiorNumVetor/>}/>
                <Route path="/Ex10" element={<MediaMatriz/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;