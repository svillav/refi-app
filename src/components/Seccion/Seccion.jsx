import React from 'react';
import { Link } from 'react-router-dom';
import './Seccion.scss';

const Seccion = ({ name, href, backgroundImage, fontColor }) => {
console.log("font color", fontColor);
  return (
    <Link className="link" to={href}>
      <div className="seccion-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default Seccion;
