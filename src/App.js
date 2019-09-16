import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.js'
import Home from './pages/Home.js';
import Contato from './pages/Contato.js';
import Portfolio from './pages/Portfolio.js';
import Equipe from './pages/Equipe.js';
import Metodologia from './pages/Metodologia.js';
import Ferramentas from './pages/Ferramentas.js';

function App() {
  return (
  <>
    <Home/>
    <Metodologia/>
    <Portfolio/>
    <Ferramentas/>
    <Equipe/>
    <Contato/>
  </>
  );
}

export default App;
