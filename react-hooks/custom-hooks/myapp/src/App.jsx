import useLocalStorage from "./useLocalStorage.jsx";

function App() {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.textContent);
    console.log(produto)
  }

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  );
}

export default App;
