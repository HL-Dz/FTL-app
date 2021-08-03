import React, { FC } from 'react';
import Footer from '../../../common/Footer/Footer';
import "./WorldCup.scss";

const WorldCup: FC = () => {
  return (
    <div className="primary-container world-cup">
      <div className="container">
        <h1 className="world-cup-title">World Cup</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default WorldCup;