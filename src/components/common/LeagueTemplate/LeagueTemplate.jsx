import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Preloader from '../Preloader/Preloader';
import LeagueTable from './LeagueTable/LeagueTable';
import './LeagueTemplate.scss';
import OverviewLeagueCard from './OverviewLeagueCard/OverviewLeagueCard';

const LeagueTemplate = ({league, isFetching, color, isFetchError}) => {
  return (
    <>
      {isFetching ? <Preloader color={color}/> : 
        <div className="league-template">
          {isFetchError && <ErrorPopup/>}
          <OverviewLeagueCard league={league} isFetchError={isFetchError}/>
          <LeagueTable league={league} isFetchError={isFetchError}/>
        </div>
      }
    </>
  )
}

export default LeagueTemplate;