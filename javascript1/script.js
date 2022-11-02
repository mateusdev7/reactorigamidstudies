const menu = {
  seletor: ".principal",
}

console.log(menu.seletor)

function upperName(name) {
  return name.toUpperCase()
}

const lowerName = (name) => {
  return name.toLowerCase()
}

console.log(upperName("mateus"))
console.log(lowerName("MATEUS"))

function handleMouse(event) {
  const { clientX, clientY } = event
  console.log(clientX, clientY)
}
document.addEventListener("click", handleMouse)


// Desestruturação
const frutas = ["banana", "uva"]
const [fruta1, fruta2] = frutas
console.log(fruta1, fruta2)


const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// Rest

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  })
}
showList('Google', 'Mateus', 'Júlia', 'Heitor', 'Franz');

// Spread
const numeros = [10, 20, 30];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [...numeros, 50, 70, 80];
console.log(numeros2)

const carro = {
  cor: 'Azul',
  portas: 4
}

carroAno = { ...carro, ano: 2000 }

console.log(carro);
console.log(carroAno);