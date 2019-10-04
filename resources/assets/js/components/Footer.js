import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <div className="social-work"> 
        <a href="https://www.facebook.com/Infortec-Solu%C3%A7%C3%B5es-107176674020810" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" rel="noopener noreferrer"></i></a> 
        <a href="https://www.instagram.com/infortec_solucoes_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
         <a href="https://twitter.com/Infortec16" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="address">
        <span>192 Avenida dos minérios, Bairro Areia Branca. Petrolina - PE</span>
        <span>infortec@gmail.com</span>
       
      </div>
      <div className="line-row"></div>
      <div className="copyright">
        <span>Copyright © <span className="data"> 2019</span> Desenvolvido por INFORTEC. Todos os direitos reservados.</span>
      </div>
    </div>
    </div>
  );
}
