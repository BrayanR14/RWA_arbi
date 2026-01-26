import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Nabvar from './Componentes/interface/nabvar/Nabvar';
import Propiedades3D from './components/propiedaes/propiedades3D/propiedades3D';
import Login from './components/login/login';
import Register from './components/register/register';
import Carrusel from './components/carrusel/carrusel';
import PromotionsCard from './components/promotionsCard/promotionsCard';

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

      <Carrusel />

      <div className="home-promotions">
        <div className="content-promotions">
          <h2 className="title-offert">
            Ofertas Especiales
          </h2>
          <p className="text-offert">
            Descubre nuestras promociones exclusivas en destinos de ensueño.
          </p>
        <PromotionsCard
          title="Escapada a la montaña"
          description="Respira aire puro con 3 noches en cabaña premium"
          image="https://picsum.photos/400/301"
          price="$299"
          onClick={() => console.log("Montaña clickeada")}
        />
        
        <PromotionsCard
          title="Tour europeo"
          description="Recorre 4 países en 10 días con guía incluido"
          image="https://picsum.photos/400/302"
          price="$1,899"
          onClick={() => console.log("Europa clickeada")}
        />
        
        <PromotionsCard
          title="Aventura en la selva"
          description="Explora la naturaleza con excursiones y canopy"
          image="https://picsum.photos/400/303"
          price="$650"
          onClick={() => console.log("Selva clickeada")}
        />
        
        <PromotionsCard
          title="Crucero por el Caribe"
          description="Lujo, playas y diversión en alta mar por 7 días"
          image="https://picsum.photos/400/304"
          price="$1,250"
          onClick={() => console.log("Crucero clickeado")}
        />
        
        <PromotionsCard
          title="Fin de semana en ciudad histórica"
          description="Hotel boutique + tours culturales guiados"
          image="https://picsum.photos/400/305"
          price="$210"
          onClick={() => console.log("Ciudad histórica clickeada")}
        />
        </div>
      </div>

      


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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
