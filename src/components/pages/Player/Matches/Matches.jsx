import React from 'react';
import { useSelector } from 'react-redux';
import Match from './Match/Match';
import "./Matches.scss";

const Matches = () => {
  const matches = useSelector(state => state.playerPage.matches);
  const isLoadingMatches = useSelector(state => state.playerPage.isLoadingMatches);

  let commpetitions = [];
  if(matches) {
    let allCompetitions = matches.matches.map((elem, ind) => `${elem.competition.name}`);
    commpetitions = allCompetitions.filter((elem, index) => allCompetitions.indexOf(elem) === index);
  }

  return (
    <div className="matches">
      <div className="container-width">
        <div className={isLoadingMatches ? "matches-list matches-list_inactive" : "matches-list"}>
          {!matches ? <div className="notification">Please, select a year to display player matches.</div> : null}
          <div className="competitions">
              {commpetitions.map((elem, index) => {
                  return (
                    <div className="competition" key={index}>{elem}</div>
                  )
                })
              }
          </div>
          {matches && 
            <div className={!isLoadingMatches ? "matches-desc matches-desc_active" : "matches-desc"}>
              <div>Count of matches with <span>{matches.player.name}</span> in </div> 
              <div> {matches.filters.dateFrom.slice(0, 4)}: </div>
              <div><span className="matches-count">{matches.matches.length}</span></div>
            </div>}
          {!matches ? null : 
            matches.matches.map((match, ind) => <Match key={match.id} match={match}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Matches;