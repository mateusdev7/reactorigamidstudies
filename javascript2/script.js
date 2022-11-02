import quadrado from "./quadrado.js"
import numeroAleatorio from "./numeroAleatorio.js"

console.log(quadrado.areaQuadrado(5))
console.log(quadrado.perimetroQuadrado(5))
console.log(numeroAleatorio())

// Fetch API
// fetch("https://ranekapi.origamid.dev/json/api/produto").then((response) => {
//   response.json().then((json) => {
//     console.log(json)
//   })
// })

async function fetchProdutos(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

const produto = fetchProdutos("https://ranekapi.origamid.dev/json/api/produto")

// Métodos de array
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
]

const precosFiltro = precos.filter((preco) => preco.includes("R$"))
console.log(precosFiltro)

const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace("R$", "").trim())
)
console.log(precosNumeros)

