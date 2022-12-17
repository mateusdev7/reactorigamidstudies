import React from "react";
import Exemplo from "./Exemplo.jsx";

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error("Error, action inválido");
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => dispatch("aumentar")}
      >
        +
      </button>
      <button 
      onClick={() => dispatch("diminuir")}
      >
        -
      </button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
}

export default App;
