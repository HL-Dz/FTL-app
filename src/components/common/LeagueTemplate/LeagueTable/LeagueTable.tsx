import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import noPhoto from '../../../../assets/images/no-image.png';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { addNewClub } from '../../../../redux/clubs-reducer';
import { ILeague, ITeamDesc } from '../../../../types/league';
import SearchElem from '../../SearchElem/SearchElem';
import BestScorers from '../BestScorers/BestScorers';
import LeagueDesignations from '../LeagueDesignations/LeagueDesignations';

interface LeagueTableProps {
  league: ILeague
  isFetchError: boolean
}

const LeagueTable: FC<LeagueTableProps> = ({league, isFetchError}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {clubs} = useTypedSelector(state => state.clubsPage);

  if(isFetchError) {
    return null;
  }

  const isSavedClub = (id: number) => {
    const savedClubs = clubs.some(el => el.id === id);
    return savedClubs;
  }

  const addClub = (club: ITeamDesc, order: number) => {
    let newClub = {
      ...club,
      cls: 'current-club',
      order: order
    }
    dispatch(addNewClub(newClub));
  }

  const code = league.competition.code;

  const filteredLeague = league.standings[0].table.filter(elem => {
    return elem.team.name?.toLowerCase().includes(search.toLowerCase());
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
              <th className="table-th">+/-</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {
                  filteredLeague.length === 0 ? <tr><td></td><td className="td-no-matches">No matches...</td></tr> :
                  filteredLeague.map(elem=> {
                  const name = elem.team.name?.trim().toLowerCase().replace(/\s/g, "-");
                  return (
                    <tr className="table-tr" key={elem.team.id}>
                      <td className="table-td">{elem.position}</td>
                      <td className="table-td table-td-active">
                        <NavLink to={`/teams/${elem.team.id}/${name}`}>
                          <span className="has-logo">
                            <img className="td-logo" src={elem.team.crestUrl || noPhoto} alt={elem.team.name || 'Object'}/>
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
                      {
                        isSavedClub(elem.team.id) ? 
                        <td className="table-td checked-club" title="Saved">
                          <i className="fas fa-check"></i>
                        </td> : 
                        <td className="table-td toggle-club" title="Save the club" onClick={() => {addClub(elem.team, Date.now())}}>
                          <i className="fas fa-folder-plus"></i>
                        </td>
                      }
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
          <BestScorers code={code}/>
        </div>
      </div>
    </>
  )
}

export default LeagueTable;