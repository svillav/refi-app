import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../src/components/Header/Header"
import Separator from './components/Separator/Separator';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Separator />
      </div>
    </Router>
  );
}

export default App;