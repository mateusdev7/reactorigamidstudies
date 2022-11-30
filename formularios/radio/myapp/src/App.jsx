import React from "react";

function App() {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
}

export default App;
