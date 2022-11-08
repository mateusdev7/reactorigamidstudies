import React from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <React.Fragment>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao Carrinho {carrinho}</button>
    </React.Fragment>
  );
};

export default App;
