import React from 'react';
import './Navbar.css'
import Logo from '../assets/Subtract.svg'

export default function Navbar() {
   /*  const midia = {
        facebook: 'http://wwww.facebook.com/tauan.face',
        instagram: 'https://www.instagram.com/tauan.almd/',
        linkedin: 'https://www.linkedin.com/in/tauan-almeida-1a508411b/',
        github: 'https://github.com/tauanAlmeida'
    } */

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-transparent">
    <a className="navbar-brand" href="/"> <img className="logo" src={Logo} alt="Ifortec"/>Infortec</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="ml-5 collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#methodology">Metodologia</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#projects">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tools">Ferramentas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#team">Equipe</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contato</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://docs.google.com/spreadsheets/d/1pTbRKvkIP3vNLnj7MzR-VtjhrQ9bgGuR2pXUNSRjkSQ/edit?usp=sharing">Cronograma</a>
            </li>
        </ul>
        {/* <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link"  target="_blank" rel="noopener noreferrer" href={midia.facebook}><i className="fab fa-facebook"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.instagram}><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.github}><i className="fab fa-github"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href={midia.linkedin}><i className="fab fa-linkedin"></i></a>
                </li>
            </ul> */}
    </div>
    </nav>
  );
}
