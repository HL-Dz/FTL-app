import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatсhes } from '../../../redux/player-reducer';
import Spinner from '../Spinner/Spinner';
import './YearSelection.scss';

const YearSelection = ({selection, player}) => {
  const [display, setDisplay] = useState(false);
  const [currentYear, setCurrentYear] = useState('');
  const dispatch = useDispatch();
  const isLoadingMatches = useSelector(state => state.playerPage.isLoadingMatches);

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  const showMatches = (year) => {
    setCurrentYear(year.title);
    setDisplay(false);

    if(display) {
      dispatch(getMatсhes(player.id, year.dateFrom, year.dateTo))
    }
  }

  useEffect(() => {
    return () => {
      document.removeEventListener('click', showMatches)
    }
  })

  
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