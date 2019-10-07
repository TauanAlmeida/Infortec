import React from 'react';
import './Metodologia.css'
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import bottomBar from '../assets/bottom-bar.svg'
import sprint from '../assets/sprint.svg'
import xp from '../assets/xp.svg'
import proccess from '../assets/proccess.svg'

export default function Metodologia() {
  return (
    <div className="wrapper-page metodologia">
      <Title title="Metodologia"/>
      <HeaderBar name="metodoBar"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="scrum-container">
              <img className="scrum-img" src={sprint} alt="Processo"/>
            </div>
          </div>
          <div className="mt-5 col-12 col-sm-12 col-md-6 col-lg-6">
            <h2 className="subtitle">Scrum</h2>
            <p className="text-mtd">Scrum é uma metodologia ágil para gestão e planejamento de projetos de software. Nela os processos são divididos em ciclos, no caso da INFORTEC as entregas serão entregues semanalmente, todas às segundas-feiras. O Sprint representa um Time Box dentro do qual um conjunto de atividades deve ser executado as funcionalidades a serem implementadas.</p>
            <a className="link-mtd" href="">Saiba mais...</a>
          </div>
        </div>
       <div className="bar-container">
          <img className="bottom-bar" src={bottomBar} alt="BottomBar"/>
       </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          
            <h2 className="subtitle">Extreme Programming (XP)</h2>
            <p className="text-mtd">Com o objetivo de cada vez mais melhorar o atendimento, a fábrica de software INFORTEC utiliza também a metodologia de programação extrema (do inglês eXtreme Programming) mais conhecido como XP, com o intuito de ter o contato direto com o cliente. Essa metodologia adota os valores de comunicação, simplicidade, feedback e coragem, entregando funcionalidades de forma rápida e eficiente.</p>
            <a className="link-mtd" href="">Saiba mais...</a>
         
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="scrum-container">
              <img className="scrum-img" src={xp} alt="Exteme Programming"/>
            </div>
          </div>
        </div>
        <div className="bar-container">
          <img className="bottom-bar" src={bottomBar} alt="BottomBar"/>
       </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="scrum-container">
              <img className="scrum-img" src={proccess} alt="Processo"/>
            </div>
          </div>
          <div className="mt-5 col-12 col-sm-12 col-md-6 col-lg-6">
            <h2 className="subtitle">Processo</h2>
            <p className="text-mtd">Processo é o conjunto de práticas executadas para se alcançar o produto final. Para o processo de desenvolvimento de software da Infortec utilizamos 5 Etapas: Planejamento, Coleta de dados, Construção do código, Teste e Entrega do produto.</p>
            <a className="link-mtd" href="">Saiba mais...</a>
          </div>
        </div>
      </div>
    </div>
  );
}
