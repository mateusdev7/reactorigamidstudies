import { GlobalContext } from "./GlobalContext.jsx";
import React from "react";

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>;
};

export default Limpar;
