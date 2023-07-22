import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function MediaMatriz() {
  const [matriz, setMatriz] = useState('');
  const [media, setMedia] = useState('');

  const calcularMedia = () => {
    const numeros = matriz.split(',').map((num) => parseFloat(num.trim()));

    if (numeros.length === 0 || numeros.some(isNaN)) {
      setMedia('Digite uma matriz válida de números separados por vírgula');
      return;
    }

    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const mediaCalculada = soma / numeros.length;
    setMedia(`A média dos elementos da matriz é: ${mediaCalculada}`);
  };

  return (
    <div className="app-container">
      <h1>Média da Matriz</h1>
      <div>
        <label>Digite uma matriz de números (separados por vírgula):</label>
        <input type="text" value={matriz} onChange={(e) => setMatriz(e.target.value)} />
      </div>
      <button onClick={calcularMedia}>Calcular Média</button>
      {media !== '' && <p>{media}</p>}

      <br/>
      <br/>

      <Link to="/"> Home</Link>
    </div>
  );
}

export default MediaMatriz;
