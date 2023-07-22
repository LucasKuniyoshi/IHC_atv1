import { Link } from 'react-router-dom';
import './estilo.css'

function Home(){
    return(
        <div className="app-container">
            <h1>Bem-vindo ao Exercicio 6 !!!</h1>
            <span> de Lucas Kuniyoshi</span>,
            <br/>
            <span>  para Prof Giovanne</span>
            <br/>

            <Link to="/Ex1"> 1</Link>,
            <Link to='/Ex1'> 2</Link>,
            <Link to='/Ex3'> 3</Link>,
            <Link to='/Ex4'> 4</Link>,
            <Link to='/Ex5'> 5</Link>,
            <Link to='/Ex6'> 6</Link>,
            <Link to='/Ex7'> 7</Link>,
            <Link to='/Ex8'> 8</Link>,
            <Link to='/Ex9'> 9</Link>,
            <Link to='/Ex10'> 10</Link>

            <hr/>

        </div>
    );
}
export default Home;