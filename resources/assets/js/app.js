
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

import Home from './pages/Home.js';
import Contato from './pages/Contato.js';
import Portfolio from './pages/Portfolio.js';
import Equipe from './pages/Equipe.js';
import Metodologia from './pages/Metodologia.js';
import Ferramentas from './pages/Ferramentas.js';
import Footer from './components/Footer'

import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/regular.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'



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


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}