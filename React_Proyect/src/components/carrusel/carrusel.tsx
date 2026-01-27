import { useState, useEffect } from "react";
import "./carrusel.css";

const images = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=400&fit=crop", 
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=400&fit=crop"
];

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel">
      <button className="carrusel-btn left" onClick={prev}>‹</button>

      <div className="carrusel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} />
        ))}
      </div>

      <button className="carrusel-btn right" onClick={next}>›</button>

      <div className="carrusel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
