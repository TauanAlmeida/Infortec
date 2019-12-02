import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'
import './Home.css'
//import heatmap from '../assets/home-heatmap.svg'
const heatmap = require('../assets/home-heatmap.svg')

export default function Home() {
  return (
    <div className="home-wrapper" id="home">
        <Navbar/>
        <div className="container">
        <div className="row full-height">
          <div className="col  col-sm-12 col-md-6">
            <div className="text-container">
              <h1>Fácil e prático para você!</h1>
            
              <p>Empresa especializada em desenvolvimento de softwares e sistemas web.</p>
              <a href="#methodology"><button className="btn buttons-default">Saiba mais</button></a>
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 flex-align-bottom-right">
           
              <img src={heatmap} alt="heatmap"/>
        
          </div>
        </div>

        </div>
    </div>
 
  );
}
