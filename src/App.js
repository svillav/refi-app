import React from 'react';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';
import Periodico from './components/Periodico/Periodico';
import EventsContainer from './components/EventsContainer/EventsContainer';
import SomosRefi from './components/SomosRefi/SomosRefi';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Separator />
      <Periodico />
      <EventsContainer />
      <SomosRefi />
      <Contact />
      <Separator />

    </React.Fragment>
  );
}

export default App;
