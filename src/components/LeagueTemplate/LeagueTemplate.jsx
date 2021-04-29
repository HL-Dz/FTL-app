import React from 'react';
import './LeagueTemplate.scss';

const LeagueTemplate = ({league}) => {
  return (
    <>
      <h1 className="epl-title">{league.competition.name}</h1>
      <table className="league-table">
        <thead className="table-head">
          <tr className="table-tr table-tr-inactive">
            <th className="table-th">POS</th>
            <th className="table-th">CLUB</th>
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
            league.standings[0].table.map(elem => {
              return (
                <tr className="table-tr" key={elem.team.id}>
                  <td className="table-td">{elem.position}</td>
                  <td className="table-td table-td-logo">
                    <span className="has-logo">
                      <img className="td-logo" src={elem.team.crestUrl} alt={elem.team.name}/>
                    </span>
                    {elem.team.name}
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
        </tbody>
      </table>
    </>
  )
}

export default LeagueTemplate;