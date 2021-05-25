import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrnetDate } from '../../../../helpers/helpers';
import "./Matches.scss";

const Matches = () => {
  const matches = useSelector(state => state.playerPage.matches);
  const isLoadingMatches = useSelector(state => state.playerPage.isLoadingMatches);

  return (
    <div className="matches">
      <div className="container-width">
        <div className={isLoadingMatches ? "matches-list matches-list_inactive" : "matches-list"}>
          {!matches ? <div className="notification">Please, select a year to display player matches.</div> : null}
          {!matches ? null : 
            matches.matches.map(match => {
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
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Matches;