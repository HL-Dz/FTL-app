import React from 'react';
import Footer from '../../../common/Footer/Footer';
import "./WorldCup.scss";

const WorldCup = () => {
  return (
    <div className="world-cup flex-container-column">
      <div className="container">
        <h1 className="world-cup-title">World Cup</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default WorldCup;