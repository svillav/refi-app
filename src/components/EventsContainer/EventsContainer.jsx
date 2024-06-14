import React, { useState } from 'react';
import './EventsContainer.scss';
import Event from '../Event/Event';

const eventsArray = [
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/03/foto.jpeg",
    "nombre": "TALLER DE FOTOGRAFIA ANALOGICA",
    "unica_fecha": true,
    "desde_fecha": "06/06/2024, 19:00",
    "moneda": "ARS",
    "entradas_online_desde": "16000.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "TALLER-DE-FOTOGRAFIA-ANALOGICA"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/05/killer.jpeg",
    "nombre": "KILLER BURRITOS",
    "unica_fecha": true,
    "desde_fecha": "14/06/2024, 20:58",
    "moneda": "ARS",
    "entradas_online_desde": "2000.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "KILLER-BURRITOS"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/06/cine_2.jpeg",
    "nombre": "GASTRONOMIA VINO Y CINE",
    "unica_fecha": false,
    "desde_fecha": "19/06/2024, 20:30",
    "moneda": "ARS",
    "entradas_online_desde": "0.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "GASTRONOMIA-VINO-Y-CINE"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/06/borde.jpeg",
    "nombre": "BORDER",
    "unica_fecha": true,
    "desde_fecha": "20/06/2024, 21:00",
    "moneda": "ARS",
    "entradas_online_desde": "7000.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "BORDER"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/05/kia.jpeg",
    "nombre": "K.I.A  ANDR\u00d3MEDA SALADILLO FUNK",
    "unica_fecha": true,
    "desde_fecha": "21/06/2024, 21:00",
    "moneda": "ARS",
    "entradas_online_desde": "2500.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "K-I-A--ANDROMEDA-SALADILLO-FUNK"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/05/FLYERS-hagan-ruido.jpeg",
    "nombre": "HAGAN RUIDO",
    "unica_fecha": true,
    "desde_fecha": "22/06/2024, 19:00",
    "moneda": "ARS",
    "entradas_online_desde": "3000.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "HAGAN-RUIDO"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/06/19_NUEVO.jpeg",
    "nombre": "ART\u00cdCULO 19, EL EXPERIMENTO - TEATRO EN REFI",
    "unica_fecha": true,
    "desde_fecha": "28/06/2024, 20:30",
    "moneda": null,
    "entradas_online_desde": "6000.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "ARTICULO-19--EL-EXPERIMENTO---TEATRO-EN-REFI"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/05/fin__SXfyR8I.jpeg",
    "nombre": "FIN DEL MUNDO",
    "unica_fecha": true,
    "desde_fecha": "29/06/2024, 21:00",
    "moneda": "ARS",
    "entradas_online_desde": "3500.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "FIN-DEL-MUNDO"
  },
  {
    "imagen_home": "/media/imagenes_eventos/home/2024/06/cortito_IMQkAwe.jpeg",
    "nombre": "CORTITO Y FUNKY - LAS TUSSI",
    "unica_fecha": true,
    "desde_fecha": "05/07/2024, 20:30",
    "moneda": "ARS",
    "entradas_online_desde": "0.00",
    "lugar": "REFI, Rosario, Santa Fe",
    "lugar_responsive": "Rosario",
    "activar_boton_personalizado": 0,
    "texto_boton": "",
    "color_boton_personalizado": "#28a745",
    "url_externa": "",
    "slug": "CORTITO-Y-FUNKY---LAS-TUSSI"
  }
]

const EventsContainer = () => {
  const [open, setOpen] = useState(false);

  console.log("event slug", eventsArray);
  return (
    <section id="eventos" className="event-section">
      <h2 className="section-title">Eventos</h2>
      <h4>Tocá el evento para ver los detalles</h4>
      <div className="event-cards">
        {
          eventsArray.map((event, index) => (
            <Event
              key={index}
              imageUrl={`../assets/eventos/BORDER.jpeg`}
              title={event.nombre}
              date={event.desde_fecha}
              time={event.desde_fecha}
              location={event.lugar}
              price={event.entradas_online_desde}
              ticketUrl={event.slug}
              ticketMessage="CONSEGUIR ENTRADAS"
            />
          ))
        }
      </div>
    </section>
  );
};

export default EventsContainer;
