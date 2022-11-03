import React from 'react';
import Button from './Button'
import DadosCep from './DadosCep';

// Link api = https://viacep.com.br/ws/01001000/json/

const App = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(`https://viacep.com.br/ws/${event.target.innerText}/json/`)
    const json = await response.json();
    setDados(json);
  }

  return (
    <React.Fragment>
      <Button funcao={handleClick} nome={"29047293"}/>
      {dados && <DadosCep dados={dados} />}
    </React.Fragment>
  );
}

export default App;
