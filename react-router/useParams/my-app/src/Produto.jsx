import { useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();
  // const location = useLocation();
  // const search = new URLSearchParams(location);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
