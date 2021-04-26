import React from 'react'
import LeagueCard from './LeagueCard/LeagueCard';
import './Leagues.scss';
import {LeaguesData} from './LeaguesData.js';

const Leagues = () => {
  return (
    <div className="leagues">
      <video  className="video-set" src="./videos/progression.mp4" autoPlay loop muted="muted"></video>
      <div className="container">
        <div className="leagues-list">
          {
            LeaguesData.map(elem => <LeagueCard key={elem.id} {...elem}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Leagues;
