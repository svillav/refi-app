import React, { useState } from 'react';
import './styles.scss';
import Card from '../../components/Card/Card';
import talleres from './talleres';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Talleres = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTalleres = talleres.filter(taller =>
    taller.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    taller.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (taller.ig && taller.ig.toLowerCase().includes(searchTerm.toLowerCase())) ||
    taller.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    taller.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="talleres" className="talleres-section">
      <h2 className="section-title">Talleres</h2>
      <InputGroup className="input-group">
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Buscar talleres por cualquier dato"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <div className="talleres-list">
        {filteredTalleres.length > 0 ? (
          filteredTalleres.map((taller, index) => (
            <Card
              key={`${taller.title}-${index}`}
              title={taller.title}
              owner={taller.owner}
              ig={taller.ig}
              description={taller.description}
              date={taller.date}
              backgroundImage={taller.backgroundImage}
            />
          ))
        ) : (
          <p>No hay talleres que coincidan con la búsqueda.</p>
        )}
      </div>
    </section>
  );
};

export default Talleres;