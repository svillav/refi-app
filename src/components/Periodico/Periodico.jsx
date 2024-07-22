import React, { useState } from 'react';
import './Periodico.scss';
import PDF from '../assets/periodico-julio.pdf';

const Periodico = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="periodico" className="periodico">
      <div>
        <span>NUESTRO PERIÓDICO</span>
        <iframe className="pdf-container" src={PDF}></iframe>
      </div>
    </section>
  );
};

export default Periodico;
