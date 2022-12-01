import Input from "./Form/Input.jsx";
import Select from "./Form/Select.jsx";
import React from "react";
import Radio from "./Form/Radio.jsx";

function App() {
  const [nome, setNome] = React.useState(""); // Input
  const [email, setEmail] = React.useState(""); // Input
  const [produto, setProduto] = React.useState(""); // Select
  const [cor, setCor] = React.useState(""); // Radio
  const [fruta, setFruta] = React.useState(""); // Radio
  return (
    <form action="">
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={["Melancia", "Banana", "Uva", 'Laranja']}
        value={fruta}
        setValue={setFruta}
      />
      <h2>Produtos</h2>
      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <h2>Preencha seus dados</h2>
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
