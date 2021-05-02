import React from 'react';
import Preloader from '../Preloader/Preloader';
import LeagueTable from './LeagueTable/LeagueTable';
import './LeagueTemplate.scss';
import OverviewLeagueCard from './OverviewLeagueCard/OverviewLeagueCard';

const LeagueTemplate = ({league, isFetching, color}) => {
  return (
    <>
      {isFetching ? <Preloader color={color}/> : 
      <div className="league-template">
        <OverviewLeagueCard league={league}/>
        <LeagueTable league={league}/>
      </div>}
    </>
  )
}

export default LeagueTemplate;