import React from "react"
import ButtonModal from "./ButtonModal"
import Modal from "./Modal"

const App = () => {
  // const [ativo, setAtivo] = React.useState(false)
  // const [dados, setDados] = React.useState({ nome: "Mateus", idade: "21" })

  // function handleClick() {
  //   setAtivo(!ativo)
  //   if (ativo) {
  //     setDados({ nome: "Mateus", idade: "21" })
  //   } else {
  //     setDados({ nome: "Julia", idade: "27" })
  //   }
  // }

  const [modal, setModal] = React.useState(false)
  const [items, setItems] = React.useState(["Item 1", "Item 2"])

  const [contar, setContar] = React.useState(1)
  const [produtos, setProdutos] = React.useState(["Produto 1"])

  function handleClick() {
    // setItems([...items, 'Novo Item'])
    setContar((contar) => contar + 1 )
    setProdutos((produtos) => [...produtos, 'Produto ' + (contar + 1)])
  }

  return (
    <React.Fragment>
      {/* <button onClick={handleClick}>Atualizar</button>
      <p>{items}</p>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} /> */}
      {produtos.map((produto) => (
        <li key={produto}>{produto}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </React.Fragment>
  )
}

export default App
