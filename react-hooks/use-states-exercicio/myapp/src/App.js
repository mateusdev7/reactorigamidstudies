import React from 'react';
import Button from './Button';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Button funcao={handleClick} nome={"notebook"} />
      <Button funcao={handleClick} nome={"smartphone"} />
      <Button funcao={handleClick} nome={"tablet"} />
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </React.Fragment>
  )
}

export default App;
