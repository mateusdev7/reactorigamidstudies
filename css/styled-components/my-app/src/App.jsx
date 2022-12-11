import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.2rem;
  color: blue;
  text-decoration: underline;
`

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`

function App() {
  return (
    <div>
      <Titulo>Notebook</Titulo>
      <Paragrafo>Muita qualidade</Paragrafo>
      <Preco cor="#53d956">R$ 1000</Preco>
    </div>
  );
}

export default App;
