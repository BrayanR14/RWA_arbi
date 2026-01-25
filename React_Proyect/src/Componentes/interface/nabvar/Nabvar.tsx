import { useState } from "react";
import "./Nabvar.css";

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
          <li><a href="/">Dashboard</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nabvar;
