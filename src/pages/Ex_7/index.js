import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Fatorial() {
  const [numero, setNumero] = useState('');
  const [fatorial, setFatorial] = useState(null);

  const calcularFatorial = () => {
    const num = parseInt(numero);

    if (isNaN(num) || num < 0) {
      setFatorial(null);
      return;
    }

    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }

    setFatorial(resultado);
  };

  return (
    <div className="app-container">
      <h1>Fatorial</h1>
      <div>
        <label>Digite um número:</label>
        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
      </div>
      <button onClick={calcularFatorial}>Calcular</button>
      {fatorial !== null && <p>O fatorial de {numero} é: {fatorial}</p>}

      <br/>
      <br/>

      <Link to="/Ex8">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Fatorial;
