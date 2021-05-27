import React, { useState } from 'react';
import {getCurrnetDate} from '../../../../../helpers/helpers';

const Match = ({match}) => {
  const [isActive, setIsActive] = useState(false);

  const displayMatch = () => {
    setIsActive(true);
  }

  const hideMatch = (e) => {
    e.stopPropagation();
    setIsActive(false);
  }

  return (
    <div className={isActive ? "match match_active" : "match"} key={match.id} onClick={displayMatch}>
      <span className={isActive ? "close-btn close-btn_visible" : "close-btn"} onClick={hideMatch}>X</span>
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

      <div className="match__details">
        <div className="matchday">Matchday: {match.matchday ? match.matchday : ' - '}</div>
        <div className="half-time">
          <span>{match.score.halfTime.homeTeam}</span> Halftime <span>{match.score.halfTime.awayTeam}</span>
        </div>
        <div className="extra-time">
          <span>{match.score.extraTime.homeTeam || '0'}</span>Extratime<span>{match.score.extraTime.awayTeam || '0'}</span>
        </div>
        <div className="penalties">
          <span>{match.score.extraTime.homeTeam || '0'}</span>Penalties<span>{match.score.extraTime.awayTeam || '0'}</span>
        </div>
        <div className="referees-title">Referees</div>
        <div className="referees">
          {
            match.referees.map((elem, ind) => {
              const nationality = `../../images/Countries/${elem.nationality}.png`;
              return (
                <div className="referee" key={elem.id + 1}>
                  <div className="referee__name">{ind + 1}. {elem.name}</div>
                  <div className="referee__nationality">
                    <img className="flag" src={nationality} alt={elem.nationality} title={elem.nationality}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Match;