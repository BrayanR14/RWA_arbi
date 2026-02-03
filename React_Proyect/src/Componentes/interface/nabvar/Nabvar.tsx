import { useState } from "react";
import "./Nabvar.css";
import { Login } from './components/Login/login';  

const Nabvar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nabvar">
      <div className="nabvar-container">
        
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="/">Menu</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nabvar;
