import React  from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Preloader from '../../../common/Preloader/Preloader';
import "./Epl.scss";


const Epl = ({league, isFetching}) => {
  return (
    <div className="epl">
      <div className="container">
        {isFetching ? <Preloader/> : <LeagueTemplate league={league}/>}
      </div>
    </div>
  )
}

export default Epl;