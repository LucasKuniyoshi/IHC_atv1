import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function MaiorNumero() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [maiorNumero, setMaiorNumero] = useState('');

  function encontrarMaiorNumero() {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      return alert('APENAS NUMEROS MAN!!!');
    }

    setMaiorNumero(num1 > num2 ? num1 : num2);
  }

  return (
    <div className="app-container">
      <h1>Encontre o Maior Número</h1>
      <div>
        <label>Digite o primeiro número:</label>
        <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      </div>
      <div>
        <label>Digite o segundo número:</label>
        <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>
      <button onClick={encontrarMaiorNumero}>Encontrar</button>
      {maiorNumero !== '' && <p>O maior número é: {maiorNumero}</p>}

      <br/>
      <br/>

      <Link to="/Ex3">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default MaiorNumero;