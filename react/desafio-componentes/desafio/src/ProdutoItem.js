import React from 'react'

const ProdutoItem = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: '1rem', padding: '1rem'}}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
      ))}
      </ul>
    </div>
  )
}

export default ProdutoItem