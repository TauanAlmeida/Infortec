import React from 'react';
import Home from './pages/Home.js';
import Contato from './pages/Contato.js';
import Portfolio from './pages/Portfolio.js';
import Equipe from './pages/Equipe.js';
import Metodologia from './pages/Metodologia.js';
import Ferramentas from './pages/Ferramentas.js';
import Footer from './components/Footer'

function App() {
  return (
  <>
    <Home/>
    <Metodologia/>
    <Portfolio/>
    <Ferramentas/>
    <Equipe/>
    <Contato/>
    <Footer/>
  </>
  );
}

export default App;
