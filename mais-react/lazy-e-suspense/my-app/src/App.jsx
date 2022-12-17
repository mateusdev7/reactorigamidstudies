import React from "react";
const Contato = React.lazy(() => import("./Contato.jsx"));

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Clique aqui</button>
    </div>
  );
}

export default App;
