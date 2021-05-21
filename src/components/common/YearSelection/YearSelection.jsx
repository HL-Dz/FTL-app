import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatсhes } from '../../../redux/player-reducer';
import './YearSelection.scss';

const YearSelection = ({selection, player}) => {
  const [display, setDisplay] = useState(false);
  const [currentYear, setCurrentYear] = useState('');
  const matches = useSelector(state => state.playerPage.matches);
  const dispatch = useDispatch();

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

  console.log(matches);

  
  return (
    <div className="year-selection">
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