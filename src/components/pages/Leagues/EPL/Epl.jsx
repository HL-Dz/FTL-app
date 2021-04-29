import React  from 'react';
import LeagueTemplate from '../../../LeagueTemplate/LeagueTemplate';
import "./Epl.scss";


const Epl = ({league, isFetching}) => {
  return (
    <div className="epl">
      <div className="container">
        {isFetching ? <p>Loading data...</p> : <LeagueTemplate league={league}/>}
      </div>
    </div>
  )
}

export default Epl;