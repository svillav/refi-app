import React from 'react';
import Header from './components/Header/Header';
import Separator from './components/Separator/Separator';
import Periodico from './components/Periodico/Periodico';
import EventsContainer from './components/EventsContainer/EventsContainer';
import SomosRefi from './components/SomosRefi/SomosRefi';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Separator />
      <Periodico />
      <EventsContainer />
      <SomosRefi />
    </React.Fragment>
  );
}

export default App;
