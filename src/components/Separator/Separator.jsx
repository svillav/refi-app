import React, { useState } from 'react';
import './Separator.scss';
import refiImage from '../assets/refi blanco-01.png';

const Separator = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="separador">
      <img src={refiImage} loading="lazy" />
    </section>
  );
};

export default Separator;
