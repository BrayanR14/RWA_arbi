import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nabvar from './Componentes/interface/nabvar/Nabvar';
import Propiedades3D from './components/propiedaes/propiedades3D/propiedades3D';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="home-hero">
        <h1>Plataforma de Inversión Inmobiliaria Web3</h1>
        <p>
          Compra fracciones de bienes raíces mediante NFTs respaldados en
          blockchain. Transparente, global y sin intermediarios.
        </p>
        <button onClick={() => navigate("/propiedades3d")} className="home-btn">
          Explorar Propiedades 3D
        </button>
      </section>

      <section className="home-stats">
        <div className="stat-card">
          <h3>+120</h3>
          <p>Propiedades Tokenizadas</p>
        </div>
        <div className="stat-card">
          <h3>$45M</h3>
          <p>Valor Total en Activos</p>
        </div>
        <div className="stat-card">
          <h3>3,500+</h3>
          <p>Inversionistas Activos</p>
        </div>
      </section>

      <section className="home-info">
        <h2>¿Cómo funciona?</h2>
        <div className="info-grid">
          <div>
            <h4>1️⃣ Tokenización</h4>
            <p>Convertimos propiedades reales en activos digitales (NFTs).</p>
          </div>
          <div>
            <h4>2️⃣ Compra Fraccionada</h4>
            <p>Invierte desde pequeños montos en inmuebles de alto valor.</p>
          </div>
          <div>
            <h4>3️⃣ Mercado Global</h4>
            <p>Vende o intercambia tus participaciones cuando quieras.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades3d" element={<Propiedades3D />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
