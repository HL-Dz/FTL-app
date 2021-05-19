import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Loading from '../Loading/Loading';
import LeagueTable from './LeagueTable/LeagueTable';
import './LeagueTemplate.scss';
import OverviewLeagueCard from './OverviewLeagueCard/OverviewLeagueCard';

const LeagueTemplate = ({league, isFetching, isFetchError, scorers}) => {
  return (
    <>
      {isFetching ? <Loading/> : 
        <div className="league-template">
          {isFetchError && <ErrorPopup/>}
          <OverviewLeagueCard league={league} isFetchError={isFetchError}/>
          <LeagueTable league={league} isFetchError={isFetchError} scorers={scorers}/>
        </div>
      }
    </>
  )
}

export default LeagueTemplate;