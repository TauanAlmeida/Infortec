import React from 'react';
import './HandleTitle.css'

export default function HandleTitle(props) {

  return (
    <div className="wrapper-title">
        <h1 id={props.title.toLowerCase()} className={ ((props.title === "Ferramentas")? "text-white displayNone" : "displayNone")}>{props.title}</h1>
    </div>
  );
}
