import React, { useState } from 'react';
import './EventsContainer.scss';

const EventsContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="eventos" className="event-section">
      <h2 className="section-title">Eventos</h2>
      <h4>Tocá el evento para ver los detalles</h4>
      <div className="event-cards"></div>
    </section>
  );
};

export default EventsContainer;
