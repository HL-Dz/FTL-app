import React, { FC } from 'react';
import { ILeague } from '../../../types/league';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Loading from '../Loading/Loading';
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
      {isFetching ? <Loading/> : 
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