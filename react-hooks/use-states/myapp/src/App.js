import React from "react"

const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: "Mateus", idade: "21" })
  console.log(dados)
  function handleClick() {
    setAtivo(!ativo)
    if (ativo) {
      setDados({ nome: "Mateus", idade: "21" })
    } else {
      setDados({ nome: "Julia", idade: "27" })
    }
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </React.Fragment>
  )
}

export default App
