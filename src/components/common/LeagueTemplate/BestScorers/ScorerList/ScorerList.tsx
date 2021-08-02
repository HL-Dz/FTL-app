import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IScorer } from '../../../../../types/league';

interface ScorerListProps {
  elem: IScorer
}

const ScorerList: FC<ScorerListProps> = ({elem}) => {
  let name = elem.player.name?.trim().toLowerCase().replace(/\s/g, "-");
  let countryOfBirth = `../../images/Countries/${elem.player.countryOfBirth}.png`;
  return (
    <li className="scorer">
      <div className="scorer__primary">
        <div className="scorer__name">
          {!elem.player.countryOfBirth ? <span className="no-flag">?</span> :
            <img className="flag" src={countryOfBirth} alt={elem.player.countryOfBirth} title={elem.player.countryOfBirth}/>
          }
          <NavLink to={`/players/${elem.player.id}/${name}`}>
            <span>{elem.player.name}</span>
          </NavLink>
        </div>
        <div className="scorer__club">{elem.team.name}</div>
      </div>
      <div className="scorer__total">
        <div className="goals">{elem.numberOfGoals}</div>
      </div>
    </li>
  )
}

export default ScorerList;