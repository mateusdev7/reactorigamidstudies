import React from "react";

function reducer(state, action) {
  // console.log(state);
  console.log(state);
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ["Banana", "Uva"]);
  return (
    <div>
      <button onClick={() => dispatch({ type: "remover", content: "Banana" })}>
        Remover Banana
      </button>
      <button
        style={{ display: "block", marginTop: "20px" }}
        onClick={() => dispatch({ type: "adicionar", content: "Limão" })}
      >
        Adicionar Limão
      </button>
      <p>{state}</p>
    </div>
  );
};

export default Exemplo;
