import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Form from "./Form/Form"

const Teste = () => {
  const active = false
  if (active) {
    return <p>Teste</p>
  } else {
    return null
  }
}

const Titulo = ({ texto, cor, children }) => {
  return <h1 style={{ color: cor }}>{texto}, {children}</h1>
}

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
      <section>
        <h3>Propriedades</h3>
        <Titulo cor="red" texto="Meu primeiro Título" />
        <Titulo cor="blue" texto="Meu segundo Título" />
        <Titulo cor="blue" texto="Meu terceiro Título"> Isso é o children </Titulo>
      </section>
    </React.Fragment>
  )
}

export default App
