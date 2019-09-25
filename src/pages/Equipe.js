import React from 'react';
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import Perfil from '../components/Perfil'
import Isaias from '../assets/isaias.jpg'
import './Equipe.css'

export default function Equipe() {
  return (
      <div className="wrapper-page equipe">
        <Title title="Equipe"/>
        <HeaderBar name="equipeBar"/>
        <div className="row">
          <div className="col col-lg-3">
          <Perfil name="Isaías Coelho"
          describe="Scrum Master e Designer"         
          foto={Isaias}/>
          </div>
          <div className="col col-lg-3">
          <Perfil name="Tauan Almeida"
            describe="Designer e Desenvolvedor" 
            foto="https://avatars3.githubusercontent.com/u/23041553?s=460&v=4"/>
          </div>
          <div className="col col-lg-3">
          <Perfil name="Eugenio Cavalcante"
            describe="Tester e Analista"
            foto="https://avatars3.githubusercontent.com/u/23041553?s=460&v=4"/>

          </div>
          <div className="col col-lg-3">
          <Perfil name="Gemersom Danilton"
            describe="Product Owner"
            foto="https://avatars3.githubusercontent.com/u/23041553?s=460&v=4"/>
                
          </div>
        </div>
      </div>
    );
}
