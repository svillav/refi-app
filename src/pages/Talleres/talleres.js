import kundalini from '../../components/assets/talleres/kundalini.jpg';
import pulso from '../../components/assets/talleres/pulso.jpg';
import cine from '../../components/assets/talleres/cine.png'
import sintesis from '../../components/assets/talleres/sintesis.jpg'

const talleres = [
  { title: "Breve Historia del Cine Mundial",
    owner: "Ezequiel Guerrico (realizador audiovisual, docente)", 
    ig: "ezequielitoguerri",
    description: `
      Expositivo. Visionado de escenas de films; análisis y debate;
      bibliografía y filmografía a disposición para todos los participantes.
    `, 
    date: "5 encuentros (Sábados 20/09, 27/09, 04/10, 11/10, 18/10) (de 14:00 a 16:30hs)",
    backgroundImage: cine 
  },
  { title: "Introducción a la síntesis de sonido", 
    owner: "Lautaro Saavedra (músico, DJ, productor musical)",
    ig: "",
    description: `
      Introducción a los osciladores, filtros, envolventes y lfo.
      Demostraciones prácticas con sintetizadores virtuales (vst) y hardware
      (máquinas). Estrategias de diseño sonoro para distintos géneros musicales.
      Integración en Ableton Live, FL Studio, otros DAW.
    `, 
    date: "4 encuentros (Miércoles 18:00 a 20:00hs, a partir del 24/09)",
    backgroundImage: sintesis 
  },
  { title: "Yoga Kundalini", 
    owner: "Maribel Ramos Barrós",
    ig: "maribelramosbarros",
    description: `
      Una práctica integral que despierta y renueva tu energía vital a través de
      posturas, respiración consciente, meditación y relajación profunda. Ideal para
      recuperar equilibrio, claridad y bienestar en tu día a día.
      Maribel, maestra de Kundalini Yoga con más de 15 años de experiencia.
    `, 
    date: "1 vez por semana, a partir del 08/09. Lunes 17:00 a 18:30hs (1er turno). Lunes 18:30 a 20:00hs (2do turno).",
    backgroundImage: kundalini 
  },
  { title: "Pulso Contemporáneo", 
    owner: "Valentina Delsert",
    ig: "valentinadelsart",
    description: `
      Exploramos y entrenamos el estado de la danza en el cuerpo, combinando
      juegos, técnicas y la improvisación para lograr una conexión auténtica con
      nuestros movimientos. Destinado a toda persona con ganas de bailar y
      compartir espacios de creación.
    `, 
    date: "1 vez por semana, a partir del 10/09. Miércoles 17:00 a 18:30hs",
    backgroundImage: pulso
   }
];

export default talleres;