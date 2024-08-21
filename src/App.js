import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header/Header';
import ToUpButton from './components/ToUpButton/ToUpButton';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Agenda from './pages/Agenda';
import RefiCafe from './pages/RefiCafe';
import Tienda from './pages/Tienda';
import Cursos from './pages/Cursos';
import Comunidad from './pages/Comunidad';
import ComoEsRefi from './pages/ComoEsRefi';

import ScrollToTop from './scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        {/* <Route path="/refi-cafe" element={<RefiCafe />} /> */}
        {/* <Route path="/tienda" element={<Tienda />} />
        <Route path="/cursos" element={<Cursos />} /> */}
        <Route path="/comunidad" element={<Comunidad />} />
        {/* <Route path="/como-es-refi" element={<ComoEsRefi />} /> */}
      </Routes>
      <ToUpButton />
      <Footer />
    </Router>
  );
}

export default App;
