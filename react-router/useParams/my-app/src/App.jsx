import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import NaoEncontrada from "./NaoEncontrada.jsx";
import Produto from "./Produto.jsx";
import Sobre from "./Sobre.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
