import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div class="footer">
    <div class="container">
      <div class="social-work"> 
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
      </div>
      <div class="address">
        <span>192 Avenida dos minérios, Bairro Areia Branca. Petrolina - PE</span>
        <span>infortec@gmail.com</span>
       
      </div>
      <div class="line-row"></div>
      <div class="copyright">
        <span>Copyright © <span class="data"> 2019</span> Desenvolvido por INFORTEC. Todos os direitos reservados.</span>
      </div>
    </div>
    </div>
  );
}
