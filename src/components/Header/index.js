import { Link } from 'react-router-dom';
import './estilo.css';

function Header() {
    return(
        <header>
            <h2>Exercicio 6 : </h2>
            <div className='menu'>
                <Link to="/Ex1">1 </Link>
                <Link to="/Ex1">2 </Link>
                <Link to="/Ex3">3 </Link>
                <Link to="/Ex4">4 </Link>
                <Link to="/Ex5">5 </Link>
                <Link to="/Ex6">6 </Link>
                <Link to="/Ex7">7 </Link>
                <Link to="/Ex8">8 </Link>
                <Link to="/Ex9">9 </Link>
                <Link to="/Ex10">10 </Link>
                <Link to="/"> Home</Link>

            </div>
        </header>

    );
}

export default Header;