import React from "react";
import Input from "./Form/Input.jsx";
import Select from "./Form/Select.jsx";
import Radio from "./Form/Radio.jsx";
import Checkbox from "./Form/Checkbox.jsx";

function App() {
  const [nome, setNome] = React.useState(""); // Input
  const [email, setEmail] = React.useState(""); // Input
  const [senha, setSenha] = React.useState(""); // Input
  const [produto, setProduto] = React.useState(""); // Select
  const [cor, setCor] = React.useState(""); // Radio
  const [fruta, setFruta] = React.useState(""); // Radio
  const [linguagens, setLinguagens] = React.useState([]); // Checkbox
  const [termos, setTermos] = React.useState([]); // Checkbox
  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceitos os termos."]}
        value={termos}
        setValue={setTermos}
      />

      <h2>Escolha quais linguagens você mais gosta</h2>
      <Checkbox
        options={["Javascript", "Java", "C", "C++", "Cobol", "Ada", "PHP"]}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio 
        options={["Azul", "Vermelho"]} 
        value={cor} 
        setValue={setCor} 
      />

      <h2>Frutas</h2>
      <Radio
        options={["Melancia", "Banana", "Uva", "Laranja"]}
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
        type="text"
        id="nome"
        labelName="Nome"
        value={nome}
        setValue={setNome}
        required
      />
      <Input
        type="email"
        id="email"
        labelName="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <Input
        type="password"
        id="password"
        labelName="Senha"
        value={senha}
        setValue={setSenha}
        required
      />
      <button>Enviar</button>
    </form>
  );
}

export default App;
