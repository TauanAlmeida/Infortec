import React from 'react';
import './Ferramentas.css'
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import Tools from '../components/Tools'
import Git from '../assets/tools/git.png'
import bg from '../assets/Desktopbackground.svg'
import html from '../assets/tools/html5.png' 
import vue from '../assets/tools/logo.png'
import react from '../assets/tools/react.png'
import css from '../assets/tools/css3.png'
import bootstrap from '../assets/tools/bootstrap.png'
import materialize from '../assets/tools/materialize.png'
import node from '../assets/tools/nodejs.png'
import javascript from '../assets/tools/javascript.png'
import mysql from '../assets/tools/mysql.png'
import sqlite from '../assets/tools/sqlite.jpg'
import mongo from '../assets/tools/mongodb.png'
import Github from '../assets/tools/github.png'
import ps from '../assets/tools/photoshop.png'
import vsCode from '../assets/tools/vscode.png'
import figma from '../assets/tools//figma.png'
import redmine from '../assets/tools/redmine.png'
import laravel from '../assets/tools/laravel.png'
import gitlab from '../assets/tools/gitlab.png'

export default function Ferramentas() {
  return (
    <div className="wrapper-page ferramentas" id="tools">
     
      <Title className=" mt-5" title="Ferramentas" />
      <HeaderBar name="ferramentasBar"/>
     
        <h4>Ferramentas utilizadas pela Infortec no desenvolvimento de softwares.</h4>
        <div className="row">
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Git" image={Git}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Github" image={Github}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Figma" image={figma}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="VsCode" image={vsCode}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="NodeJS" image={node}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Laravel" image={laravel}/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Html5" image={html}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="VueJs" image={vue}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="ReactJs" image={react}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="CSS3" image={css}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Materalize" image={materialize}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Bootstrap" image={bootstrap}/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Javascript" image={javascript}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Mysql" image={mysql}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="sqlite" image={sqlite}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="mongo" image={mongo}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Gitlab" image={gitlab}/>
          </div>
          <div className="col-4 col-sm-2 col-md-2 col-lg-2">
            <Tools name="Redmine" image={redmine}/>
          </div>
        </div>
        
      </div>
  );
}
