import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Deportes from "./components/Rutas/Deportes";
import Economia from "./components/Rutas/Economia";
import ElMundo from "./components/Rutas/ElMundo";
import Espectaculos from "./components/Rutas/Espectaculos";
import Opinion from "./components/Rutas/Opinion";
import Politica from "./components/Rutas/Politica";
import Sociedad from "./components/Rutas/Sociedad";
import UltimasNoticias from "./components/Rutas/UltimasNoticias";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="deportes" element={<Deportes />} />
          <Route path="economia" element={<Economia />} />
          <Route path="elmundo" element={<ElMundo />} />
          <Route path="espectaculos" element={<Espectaculos />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="politica" element={<Politica />} />
          <Route path="sociedad" element={<Sociedad />} />
          <Route path="ultimasnoticias" element={<UltimasNoticias />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
