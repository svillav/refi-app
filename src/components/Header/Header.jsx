import React, { useState } from 'react';
import { Navbar, Nav, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logoreficomunidad.png';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand as={Link} to="/">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
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
          <Collapse in={open}>
            <div id="navbarNav" className="collapse navbar-collapse">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" className="nav-link text-center">Home</Nav.Link>
                <Nav.Link as={Link} to="/agenda" className="nav-link text-center">Agenda</Nav.Link>
                {/* <Nav.Link as={Link} to="/refi-cafe" className="nav-link text-center">Refi Café</Nav.Link>
                <Nav.Link as={Link} to="/tienda" className="nav-link text-center">Tienda</Nav.Link>
                <Nav.Link as={Link} to="/cursos" className="nav-link text-center">Cursos</Nav.Link> */}
                <Nav.Link as={Link} to="/comunidad" className="nav-link text-center">Comunidad</Nav.Link>
                {/* <Nav.Link as={Link} to="/galeria" className="nav-link text-center">Galería</Nav.Link> */}
                {/* <Nav.Link as={Link} to="/como-es-refi" className="nav-link text-center">Cómo es Refi</Nav.Link> */}
              </Nav>
            </div>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
