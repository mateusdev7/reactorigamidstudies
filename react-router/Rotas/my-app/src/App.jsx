import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import NaoEncontrada from "./NaoEncontrada.jsx";
import Sobre from "./Sobre.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
