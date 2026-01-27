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
  title="Apartamento moderno en zona exclusiva"
  description="2 habitaciones, balcón y vista panorámica a la ciudad"
  image="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
  price="$420.000.000 COP"
  onClick={() => console.log("Apartamento moderno clickeado")}
/>

<PromotionsCard
  title="Apartamento familiar amplio"
  description="3 habitaciones, estudio y parqueadero cubierto"
  image="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
  price="$560.000.000 COP"
  onClick={() => console.log("Apartamento familiar clickeado")}
/>

<PromotionsCard
  title="Apartamento tipo loft"
  description="Diseño industrial, espacios abiertos y excelente iluminación"
  image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  price="$390.000.000 COP"
  onClick={() => console.log("Loft clickeado")}
/>

<PromotionsCard
  title="Penthouse de lujo con terraza"
  description="Vista 360°, jacuzzi y acabados de alta gama"
  image="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  price="$1.250.000.000 COP"
  onClick={() => console.log("Penthouse clickeado")}
/>

<PromotionsCard
  title="Apartamento en conjunto residencial"
  description="Zonas comunes, piscina y vigilancia 24/7"
  image="https://images.unsplash.com/photo-1484154218962-a197022b5858"
  price="$480.000.000 COP"
  onClick={() => console.log("Conjunto residencial clickeado")}
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
