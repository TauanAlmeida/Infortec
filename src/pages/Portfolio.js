import React from 'react';
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import './Portfolio.css'
import CardPort from '../components/CardProj'
import SGD from '../assets/sgd.png'

export default function Portfolio() {
  return (
    <div className="wrapper-page">
      <Title title="Portfolio"/>
      <HeaderBar name="portBar"/>
      <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 mb-4 col-lg-6 col-md-6 col-sm-12">
                <CardPort
                  img={SGD}
                  desc={`
                  Sistema Gerenciador Web de Departamento de Cursos 
                  `}
                  link="https://www.github.com/TauanAlmeida"
                />
              </div>
             {/*  <div className="col-12 mb-4 col-lg-6 col-md-6 col-sm-12">
                <CardPort
                  img={sgtt}
                  desc={`
                    Sistema para realizar e transferência de tecnologia. Desenvolvido em 
                    Laravel + Bootstrap (*Em desenvolvimento).
                  `}
                  link="https://www.github.com/TauanAlmeida"
                />
              </div> */}
            
            </div>
          </div>
    </div>
  );
}
