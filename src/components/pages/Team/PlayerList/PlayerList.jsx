import React from 'react';
import { NavLink } from 'react-router-dom';


const PlayerList = ({team, isFetchError}) => {
  if(isFetchError) return null;

  return (
    <div className="player-list">
      <div className="team-container">
        {
          !team ? <h2 className="loading-bg">Loading data</h2> :
          <h2 className="table-title">
            {
              team.squad.length ? "PLAYER LIST" : "No player list, because the season has not started yet..."
            }
          </h2>
        }
        {
          !team ?  <div className="loading-bg">Loading data...</div> :
          team.squad.length !== 0 && <table className="team-table">
            <thead className="table-head">
              <tr className="table-tr">
                <th className="table-th">#</th>
                <th className="table-th">NAME</th>
                <th className="table-th">POSITION</th>
                <th className="table-th">NATIONALITY</th>
                <th className="table-th">COUNTRY OF BIRTH</th>
                <th className="table-th">ROLE</th>
              </tr>
            </thead>
            <tbody>
              {
                team.squad.map((elem, index) => {
                  const name = elem.name.trim().toLowerCase().replace(/\s/g, "-");
                  const countryOfBirth = `../../images/Countries/${elem.countryOfBirth}.png`;
                  const nationality = `../../images/Countries/${elem.nationality}.png`;
                  return (
                    <tr className="table-tr" key={elem.id}>
                      <td className="table-td">{index + 1}</td>
                      <td className="table-td table-td-active">
                        <NavLink to={`/players/${elem.id}/${name}`} className="table-player">
                          {elem.name}
                        </NavLink>
                      </td>
                      <td className="table-td">{elem.position}</td>
                      <td className="table-td">
                        <img className="flag" src={nationality} alt={elem.nationality} title={elem.nationality}/>
                      </td>
                      <td className="table-td">
                        <img className="flag" src={countryOfBirth} alt={elem.countryOfBirth} title={elem.countryOfBirth}/>
                      </td>
                      <td className="table-td">{elem.role}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default PlayerList;