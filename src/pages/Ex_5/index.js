import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Variavel() {
  const [variavel, setVariavel] = useState('');
  const [mensagem, setMensagem] = useState('');

  const exibirMensagem = () => {
    if (variavel === 'a') {
      setMensagem('A');
    } else if (variavel === 'b') {
      setMensagem('B');
    } else {
      setMensagem('Outra letra');
    }
  };

  return (
    <div className="app-container">
      <h1>A ou B: </h1>
      <div>
        <label>Digite a variável:</label>
        <input type="text" value={variavel} onChange={(e) => setVariavel(e.target.value)} />
      </div>
      <button onClick={exibirMensagem}>Exibir</button>
      {mensagem !== '' && <p>{mensagem}</p>}

      <br/>
      <br/>

      <Link to="/Ex6">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Variavel;
