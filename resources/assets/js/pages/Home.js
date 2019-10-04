import React from 'react';
import Navbar from '../components/Navbar'
import './Home.css'
import heatmap from '../assets/home-heatmap.svg'
export default function Home() {
  return (
    <div className="home-wrapper">
        <Navbar/>
        <div className="container">
        <div className="row full-height">
          <div className="col  col-sm-12 col-md-6">
            <div className="text-container">
              <h1>Fácil e prático para você!</h1>
              <p>Empresa especializada em desenvolvimento de softwares e sistemas web.</p>
              <button className="btn buttons-default">Começe Agora</button>
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
