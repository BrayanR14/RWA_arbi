import { useNavigate } from "react-router-dom";
import "./primeDemo.css";

const PrimeDemo = () => {
  const navigate = useNavigate();
  return (
    <main className="primedemo">
      <section className="hero">
        <h1>Bienes Raíces Tokenizados</h1>
        <p>
          Invierte en propiedades reales mediante NFTs respaldados en
          blockchain. Accede a oportunidades globales sin bancos ni papeleo.
        </p>
        <div className="buttons">
          <button onClick={() => navigate("/propiedades3d")} className="btn-primary">Ver Propiedades</button>
          <button className="btn-secondary">Aprender Más</button>
        </div>
      </section>

      <section className="info-cards">
        <div className="card">
          <h3>🏢 Propiedad Fraccionada</h3>
          <p>
            Compra una fracción de un inmueble a través de tokens digitales
            respaldados por activos reales.
          </p>
        </div>

        <div className="card">
          <h3>🔗 Seguridad Blockchain</h3>
          <p>
            Todas las transacciones son transparentes, inmutables y verificables
            en la red.
          </p>
        </div>

        <div className="card">
          <h3>🌎 Mercado Global</h3>
          <p>
            Compra y vende participaciones inmobiliarias como NFTs desde
            cualquier parte del mundo.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>El futuro del real estate ya está aquí</h2>
        <p>
          Convierte el mercado inmobiliario tradicional en una experiencia
          digital, líquida y accesible para todos.
        </p>
        <button className="btn-primary">Empezar a invertir</button>
      </section>
    </main>
  );
};

export default PrimeDemo;
