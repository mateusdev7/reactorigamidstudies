import Radio from "./Form/Radio.jsx";
import React from "react";

function App() {
  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      resposta: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      resposta: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      resposta: "use",
      id: "p4",
    },
  ];

  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = React.useState(0);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function nextSlide(event) {
    event.preventDefault();
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    }
  }

  function backSlide(event) {
    event.preventDefault();
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  return (
    <form>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={{ marginRight: "1rem" }} onClick={backSlide}>
          Voltar
        </button>
        <button onClick={nextSlide}>Próximo</button>
      </div>
    </form>
  );
}

export default App;
