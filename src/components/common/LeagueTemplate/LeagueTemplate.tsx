import React, { FC } from 'react';
import { ILeague } from '../../../types/league';
import Loading from '../Loading/Loading';
import UniversalLoader from '../UniversalLoader/UniversalLoader';
import LeagueTable from './LeagueTable/LeagueTable';
import './LeagueTemplate.scss';
import OverviewLeagueCard from './OverviewLeagueCard/OverviewLeagueCard';

interface LeagueTemplateProps {
  league: ILeague
  isFetching: boolean
  isFetchError: boolean
}

const LeagueTemplate: FC<LeagueTemplateProps> = ({league, isFetching, isFetchError}) => {
  return (
    <>
      {isFetching ? (
        <div className="app-loading">
          <UniversalLoader/>
        </div>
      ) : 
        <div className="league-template">
          <OverviewLeagueCard league={league} isFetchError={isFetchError}/>
          <LeagueTable league={league} isFetchError={isFetchError}/>
        </div>
      }
    </>
  )
}

export default LeagueTemplate;