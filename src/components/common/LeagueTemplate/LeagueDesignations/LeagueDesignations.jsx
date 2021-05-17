import React from 'react';
import './LeagueDesignations.scss'

const LeagueDesignations = () => {
  return (
    <div className="league-designations">
      <div className="designations-text">
        <span>P</span> - played games
      </div>
      <div className="designations-text">
        <span>W</span> - won
      </div>
      <div className="designations-text">
        <span>D</span> - draw
      </div>
      <div className="designations-text">
        <span>L</span> - lost
      </div>
      <div className="designations-text">
        <span>GF</span> - goals for
      </div>
      <div className="designations-text">
        <span>GA</span> - goals against
        </div>
      <div className="designations-text">
        <span>GD</span> - goals defference
      </div>
      <div className="designations-text">
        <span>PTS</span> - points
      </div>
    </div>
  )
}

export default LeagueDesignations;