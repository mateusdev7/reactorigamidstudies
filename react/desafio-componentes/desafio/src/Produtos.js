import React from "react"
import ProdutoItem from "./ProdutoItem"
import Titulo from "./Titulo"

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
]

const Produtos = () => {
  return (
    <section>
      <Titulo nome="Produtos" />
      {produtos.map((produto) => (
        <ProdutoItem key={produto.nome} nome={produto.nome} {...produto} />
      ))}
    </section>
  )
}

export default Produtos
