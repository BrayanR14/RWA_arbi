import { useState } from "react";
import "./Nabvar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <img src="home-iconsb.png" alt="logo" />
            <p>LOGO EMPRESA</p>
          </li>
          <li>
            <button onClick={() => navigate("/")}>Inicio</button>
          </li>
          
        </ul>
      </div>

      <div className="navbar-right">
        <ul className={`nav-links-right ${open ? "active" : ""}`}>
        <li>
            <button onClick={() => navigate("/login")}>Iniciar sesión</button>
          </li>
          <li>
            <button onClick={() => navigate("/register")}>Registrarse</button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
