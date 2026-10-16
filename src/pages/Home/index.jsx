import React from 'react';
import './styles.scss';
import Separator from '../../components/Separator/Separator';
import Seccion from '../../components/Seccion/Seccion';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

import agendaBg from "./assets/bg_agenda.jpg";
import comunidadBg from "./assets/bg_comunidad.jpg";
import talleresBg from "./assets/bg_talleres.jpg";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <Separator />
      <Seccion name="Agenda" href="agenda" backgroundImage={agendaBg} />
      {/* <Seccion name="Refi Café" href="refi-cafe" backgroundImage={img} />
      <Seccion name="Tienda" href="tienda" backgroundImage={img} /> */}
      <Seccion className="talleres-bg" name="Talleres" href="talleres" backgroundImage={talleresBg} />
      <Seccion name="¿Quiénes somos?" href="quienes-somos" backgroundImage={comunidadBg} />
      {/* <Seccion name="Cómo es Refi" href="como-es-refi" backgroundImage={img} /> */}
    </div>
  );
};

export default Home;
