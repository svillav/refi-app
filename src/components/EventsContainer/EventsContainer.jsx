import React from 'react';
import './EventsContainer.scss';
import Event from '../Event/Event';
import eventosData from '../../eventos.json';

const images = require.context('../assets/eventos/', true);

const EventsContainer = () => {
  const eventsArray = eventosData.eventos;

  return (
    <section id="eventos" className="event-section">
      <h2 className="section-title">Eventos</h2>
      <h4>Tocá el evento para ver los detalles</h4>
      <div className="event-cards">
        {
          eventsArray.map((event, index) => (
            <Event
              key={index}
              imageUrl={getImageUrl(event.slug)}
              title={event.nombre}
              date={event.desde_fecha}
              location={event.lugar}
              price={event.entradas_online_desde}
              ticketUrl={event.slug}
              ticketMessage="CONSEGUIR ENTRADAS"
              id={event.slug}
            />
          ))
        }
      </div>
    </section>
  );
};

const getImageUrl = (slug) => {
  try {
    return images(`./${slug}.jpeg`);
  } catch (error) {
    console.error(`Error al cargar la imagen para el slug ${slug}:`, error);
    return '';
  }
};

export default EventsContainer;
