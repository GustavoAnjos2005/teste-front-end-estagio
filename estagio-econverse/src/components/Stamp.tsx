import { useRef, useState, useEffect } from 'react';

// Importando imagens
import logo from '../assets/2-logo.png';
import ArrowRight from '../assets/5-seta-direita-azul.svg';
import ArrowLeft from '../assets/5-seta-esquerda-azul.svg';

import '../styles/stamp.scss';

function Stamp() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Para controlar o índice dos itens visíveis
  const logos = Array(7).fill(logo); // Array de 7 logos

  const visibleItems = 4;
  const itemWidth = 220;
  const totalItems = logos.length;

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = totalItems * itemWidth;
      carouselRef.current.style.width = `${totalWidth}px`;
    }
  }, [totalItems]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const maxIndex = totalItems - visibleItems;
    let newIndex = currentIndex;

    if (direction === 'left') {
      newIndex = Math.max(0, currentIndex - 1);
    } else if (direction === 'right') {
      newIndex = Math.min(maxIndex, currentIndex + 1);
    }

    setCurrentIndex(newIndex);

    if (carouselRef.current) {
      const scrollAmount = newIndex * itemWidth;
      carouselRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
  };

  return (
    <div className="stamp-section">
      <h2 className="stamp-title">Navegue por marcas</h2>

      <div className="carousel-container">
        {/* Botão para rolar à esquerda */}
        <button className="carousel-button left" onClick={() => scrollCarousel('left')}>
          <img src={ArrowLeft} alt="Seta Esquerda" />
        </button>
        
        {/* Container do carrossel */}
        <div className="stamp-container">
          <div className="carousel" ref={carouselRef}>
            {logos.map((logo, index) => (
              <div className="stamp-item" key={index}>
                <img src={logo} alt={`Marca ${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Botão para rolar à direita */}
        <button className="carousel-button right" onClick={() => scrollCarousel('right')}>
          <img src={ArrowRight} alt="Seta Direita" />
        </button>
      </div>
    </div>
  );
}

export default Stamp;
