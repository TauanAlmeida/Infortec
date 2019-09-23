import React from 'react';
import Title from '../components/HandleTitle'
import HeaderBar from '../components/HeaderBar'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <div className="wrapper-page">
      <Title title="Portfolio"/>
      <HeaderBar name="portBar"/>
    </div>
  );
}
