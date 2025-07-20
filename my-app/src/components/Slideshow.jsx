// src/components/Slideshow.jsx
import React, { useEffect, useState } from "react";
import '../App.css';

export default function Slideshow({ slides, interval = 2500 }) {
  const [index, setIndex] = useState(0);

  // auto‑advance
  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval, slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map(({ src, alt }, i) => (
        <div
          key={i}
          className={`slide fade ${i === index ? "show" : ""}`}
        >
          <img className="children_image" src={src} alt={alt} />
        </div>
      ))}

      {/* dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
