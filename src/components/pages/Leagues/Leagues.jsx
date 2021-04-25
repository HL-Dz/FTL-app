import React from 'react'
import './Leagues.scss';

const Leagues = () => {
  return (
    <div className="leagues">
      <video  className="video-set" src="./videos/progression.mp4" autoPlay loop muted="muted"></video>
      <div className="leagues-container">
        <h1 className="leagues__title">Leagues</h1>
      </div>
    </div>
  )
}

export default Leagues
