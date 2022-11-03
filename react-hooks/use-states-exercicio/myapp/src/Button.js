import React from 'react'

const Button = ( {nome, funcao} ) => {
  return (
    <button onClick={funcao} style={{ marginRight: ".5rem" }}>
      {nome}
    </button>
  )
}

export default Button