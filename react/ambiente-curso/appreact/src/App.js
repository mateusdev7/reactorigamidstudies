import React from "react"

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
}

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
}

function totalGasto(nomeCliente) {
  let total = 0
  nomeCliente.compras.forEach((item) => {
    total += Number(item.preco.replace("R$ ", ""))
  })
  return total
}

function mostrarMensagem(nomeCliente) {
  return totalGasto(nomeCliente) > 10000 && 'Você está gastando muito'
}

function estiloCor(nomeCliente) {
  const estilos = {
    color: nomeCliente.ativa ? "green" : "red",
  }
  return estilos
}

const App = () => {
  const dados = luana
  // const total = dados.compras
  //   .map((item) => Number(item.preco.replace("R$ ", "")))
  //   .reduce((a, b) => a + b)

  return (
    <React.Fragment>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={estiloCor(dados)}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total Gasto: R$ {totalGasto(dados)}</p>
      <p>{mostrarMensagem(dados)}</p>
    </React.Fragment>
  )
}

export default App
