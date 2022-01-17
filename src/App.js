import React from 'react';
import './App.css';
import InserirProduto from './components/InserirProduto';
import Produtos from './components/Produtos';

function App() {
  const [produtos, setprodutos] = React.useState([
  ])

  function AdicionarProduto (produtosEncontrados) {
    setprodutos(produtosEncontrados)
  }

  return (
    <div className="App">

      <InserirProduto AdicionarProduto={AdicionarProduto} produtos={produtos}/>
      <Produtos produtos={produtos}/>
    </div>
  );
}

export default App;
