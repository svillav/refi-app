import React from 'react';
import Separator from '../../components/Separator/Separator';
import Seccion from '../../components/Seccion/Seccion';

import agendaBg from "./assets/bg_agenda.jpg";
import comunidadBg from "./assets/bg_comunidad.jpg";

const Home = () => {
  return (
    <div>
      <Separator />
      <Seccion name="Agenda" href="agenda" backgroundImage={agendaBg} />
      {/* <Seccion name="Refi Café" href="refi-cafe" backgroundImage={img} />
      <Seccion name="Tienda" href="tienda" backgroundImage={img} />
      <Seccion name="Cursos" href="cursos" backgroundImage={img} /> */}
      <Seccion name="Comunidad" href="comunidad" backgroundImage={comunidadBg} />
      {/* <Seccion name="Cómo es Refi" href="como-es-refi" backgroundImage={img} /> */}
    </div>
  );
};

export default Home;
