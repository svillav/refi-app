// Header.jsx
import React from 'react';
import logo from '../assets/logoreficomunidad.png'; // Asegúrate de tener la imagen en la carpeta adecuada
import './Header.scss'; // Asegúrate de importar tus estilos SCSS si los tienes

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </a>
          <button
            id="burger-icon"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24.75 24.75"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path>
                  </g>
                </g>
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link eventos" href="#eventos">Eventos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link somos-refi" href="#somos-refi">Somos refi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link galeria" href="#galeria">Galería</a>
              </li>
              <li className="nav-item">
                <a className="nav-link contacto" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
