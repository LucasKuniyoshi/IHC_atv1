import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Nota() {
  const [nota, setNota] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarNota = () => {
    const notaFloat = parseFloat(nota);
    
    if (isNaN(notaFloat) || notaFloat < 0 || notaFloat > 10) {
      alert('QUAL A DIFICULDADE DE ESCREVER UMA NOTA ENTRE 0 E 10??');
    } else if (notaFloat < 6) {
      setMensagem('Reprovado');
    } else if (notaFloat < 8) {
      setMensagem('Aprovado');
    } else {
      setMensagem('Aprovado com louvor');
    }
  };

  return (
    <div className="app-container">
      <h1>Média Final</h1>
      <div>
        <label>Digite a nota:</label>
        <input type="text" value={nota} onChange={(e) => setNota(e.target.value)} />
      </div>
      <button onClick={verificarNota}>Você foi...</button>
      <p>{mensagem}</p>

      <br/>
      <br/>

      <Link to="/Ex4">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Nota;
