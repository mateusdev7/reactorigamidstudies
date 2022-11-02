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
  let total = 0;
  nomeCliente.compras.forEach((item) => {
    total += Number(item.preco.replace('R$ ', ''));
  })
  return total;
}

function mostrarMensagem(nomeCliente) {
  if (totalGasto(nomeCliente) > 10000) {
    return 'Você está gastando muito'
  } else {
    return ''
  }
}

function estiloCor(nomeCliente) {
  if (!(nomeCliente.ativa)) {
    const estilos = {
      color: "red",
    }
    return estilos
  }
}

const App = () => {
  return (
    <React.Fragment>
      <p>Nome: {mario.cliente}</p>
      <p>Idade: {mario.idade}</p>
      <p>
        Situação: <span style={estiloCor(mario)}>{mario.ativa ? "Ativa" : "Inativa"}</span>
      </p>
      <p>Total Gasto: R$ {totalGasto(mario)}</p>
      <p>{mostrarMensagem(mario)}</p>
    </React.Fragment>
  )
}

export default App
