import React from 'react';
import './Metodologia.css'
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import bottomBar from '../assets/bottom-bar.svg'
import sprint from '../assets/sprint.svg'
import xp from '../assets/xp.svg'
import proccess from '../assets/proccess.svg'
import xpImage from '../assets/xpImage.svg'
import teamXp from '../assets/teamXp.svg'

export default function Metodologia() {
  return (
    <div className="wrapper-page metodologia" id="methodology">
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
            <a className="link-mtd"data-toggle="collapse" href="#scrum"  role="button" aria-expanded="false" aria-controls="scrum">Saiba mais <i className="mr-2 fas fa-angle-down"></i></a>
          </div>
        </div>
        <div className="mt-5 collapse" id="scrum">
              <h2 className="subtitle text-center pb-3">Ciclo de vida Scrum</h2>
              <div className="sub-bar"></div>
            <div className="row">
              <div className="col col-md-12 ajust-flex-center">
                <img className="scrum-image" src="https://www.tecnicon.com.br/upload/public/Blog/post-scrum.png" alt="Scrum"/>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-12 text-mtd">
              <h2 className="subtitle text-center pb-3">Funcionalidades</h2>
              <div className="sub-bar"></div>
                <ul className="mt-5">
                  <li>
                    <b>Daily Scrum</b> é uma breve reunião que acontece diversas vezes durante a semana, disseminando o conhecimento da reunião anterior;
                  </li>
                  <li><b>Product Backlog</b> é uma lista contendo todas as funcionalidades desejadas para um produto;</li>
                  <li><b>Release Burndown</b> Chart é o eixo y (vertical do gráfico) e mostra a quantidade de trabalho que ainda precisa ser feita no início de cada Sprint. Scrum Master (Tauan Almeida) procura assegurar que a equipe respeite e siga os valores e as práticas do Scrum;</li>
                  <li><b>Scrum Team</b> é a equipe de desenvolvimento, onde os desenvolvedores Gemerson Araújo, Eugênio Cavalcante e Isaías Coelho. </li>
                  <li><b>Sprint Backlog</b>  é uma lista de tarefas que o Scrum Team se compromete a fazer em um Sprint;</li>
                  <li><b>Sprint Planning Meeting</b> , ou seja, uma reunião de planejamento;</li>
                  <li><b>Sprint Retrospective</b>  ocorre ao final de um Sprint e serve para identificar o que funcionou bem, o que pode ser melhorado e que ações serão tomadas para melhorar.
                Ao final de um Sprint, a equipe apresenta as funcionalidades implementadas em uma Sprint Review Meeting. Finalmente, faz-se uma Sprint Retrospective e a equipe parte para o planejamento do próximo Sprint. Assim reinicia-se o ciclo</li>
             
                </ul>
              </div>
          </div>
        </div>
       <div className="bar-container">
          <img className="bottom-bar" src={bottomBar} alt="BottomBar"/>
       </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <h2 className="subtitle">Extreme Programming (XP)</h2>
            <p className="text-mtd">Com o objetivo de cada vez mais melhorar o atendimento, a fábrica de software INFORTEC utiliza também a metodologia de programação extrema (do inglês eXtreme Programming) mais conhecido como XP, com o intuito de ter o contato direto com o cliente. Essa metodologia adota os valores de comunicação, simplicidade, feedback e coragem, entregando funcionalidades de forma rápida e eficiente.</p>
            <a className="link-mtd"data-toggle="collapse" href="#xp"  role="button" aria-expanded="false" aria-controls="xp">Saiba mais <i class="mr-2 fas fa-angle-down"></i></a>
          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="scrum-container">
              <img className="scrum-img" src={require('../../../../public/images/xp.svg')} alt="Exteme Programming"/>
            </div>
          </div>
        </div>
            <div className="mt-5 collapse text-mtd" id="xp">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="scrum-container">
                    <img className="scrum-img" src={xpImage} alt="Planejamento"/>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h5 className="subtitle">A partir desses valores o XP adota algumas práticas:</h5>
                  <ul className="mt-3">
                    <li>Jogo de Planejamento (Planning Game)</li>
                    <li>Fases pequenas (Small Releases)</li>
                    <li>Metáfora (Metaphor)</li>
                    <li>Time Coeso (Whole Team)</li>
                    <li>Testes de Aceitação (Customer Tests)</li>
                    <li>Semana de 40 horas (Sustainable Pace)</li>
                    <li>Programação Pareada (Pair Programming)</li>
                    <li>Padronização do Codigo (Coding Standards)</li>
                    <li>Desenvolvimento Orientado a Testes (Test Driven Development</li>
                    <li>Integração Contínua (Continuous Integration)</li>
                  </ul>
                </div>
              </div>
              <div className="bar-container">
                  <img className="bottom-bar" src={bottomBar} alt="BottomBar"/>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h5 className="subtitle">Os papéis do time de desenvolvimento englobam:</h5>
                  <ul className="mt-3 text-mtd">
                    <li>Desenvolvedores - Desenvolvem a solução</li>
                    <li>Testadores - Ajuda o cliente com os testes de aceitação</li>
                    <li>Analistas - Ajuda o cliente a definir os requisitos</li>
                    <li>Gerente - Garante os recursos necessários</li>
                    <li>Coach - Orienta a equipe, controlando a aplicação do XP</li>
                    <li>Tracker - Coleta as métricas do projeto</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="scrum-container">
                    <img className="scrum-img" src={teamXp} alt="Interação"/>
                  </div>
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
            <a className="link-mtd"data-toggle="collapse" href="#processo"  role="button" aria-expanded="false" aria-controls="processo">Saiba mais <i class="mr-2 fas fa-angle-down"></i></a>
          </div>
        </div>
        <div className="mt-5 collapse text-mtd" id="processo">
              <h5 className="subtitle text-center">Etapas do processo</h5>
          <div className=" mt-5 row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
              <ul>
                <li>
                Planejamento: A equipe analisará as informações sobre o projeto, para que se tenha ideia dos requisitos necessários na elaboração do sistema. Entrada: Requisitos disponíveis. Saída: Produto Backlog e Sprint Backlog
                </li>
                <li>
                Coleta de Dados: A equipe se reunirá com os clientes, no intuito de coletar o máximo de dados e informações para o desenvolvimento do sitema, bem como será definido uma lista de prioridades para entrega. Entrada: Produto Backlog e Sprint Backlog. Saída: Protótipo com critérios para testes.
                </li>
               
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <ul>
                <li>
                Construção do Código: As programadoras dará inicio a programação do sistema, de acordo com as prioridades definidas através do sprint Backlog. Entrada:Produto . Saída: Plano de teste e produto.
                </li>
                <li>
                Entrega do produto: Após todas as fases concluidas, o sistema será entregue. Saída: Sistema entregue.
                </li>
                <li>
                 Teste: Haverá teste em todas as fases do desenvolvimento, que serão feitos por todos da equipe, sendo primeiro pelos programadores Tauan, Gemerson, pelos testadores da equipe Eugenio e por último pelo cliente que dará a palavra final. Entrada: Protótipo com os critérios para testes. Saída: Produto.
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
