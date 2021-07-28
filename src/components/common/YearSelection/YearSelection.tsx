import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getMatсhes } from '../../../redux/player-reducer';
import { IPlayer } from '../../../types/player';
import Spinner from '../Spinner/Spinner';
import { IDataYear, IDataYears } from './dataYears';
import './YearSelection.scss';


interface IYearSelection {
  selection: IDataYears
  player: IPlayer
}


const YearSelection: FC<IYearSelection>  = ({selection, player}) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [currentYear, setCurrentYear] = useState('');
  const { isLoadingMatches } = useTypedSelector(state => state.playerPage);

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const showMatches = (year: IDataYear) => {
    setCurrentYear(year.title);
    setDisplay(false);

    if(display) {
      dispatch(getMatсhes(player.id, year.dateFrom, year.dateTo))
    }
  }

  
  return (
    <div className="year-selection">
      {isLoadingMatches ? <Spinner/> : null}
      <div 
      className={display ? "selection-bg selection-bg_active" : "selection-bg"}
      onClick={toggleDisplay}
    ></div>
      <div className="year-content" onClick={toggleDisplay}>
        {currentYear ? `YEAR: ${currentYear}` : selection.text}
        <div className="sort-icon">
          <i className={display ? "fas fa-arrow-up sort-year" : "fas fa-arrow-down sort-year"}></i>
        </div>
      </div>
      {
        !display ? null : 
        <div className="years">
          {
            selection.years.map(year => {
              return (
                <div 
                  className="year" 
                  key={year.id}
                  onClick={() => showMatches(year)}
                >{year.title}</div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default YearSelection;