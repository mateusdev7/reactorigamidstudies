import React from 'react'

const Produto = ({ dados }) => {
  return (
    <React.Fragment>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </React.Fragment>
  )
}

export default Produto