import React from 'react';
import './Ferramentas.css'
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'

export default function Ferramentas() {
  return (
    <div className="wrapper-page">
      <Title title="Ferramentas"/>
      <HeaderBar name="ferramentasBar"/>
    </div>
  );
}
