import React from 'react';
import './SomosRefi.scss';
import somosRefiImg from '../assets/somos_refi_foto.jfif'
import refiLogoImg from '../assets/refi blanco-01.png'

const SomosRefi = () => {

  return (
    <section id="somos-refi" className="somos-refi-section">
      <div className="somos-refi-content">
        <div className="image">
          <img src={somosRefiImg} alt="Imagen Somos Refi" />
        </div>
        <div className="text-container">
          <div className="title-container">
            <h2>SOMOS</h2>
            <img src={refiLogoImg} />
          </div>
          <div className="text">
            <p>
              La escuela, “la técnica 10”, la de calle Velez Sarfield 641, es hoy una refinería de
              contenidos, para el desarrollo y la innovación cultural.
            </p>
            <p>
              Refuncionalizando y poniendo en valor lo que supo ser, en 1936, la primera
              escuela técnica de la ciudad, una experiencia de taller-escuela orientada a los
              oficios electromecánicos que brindó educación pública y gratuita a los hijos
              e hijas de una gran cantidad de inmigrantes que llegaban a borbotones del
              viejo continente.
            </p>
            <p>
              Refi es completamente amplia, tiene espacio para todos y todas, de puertas abiertas para pasar el día, trabajar o venir a disfrutar de las diferentes movidas. Son aproximadamente 1600 mts2 de infraestructura y 100 mts de largo.
              Desde el inicio, en la comunidad funciona Refi Café, un espacio gastronómico
              que abre de martes a domingo de 9 a 13hs y de 16.30 a 20.30hs ofreciendo
              cafetería de especialidad y una carta de comida honesta para disfrutar los
              mejores desayunos y meriendas, siempre con la posibilidad de degustar los
              mejores tragos.
            </p>
            <p>
              La amplia capacidad de espacio dispone de diferentes zonas, un aulario
              restaurado donde se dictan cursos y seminarios. También existe un estudio de
              grabación y un nuevo espacio para el desarrollo y ejecución de espectáculos
              literarios, artísticos, musicales y teatrales con capacidad de hasta seiscientas
              personas, sonido, escenario y plantas de luces propia.
            </p>
            <p>
              Refi, además, cuenta con personal profesional en cada una de las áreas
              que abarca: gastronomía, docencia, comunicación, espectáculos, sonido, iluminación, escenario, construcción y software.
            </p>
            <span>
              Refi es cultura
            </span>
            <br />
            <span>
              Refi es encuentro
            </span>
            <br />
            <span>
              Refi es diversión
            </span>
            <br />
            <span>
              Refi es comunidad
            </span>
            <br />
            <br />
            <span>
              Refi es porvenir, y lo que se viene es para compartirlo con vos.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomosRefi;
