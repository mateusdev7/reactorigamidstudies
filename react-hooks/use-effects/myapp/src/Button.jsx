const Button = ({ funcao, nome }) => {
  return (
    <button onClick={funcao} style={{ marginRight: "1rem" }}>
      {nome}
    </button>
  )
}

export default Button