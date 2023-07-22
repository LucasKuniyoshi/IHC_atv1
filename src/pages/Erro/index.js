import { Link } from 'react-router-dom';

function Erro() {
    return(
        <div >
            <h2>Ops parece que a página não existe!</h2>
            <span>Encontramos essas páginas aqui</span>
            <br/>

            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Erro;