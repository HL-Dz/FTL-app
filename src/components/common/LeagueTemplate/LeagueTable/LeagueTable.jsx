import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import noPhoto from '../../../../images/no-image.png';
import SearchElem from '../../SearchElem/SearchElem';
import BestScorers from '../BestScorers/BestScorers';
import LeagueDesignations from '../LeagueDesignations/LeagueDesignations';

const LeagueTable = ({league, isFetchError, scorers}) => {
  const [search, setSearch] = useState('');

  if(isFetchError) {
    return null;
  }

  const code = league.competition.code;

  const filteredLeague = league.standings[0].table.filter(elem => {
    return elem.team.name.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <>
      <h1 className="table-title">league table</h1>
      <div className="table-league-container">
        <table className="league-table">
          <thead className="table-head">
            <tr className="table-tr table-tr-inactive">
              <th className="table-th">POS</th>
              <th className="table-th table-th-search">
                CLUB
                <SearchElem search={search} setSearch={setSearch}/>
              </th>
              <th className="table-th">P</th>
              <th className="table-th">W</th>
              <th className="table-th">D</th>
              <th className="table-th">L</th>
              <th className="table-th">GF</th>
              <th className="table-th">GA</th>
              <th className="table-th">GD</th>
              <th className="table-th">PTS</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {
                  filteredLeague.length === 0 ? <tr><td></td><td className="td-no-matches">No matches...</td></tr> :
                  filteredLeague.map(elem => {
                  const name = elem.team.name.trim().toLowerCase().replace(/\s/g, "-");
                  return (
                    <tr className="table-tr" key={elem.team.id}>
                      <td className="table-td">{elem.position}</td>
                      <td className="table-td table-td-active">
                        <NavLink to={`/teams/${elem.team.id}/${name}`}>
                          <span className="has-logo">
                            <img className="td-logo" src={elem.team.crestUrl || noPhoto} alt={elem.team.name}/>
                          </span>
                          {elem.team.name}
                        </NavLink>
                      </td>
                      <td className="table-td">{elem.playedGames}</td>
                      <td className="table-td">{elem.won}</td>
                      <td className="table-td">{elem.draw}</td>
                      <td className="table-td">{elem.lost}</td>
                      <td className="table-td">{elem.goalsFor}</td>
                      <td className="table-td">{elem.goalsAgainst}</td>
                      <td className="table-td">{elem.goalDifference}</td>
                      <td className="table-td">{elem.points}</td>
                    </tr>
                  )
                  })
                }
              </>
            }
          </tbody>
        </table>
        <div className="table-description">
          <LeagueDesignations/>
          <BestScorers scorers={scorers} code={code}/>
        </div>
      </div>
    </>
  )
}

export default LeagueTable;