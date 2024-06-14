import React, { useState } from 'react';
import './EventsContainer.scss';

const Separator = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="separador">
      <img src={refiImage} />
    </section>
  );
};

export default Separator;
