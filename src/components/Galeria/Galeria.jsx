import React from "react";
import './Galeria.scss';
import galeria1 from "../assets/galeria1.jpeg";
import galeria2 from "../assets/galeria2.jpeg";
import galeria3 from "../assets/galeria3.jpeg";
import galeria4 from "../assets/galeria4.jpeg";
import galeria5 from "../assets/galeria5.jpeg";
import carr1 from "../assets/carr1.jpg";
import carr2 from "../assets/carr2.jpg";
import carr3 from "../assets/carr3.jpg";
import carr4 from "../assets/carr4.jpg";

const Galeria = () => {
  return (
    <section id="galeria" className="galeria-section">
      <h2>GALERÍA</h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={galeria1}
              className="d-block w-100"
              alt="Imagen 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={galeria2}
              className="d-block w-100"
              alt="Imagen 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={galeria3}
              className="d-block w-100"
              alt="Imagen 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src={galeria4}
              className="d-block w-100"
              alt="Imagen 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src={galeria5}
              className="d-block w-100"
              alt="Imagen 5"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carr1}
              className="d-block w-100"
              alt="Imagen 6"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carr2}
              className="d-block w-100"
              alt="Imagen 7"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carr3}
              className="d-block w-100"
              alt="Imagen 8"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carr4}
              className="d-block w-100"
              alt="Imagen 9"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>

    </section>
  )
}

export default Galeria;