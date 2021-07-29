import React, { FC } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ISquadItem, ITeam } from '../../../../types/team';
import SearchElem from '../../../common/SearchElem/SearchElem';
import "./ShortList.scss";

interface IShortList {
  team: ITeam | null
}

const ShortList: FC<IShortList> = ({team}) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');

  const toggleShortList = () => {
    setDisplay(!display);
 }

  if(!team) return null;

  const filteredPlayers = team.squad.filter((elem: ISquadItem) => {
    return elem.name?.toLowerCase().includes(search.toLowerCase());
  });
  
  return (
    <div className="short-list">
      <div className="short-list-header" onClick={toggleShortList}>
        <div 
          className={display ? "short-list-bg short-list-bg_active" : "short-list-bg"}
          onClick={toggleShortList}
        ></div>
        <div className="short-list__title">
          <i className="fas fa-users short-list__icon"></i>
          Players
          <i className={`fas short-list__icon ${!display ? 'fa-caret-down' : 'fa-caret-up'}`}></i>
        </div>
      </div>
        {
          !display ? null : 
          <div className="short-list-content">
            <div className="search-player">
              Search player
              <SearchElem search={search} setSearch={setSearch}/>
            </div>
            <div className="short-list__players">
              {
                filteredPlayers.length < 1 ? <div className="no-players">No players...</div> : 
                filteredPlayers.map(elem => {
                  const name = elem.name?.trim().toLowerCase().replace(/\s/g, "-");
                  const countryOfBirth = `../../images/Countries/${elem.countryOfBirth}.png`;
                  return (
                    <div className="short-list__player" key={elem.id}>
                      <NavLink to={`/players/${elem.id}/${name}`}>
                        {elem.name}
                        {
                          !elem.countryOfBirth ? <span className="no-flag" title="No flag">?</span> : 
                          <img className="flag" src={countryOfBirth} alt={elem.countryOfBirth} title={elem.countryOfBirth}/>
                        }
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
    </div>
  )
}

export default ShortList;