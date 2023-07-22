import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Media() {
  const [numeros, setNumeros] = useState([]);
  const [media, setMedia] = useState(0);

  const calcularMedia = () => {
    if (numeros.length === 0) {
      setMedia(0);
      return;
    }

    const soma = numeros.reduce((acc, numero) => acc + numero, 0);
    const mediaCalculada = soma / numeros.length;
    setMedia(mediaCalculada);
  };

  const adicionarNumero = (e) => {
    e.preventDefault();
    const numero = parseFloat(e.target.numero.value);

    if (!isNaN(numero)) {
      setNumeros([...numeros, numero]);
      e.target.reset();
    }
  };

  return (
    <div className="app-container">
      <h1>Calculadora de Média</h1>
      <form onSubmit={adicionarNumero}>
        <div>
          <label>Digite um número:</label>
          <input type="text" name="numero" />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={calcularMedia}>Calcular Média</button>
      {media !== 0 && <p>Média: {media}</p>}

      <br/>
      <br/>

      <Link to="/Ex5">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Media;
