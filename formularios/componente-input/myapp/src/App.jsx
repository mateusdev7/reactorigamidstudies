import Input from "./Form/Input.jsx";
import React from "react";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <form action="">
      <Input
        id="nome"
        labelName="Nome"
        value={nome}
        setValue={setNome}
        required
      />
      <Input id="email" labelName="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
}

export default App;
