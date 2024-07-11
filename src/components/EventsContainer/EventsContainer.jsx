import React, { useState } from 'react';
import './EventsContainer.scss';
import Event from '../Event/Event';
import eventosData from '../../eventos.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const images = require.context('../assets/eventos/', false, /\.(jpeg|jpg)$/);

const EventsContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const eventsArray = eventosData.eventos.filter(event =>
    event.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="eventos" className="event-section">
      <h2 className="section-title">Eventos</h2>
      <InputGroup className="input-group">
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Buscar eventos por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <div className="event-slider">
        <div className="event-slider-inner">
          {
            eventsArray.length > 0 ? (
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
            ) : (
              <p>No hay eventos con ese nombre.</p>
            )
          }
        </div>
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
