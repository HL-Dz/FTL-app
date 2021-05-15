import React from 'react';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";

const Player = () => {
  return (
    <div className="football-player flex-container-column">
      <div className="container">
        <h1>Football Player</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Player;