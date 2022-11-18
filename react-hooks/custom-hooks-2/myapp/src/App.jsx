import React from "react";
import useFetch from "./useFetch.jsx";

function App() {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fecthData() {
      const { response, json } = await request("https://ranekapi.origamid.dev/json/api/produto/");
      console.log(response);
      console.log(json)
    }
    fecthData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
}

export default App;
