import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logoreficomunidad.png"
import "./Header.scss"; 

// Componente funcional Header
function Header() {
    return (
      <header>
        <div className="container">
            <img className='logo' src={logo} alt="Logo" />
          <nav className="navbar">
            <ul>
              <li><a href="#eventos">EVENTOS</a></li>
              <li><a href="#somos-refi">SOMOS REFI</a></li>
              <li><a href="#galeria">GALERIA</a></li>
              <li><a href="#contacto">CONTACTO</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
export default Header;