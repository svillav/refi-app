// Header.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Collapse } from 'react-bootstrap'; // Importa Collapse de react-bootstrap
import logo from '../assets/logoreficomunidad.png'; // Asegúrate de tener la imagen en la carpeta adecuada
import './Separator.scss'; // Asegúrate de importar tus estilos SCSS si los tienes

const Separator = () => {
  const [open, setOpen] = useState(false); // Estado para controlar el colapso del menú

  return (
    <section class="separador">
      <img src="./assets/refi blanco-01.png" alt="" srcset="" />
    </section>
  );
};

export default Separator;
