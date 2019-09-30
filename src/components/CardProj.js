import React from 'react';
import './CardProj.css'


export default function CardExp(props) {
  return (
    <>
    <div className="card mb-3 card-exp-width">
      <img src={props.img} className="card-img-top image" alt="projeto"/>
        <div className="middle">
          <div className="text">{props.desc}</div>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-dark buttons-default stretched-link">Saiba mais</a>
        </div>
    </div>
    </>
  );
}