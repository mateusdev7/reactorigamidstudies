import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const apiFetch = async () => {
    const data = await fetch("https://ranekapi.origamid.dev/json/api/produto");
    const response = await data.json();
    setProdutos(response);
  };

  React.useEffect(() => {
    apiFetch();
  }, []);

  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img
            className={styles.link}
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
          />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
