import React from 'react'

const Button = ({ funcao, nome }) => {
  return (
    <button onClick={funcao} style={{ margin: "1rem" }}>
      {nome}
    </button>
  )
}

export default Button