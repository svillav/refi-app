import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Landing/Home";
// import Events from "./components/Landing/Events";
// import About from "./components/Landing/About";
// import Gallery from "./components/Landing/Gallery";
// import Contact from "./components/Landing/Contact";
// import Footer from "./components/Landing/Footer";

const styles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

// const HomeLinks = () => (
//   <div>
//     <Link to="/events">Eventos</Link>
//     <Link to="/about">Qué es la comunidad</Link>
//     <Link to="/gallery">Galería</Link>
//     <Link to="/contact">Contacto</Link>
//   </div>
// );

// function Home() {
//   return (
//     <div style={styles}>
//       REFI
//       <HomeLinks />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Home />
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes> */}
//       <Footer />
//     </Router>
//   );
// }
