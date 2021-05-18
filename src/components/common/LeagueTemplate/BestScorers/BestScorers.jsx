import React from 'react';
import { NavLink } from 'react-router-dom';
import './BestScorers.scss';

const BestScorers = ({scorers}) => {
  return (
    <div className="scorers">
      <h3 className="scorers-title">The best 10 scorers of league</h3>
      <ul className="scorers-list">
        {
          scorers.length === 0 ? <div className="no-scorers">No scorer list...</div> : 
          scorers.map(elem => {
            let name = elem.player.name.trim().toLowerCase().replace(/\s/g, "-");
            let countryOfBirth = `../../images/Countries/${elem.player.countryOfBirth}.png`;
            return (
              <li className="scorer" key={elem.player.id}>
              <div className="scorer__primary">
                <div className="scorer__name">
                  <img className="flag" src={countryOfBirth} alt={elem.player.countryOfBirth} title={elem.player.countryOfBirth}/>
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
          })
        }
      </ul>
    </div>
  )
}

export default BestScorers
