import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestLeaguePlayers } from '../../../../redux/league-reducer';
import ToggleButton from '../../ToggleButton/ToggleButton';
import './BestScorers.scss';
import ScorerList from './ScorerList/ScorerList';

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
          scorers && scorers.map(elem => <ScorerList key={elem.player.id} elem={elem}/>)
        }
      </ul>
    </div>
  )
}

export default BestScorers
