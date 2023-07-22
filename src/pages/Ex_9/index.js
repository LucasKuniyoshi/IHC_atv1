import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function MaiorNumVetor() {
  const [vetor, setVetor] = useState('');
  const [maiorNumero, setMaiorNumero] = useState('');

  const encontrarMaiorNumero = () => {
    const numeros = vetor.split(',').map((num) => parseFloat(num.trim()));

    if (numeros.length === 0 || numeros.some(isNaN)) {
      alert('Apenas números separados por vírgula serão aceitos.');
      return;
    }

    const max = Math.max(...numeros);
    setMaiorNumero(`O maior número do vetor é: ${max}`);
  };

  return (
    <div className="app-container">
      <h1>Maior Número do Vetor</h1>
      <div>
        <label>Digite um vetor de números (separados por vírgula):</label>
        <input type="text" value={vetor} onChange={(e) => setVetor(e.target.value)} />
      </div>
      <button onClick={encontrarMaiorNumero}>Encontrar Maior Número</button>
      {maiorNumero !== '' && <p>{maiorNumero}</p>}

      <br/>
      <br/>

      <Link to="/Ex10">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default MaiorNumVetor;
