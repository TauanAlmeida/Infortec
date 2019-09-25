import React from 'react';
import './Tools.css'

export default function Tools(props) {
  return (
    <div className="tools">
        <div className="adjust-icon">
            <img src={props.image} alt={props.name}/>
        </div>
        <h4>{props.name}</h4>
    </div>
  );
}
