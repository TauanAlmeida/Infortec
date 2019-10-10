import React from 'react';
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import Contact from '../assets/contact.svg'
import './Contato.css'


export default function Contato() {
  return (
    <div className="wrapper-page contact-global-container" id="contact">
      <Title title="Contato"/>
      <HeaderBar name="contatoBar"/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="contact-wrapper">
              <h6>Email:</h6>
              <h5>infortec@gmail.com</h5>
              <h6>Telefone:</h6>
              <h5>(87) 9886-5995</h5>
              <h6>Endereço:</h6>
              <h5>192 Avenida dos minérios, Bairro Areia Branca.<br/> Petrolina - PE</h5>
            </div>
          </div>
          <div className="col col-xl-4 col-md-6">
            <img className="contact" src={Contact} alt="Contato"/>
          </div>
        </div>
      </div>
    </div>
  );
}
