import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Matriz() {
  const [matriz, setMatriz] = useState([]);
  const [soma, setSoma] = useState(0);

  const calcularSoma = () => {
    const somaCalculada = matriz.reduce((acc, numero) => acc + numero, 0);
    setSoma(somaCalculada);
  };

  const adicionarNumero = (e) => {
    e.preventDefault();
    const numero = parseFloat(e.target.numero.value);

    if (!isNaN(numero)) {
      setMatriz([...matriz, numero]);
      e.target.reset();
    }
  };

  return (
    <div className="app-container">
      <h1>Calculadora de Soma de Matriz</h1>
      <form onSubmit={adicionarNumero}>
        <div>
          <label>Digite um número:</label>
          <input type="text" name="numero" />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={calcularSoma}>Calcular Soma</button>
      {soma !== 0 && <p>Soma: {soma}</p>}

      <br/>
      <br/>

      <Link to="/Ex7">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Matriz;
