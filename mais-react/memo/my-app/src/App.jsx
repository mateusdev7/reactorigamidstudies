import React from "react";
import Header from "./Header.jsx";

function App() {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <div>
        <Header />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    </div>
  );
}

export default App;
