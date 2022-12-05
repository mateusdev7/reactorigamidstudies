import Input from "./Form/Input.jsx";
import useForm from "./Hooks/useForm.jsx";

function App() {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmt(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmt}>
      <h2>Insira seu CEP</h2>
      <Input labelName="Nome" id="nome" type="text" {...nome} />
      <Input labelName="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        labelName="Cep"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input labelName="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
}

export default App;
