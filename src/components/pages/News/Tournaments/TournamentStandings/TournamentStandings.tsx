import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ILeague } from '../../../../../types/league';
import "./TournamentStandings.scss";

import noPhoto from '../../../../../assets/images/no-image.png';

interface TournamentStandingsProps {
  league: ILeague | null
  isCloseStandings: boolean
  closeCurrentStandings: () => void
}


const TournamentStandings: FC<TournamentStandingsProps> = ({league, closeCurrentStandings, isCloseStandings}) => {

  let standings = league?.standings[0].table;
  
  return (
    <div className={isCloseStandings ? "tournament-standings tournament-standings_inactive" : "tournament-standings"}>
      <div className="standings">
        <i className="fas fa-angle-double-left standings__close" onClick={closeCurrentStandings}></i>
        <div className="standings__title">{league?.competition.name}</div>
        <table className="standings__table">
          <thead className="standings__head">
            <tr className="standings__tr">
              <th className="standings__th">POS</th>
              <th className="standings__th standings__th_team">TEAM</th>
              <th className="standings__th">G</th>
              <th className="standings__th">PTS</th>
            </tr>
          </thead>
          <tbody className="standings__body">
            {
              standings?.map(elem => {
                const name = elem.team.name?.trim().toLowerCase().replace(/\s/g, "-");
                return(
                  <tr key={elem.team.id} className="standings__tr">
                    <td className="standings__td standings__td_pos">{elem.position}</td>
                    <td className="standings__td standings__td_team">
                      <NavLink to={`/teams/${elem.team.id}/${name}`} className="standings__td-link">
                        <span className="standigns__td-pic">
                          <img src={elem.team.crestUrl ? elem.team.crestUrl : noPhoto} alt="Team" className="standigs__td-img" />
                        </span>
                        <span>{elem.team.name}</span>
                      </NavLink>
                    </td>
                    <td className="standings__td">{elem.playedGames}</td>
                    <td className="standings__td standings__td_points">{elem.points}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default TournamentStandings;