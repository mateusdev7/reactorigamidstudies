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

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [quantidadeCorretas, setQuantidadeCorretas] = React.useState(null);

  function result() {
    const corretas = perguntas.filter(
      ({ resposta, id }) => respostas[id] === resposta
    );
    setQuantidadeCorretas(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function nextQuestion(event) {
    event.preventDefault();
    if (slide < perguntas.length - 1) {
      setSlide((slide) => slide + 1);
    } else {
      setSlide((slide) => slide + 1);
      result();
    }
  }

  const [slide, setSlide] = React.useState(0);
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
      {slide < 4 && <button onClick={nextQuestion}>Proxima</button>}
      {quantidadeCorretas && <p>quantidadeCorretas </p>}
    </form>
  );
}

export default App;
