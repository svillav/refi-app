// Header.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Collapse } from 'react-bootstrap'; // Importa Collapse de react-bootstrap
import logo from '../assets/logoreficomunidad.png'; // Asegúrate de tener la imagen en la carpeta adecuada
import './Header.scss'; // Asegúrate de importar tus estilos SCSS si los tienes

const Header = () => {
  const [open, setOpen] = useState(false); // Estado para controlar el colapso del menú

  return (
    <header>
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href="#">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          {/* Botón del toggler */}
          <Navbar.Toggle
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)} // Cambia el estado del colapso al hacer clic
          >
            <span className="navbar-toggler-icon">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24.75 24.75"
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
                    <path
                      d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
          </Navbar.Toggle>
          {/* Contenido del navbar que se colapsa */}
          <Collapse in={open}>
            <div id="navbarNav" className="collapse navbar-collapse">
              <Nav className="ml-auto">
                <Nav.Link className="nav-link eventos" href="#eventos">Eventos</Nav.Link>
                <Nav.Link className="nav-link somos-refi" href="#somos-refi">Somos refi</Nav.Link>
                <Nav.Link className="nav-link galeria" href="#galeria">Galería</Nav.Link>
                <Nav.Link className="nav-link contacto" href="#contacto">Contacto</Nav.Link>
              </Nav>
            </div>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
