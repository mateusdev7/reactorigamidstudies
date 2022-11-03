import React from 'react'

const DadosCep = ( {dados} ) => {
  return (
    <React.Fragment>
      <p>Logradouro: {dados.logradouro}</p>
      <p>Bairro: {dados.bairro}</p>
      <p>Cidade: {dados.localidade}</p>
      <p>Estado: {dados.uf}</p>
    </React.Fragment>
  )
}

export default DadosCep