import React from "react";
import Input from "./Form/Input.jsx";
function App() {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Por favor, preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Por favor, preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) {
      validateCep(target.value)
    }
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviar')
    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Cep"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
