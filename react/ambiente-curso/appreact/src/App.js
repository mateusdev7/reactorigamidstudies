import React from "react"

const titulo = <h1>Esse é um título</h1>

const App = () => {
  const nome = 'Mateus';
  const ativo = true;

  function mostrarNome(sobrenome ) {
    return ` Julia ${sobrenome}`
  }

  const carro = {
    marca: 'Mercedes',
    piloto: 'Hamilton',
    numero: 44,
  }

  const estilos = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Arial'
  }

  return (
    <React.Fragment>
      <a className="ativo" href="https://origamid.com" title="Isso é um site">
        Origamid
      </a>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      {titulo}
      <p>
        {true ? 'Teste 1' : 'Teste 2'} -
        {mostrarNome('Machado')}
      </p>
      <p style={estilos}>
        {`${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`}
      </p>
      <p className={ativo ? "ativo" : "inativo"}>{nome}</p>
      <p>
        {carro.marca}
      </p>
    </React.Fragment>
  )
}

export default App
