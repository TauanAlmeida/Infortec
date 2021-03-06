import React, {useEffect} from 'react';
import './HeaderBar.css'

const handleAnimation = (id, classe) => {
  const elem = document.getElementById(`${id}`)
  if (!elem) {
    console.log('error: '+ id + ' classe not exists')
    return false
  }
  elem.classList.add(`${classe}`)
  elem.classList.remove("displayNone")
}
export default function HeaderBar(props) {

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
              handleAnimation('metodoBar', 'slideInRight')
              handleAnimation('metodologia', 'slideInRight')
            } 

            if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
              handleAnimation('portBar', 'slideInRight')
              handleAnimation('portfolio', 'slideInRight')
            }

            if(document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400){
              handleAnimation('ferramentasBar', 'slideInRight')
              handleAnimation('ferramentas', 'slideInRight')
            }

            if(document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300){
              handleAnimation('equipeBar', 'slideInRight')
              handleAnimation('equipe', 'slideInRight')
            }

            if(document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000){
              handleAnimation('contatoBar', 'slideInRight')
              handleAnimation('contato', 'slideInRight')
            }
        }
    });

  return (
    <div id={props.name} className="displayNone header-bar">
    </div>
  );
}
