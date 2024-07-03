import React, { useState } from 'react';
import './Periodico.scss';
import PDF from '../assets/periodico-julio.pdf';
import imagePDF from '../assets/periodico-julio.png';

const Periodico = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="periodico" className="periodico">
      <div>
        <span>NUESTRO PERIÓDICO</span>
        <a href={PDF} target="_blank" rel="noopener noreferrer">
          <img src={imagePDF} />
        </a>
      </div>
      <div>
        <a href={PDF} target="_blank" rel="noopener noreferrer">
          <svg width="106px" height="106px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
          <p>
            ENTRÁ A LA EDICIÓN DE JULIO
            Y ENTERATE DE TODO
            LO QUE HAY PARA HACER
          </p>
        </a>
      </div>
    </section>
  );
};

export default Periodico;
