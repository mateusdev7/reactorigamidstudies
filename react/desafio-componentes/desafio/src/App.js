import React from 'react';
import Header from './Header'
import Home from './Home';
import Produtos from './Produtos';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

function App() {
  let Pagina;
  const { pathname } = window.location;

  if (pathname === "/") {
    Pagina = Home
  } else {
    Pagina = Produtos;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App;
