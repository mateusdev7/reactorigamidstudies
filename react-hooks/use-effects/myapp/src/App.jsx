import React from "react";
import Button from "./Button.jsx";
import Produto from "./Produto.jsx";
import Titulo from "./Titulo.jsx";

// Ao clicar em um dos botões, salve no localstorage as informações (key e value)
// Toda vez que escolher alguma preferência (no botão), fazer um fecth e alterar os dados da tela
// Caso reinicie a página, usar as preferências salvas no localstorage e inserir na tela
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const getKeyProdutoLocalStorage = window.localStorage.getItem("produto");
    if (getKeyProdutoLocalStorage !== null) {
      setProduto(getKeyProdutoLocalStorage)
    }
  }, [])

  React.useEffect(() => {
    {
      produto && window.localStorage.setItem("produto", produto);
    }
  }, [produto]);
  
  function handleclick({ target }) {
    setProduto(target.textContent);
  }

  return (
    <div>
      <Titulo nome={produto}/>
      <Button funcao={handleclick} nome={"notebook"} />
      <Button funcao={handleclick} nome={"smartphone"} />
      <Produto produto={produto}/>
    </div>
  );
};

export default App;
