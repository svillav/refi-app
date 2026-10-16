import React, { useState, useEffect, useRef } from 'react';
import './HomeCarousel.scss';

import slide1 from '../../pages/Home/assets/carousel/carousel_1.jpg';
import slide2 from '../../pages/Home/assets/carousel/carousel_2.jpg';
import slide3 from '../../pages/Home/assets/carousel/carousel_3.jpg';
import slide4 from '../../pages/Home/assets/carousel/carousel_4.jpg';
import slide5 from '../../pages/Home/assets/carousel/carousel_5.jpg';
import slide6 from '../../pages/Home/assets/carousel/carousel_6.jpg';
import slide7 from '../../pages/Home/assets/carousel/carousel_7.jpg';
import slide8 from '../../pages/Home/assets/carousel/carousel_8.jpg';
import slide9 from '../../pages/Home/assets/carousel/carousel_9.jpg';

const slides = [
  {
    id: 1,
    image: slide1,
    alt: '4to Aniversario REFI - Fiesta en el barrio - Sábado 17 Octubre 17hs',
    title: '4to Aniversario REFI - Fiesta en el barrio'
  },
  {
    id: 6,
    image: slide6,
    alt: '4to Aniversario REFI',
    title: '4to Aniversario REFI'
  },
  {
    id: 7,
    image: slide7,
    alt: 'Rosario Smowing - Fiesta en el barrio en REFI',
    title: 'Rosario Smowing'
  },
  {
    id: 2,
    image: slide2,
    alt: 'Malandro - Fiesta en el barrio en REFI',
    title: 'Malandro'
  },
  {
    id: 3,
    image: slide3,
    alt: '3ller Burritos - Fiesta en el barrio en REFI',
    title: '3ller Burritos'
  },
  {
    id: 4,
    image: slide4,
    alt: 'Nasir Catriel y Fasciolo - Fiesta en el barrio en REFI',
    title: 'Nasir Catriel y Fasciolo'
  },
  {
    id: 5,
    image: slide5,
    alt: 'Ana Milagros - Fiesta en el barrio en REFI',
    title: 'Ana Milagros'
  },
  {
    id: 8,
    image: slide8,
    alt: 'Dúo Ñapindá - Fiesta en el barrio en REFI',
    title: 'Dúo Ñapindá'
  },
  {
    id: 9,
    image: slide9,
    alt: 'Zona 84 - Fiesta en el barrio en REFI',
    title: 'Zona 84'
  }
];

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = slides.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  // Determine role/position of each slide relative to activeIndex (supports any number of slides)
  const getSlidePositionClass = (index) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 0) return 'slide-center';
    if (diff === 1) return 'slide-next';
    if (diff === total - 1) return 'slide-prev';
    if (diff <= Math.floor(total / 2)) return 'slide-hidden-next';
    return 'slide-hidden-prev';
  };

  const handleSlideClick = (index) => {
    const diff = (index - activeIndex + total) % total;
    if (diff === 1) {
      handleNext();
    } else if (diff === total - 1) {
      handlePrev();
    }
  };

  return (
    <section
      className="home-carousel-section"
      aria-label="Destacados 4to Aniversario REFI"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-ambient-glow" />

      <div
        className="carousel-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const positionClass = getSlidePositionClass(index);
          const isClickable = positionClass === 'slide-prev' || positionClass === 'slide-next';

          return (
            <div
              key={slide.id}
              className={`carousel-card ${positionClass}`}
              onClick={() => isClickable && handleSlideClick(index)}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              aria-label={isClickable ? `Ver ${slide.title}` : undefined}
            >
              <div className="card-inner">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="card-image"
                  loading={index <= 2 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern pill indicators */}
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir a diapositiva ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCarousel;
