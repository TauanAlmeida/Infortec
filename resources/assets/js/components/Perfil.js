import React from 'react';
import './Perfil.css'

export default function Perfil(props) {
  return (
    <div className="card team">
          <div className="photo">
              <img src={props.foto} alt="perfil"/>
          </div>
          <div className="team-name">
              <h6>{ props.name }</h6>
              <p>{props.describe}</p>
          </div>
          <div className="social-network">
                <a href="face" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="insta"  target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="insta"  target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
  </div>
  );
}
