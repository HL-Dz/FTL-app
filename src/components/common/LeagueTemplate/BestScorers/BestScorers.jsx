import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBestLeaguePlayers } from '../../../../redux/league-reducer';
import ToggleButton from '../../ToggleButton/ToggleButton';
import './BestScorers.scss';

const BestScorers = ({code}) => {
  const dispatch = useDispatch()
  const [isVisible, setVisible] = useState(false);
  const scorers = useSelector(state => state.leaguePage.scorers);

  const toggleButton = () => {
    setVisible(!isVisible);
    
    if(!isVisible) {
      dispatch(getBestLeaguePlayers(code));
    }
  }
  
  return (
    <div className={isVisible ? "scorers scorers_active" : "scorers"}>
      <ToggleButton isVisible={isVisible} toggleElem={toggleButton}/>
      <h3 className="scorers-title">The best 10 scorers of league</h3>
      {scorers.length === 0 && <div className="no-scorers">No scorer list...</div>}
      <ul className="scorers-list">
        {
          scorers && scorers.map(elem => {
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
