import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css'

function Opcao() {
  const [opcaoEscolhida, setOpcaoEscolhida] = useState('');

  const exibirMensagem = (opcao) => {
    switch (opcao) {
      case '1':
        setOpcaoEscolhida('Opção 1 escolhida');
        break;
      case '2':
        setOpcaoEscolhida('Opção 2 escolhida');
        break;
      case '3':
        setOpcaoEscolhida('Opção 3 escolhida');
        break;
      default:
        setOpcaoEscolhida('Opção inválida');
        break;
    }
  };

  return (
    <div className="app-container">
      <h1>Menu de Opções</h1>
      <ul>
        <button onClick={() => exibirMensagem('1')}>Opção 1</button>
        <br/>
        <button onClick={() => exibirMensagem('2')}>Opção 2</button>
        <br/>
        <button onClick={() => exibirMensagem('3')}>Opção 3</button>
      </ul>
      {opcaoEscolhida !== '' && <p>{opcaoEscolhida}</p>}

      <br/>
      <br/>

      <Link to="/Ex9">Próximo</Link>,
      <Link to="/"> Home</Link>
    </div>
  );
}

export default Opcao;
