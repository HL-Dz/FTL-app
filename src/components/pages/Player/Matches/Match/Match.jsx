import React from 'react';
import {getCurrnetDate} from '../../../../../helpers/helpers';

const Match = ({match}) => {
  return (
    <div className="match" key={match.id}>
      <div className="short-match-info">
        <div className="match__date">{getCurrnetDate(match.utcDate.slice(0, 10))}</div>
        <div className="match__rivals">
          <div className="home-team">{match.homeTeam.name}</div>
          <div className="match__score">
            <span>{match.score.fullTime.homeTeam}</span>-
            <span>{match.score.fullTime.awayTeam}</span>
          </div>
          <div className="away-team">{match.awayTeam.name}</div>
        </div>
        <div className="match__competition">{match.competition.name}</div>
      </div>
    </div>
  )
}

export default Match;