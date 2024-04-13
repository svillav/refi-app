import React from 'react';
import "./Separator.scss"; 

function Separator() {
    return (
      <section className="separador">
        <div className="background">
        <img className="logo2" src={require('../../assets/refi-blanco-01.png')} alt="Logo" />
        </div>
      </section>
    );
  }
  
  export default Separator;