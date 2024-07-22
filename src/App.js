import React from 'react';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';
import Periodico from './components/Periodico/Periodico';
import EventsContainer from './components/EventsContainer/EventsContainer';
import SomosRefi from './components/SomosRefi/SomosRefi';
import Contact from './components/Contact/Contact';
// import Galeria from './components/Galeria/Galeria';
import ToUpButton from './components/ToUpButton/ToUpButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Separator />
      <EventsContainer />
      <SomosRefi />
      <Contact />
      <Periodico />
      {/* <Galeria /> */}
      <Separator />
      <ToUpButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;
