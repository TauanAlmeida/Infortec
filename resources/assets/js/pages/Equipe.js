import React from 'react';
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import Perfil from '../components/Perfil'
import Isaias from '../assets/isaias.jpg'
import Eugenio from '../assets/eugenio.png'
import Gemersom from '../assets/gemersom.jpeg'
import './Equipe.css'


export default function Equipe() {
  return (
      <div className="wrapper-page equipe" id="team">
        <Title title="Equipe"/>
        <HeaderBar name="equipeBar"/>
        <div className="row">
          <div className="col col-lg-3">
          <Perfil name="Isaías Coelho"
          describe="Scrum Master e Coach"         
          foto={Isaias}/>
          </div>
          <div className="col col-lg-3">
          <Perfil name="Tauan Almeida"
            describe="Product Owner e Desenvolvedor" 
            foto="https://avatars3.githubusercontent.com/u/23041553?s=460&v=4"/>
          </div>
          <div className="col col-lg-3">
          <Perfil name="Eugenio Cavalcante"
            describe="Programador e Tester"
            foto={Eugenio}/>

          </div>
          <div className="col col-lg-3">
          <Perfil name="Gemerson Araujo"
            describe="Programador e Analista"
            foto={Gemersom}/>
                
          </div>
        </div>
      </div>
    );
}
