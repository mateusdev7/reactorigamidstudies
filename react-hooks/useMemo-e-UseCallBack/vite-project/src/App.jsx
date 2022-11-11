import { GlobalStorage } from "./GlobalContext.jsx";
import Produto from "./Produto.jsx";
const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
