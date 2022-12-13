import { NavLink, Route, Routes, useParams } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao.jsx";
import ProdutoAvaliacao from "./ProdutoAvaliacao.jsx";
import ProdutoCustomizado from "./ProdutoCustomizado.jsx";
const Produto = () => {
  const params = useParams();
  // const location = useLocation();
  // const search = new URLSearchParams(location);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
