import React, { useEffect, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile, resetTeam } from '../../../redux/team-reducer';
import TeamDescription from './TeamDescription/TeamDescription';
import TeamPrimary from './TeamPrimary/TeamPrimary';
import "./Team.scss";
import PlayerList from './PlayerList/PlayerList';
import Footer from '../../common/Footer/Footer';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ErrorModal from '../../common/ErrorModal/ErrorModal';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';

interface TeamParams {
  id: string
}

const Team: FC = () => {
  const [errorModal, setErrorModal] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams<TeamParams>();
  const { isFetchError, isLoading, team, teamErrorMessage } = useTypedSelector(state => state.teamPage);

  
  useEffect(() => {
    dispatch(getTeamProfile(Number(id)));
    
    return () => { dispatch(resetTeam())}
  }, [])
  
  return (
    <div className="primary-container team scroll-container">
      {isFetchError && errorModal ? <ErrorModal errorMessage={teamErrorMessage} setErrorModal={setErrorModal}/> : null}
      {
        isLoading ? 
        <div className="app-loading">
          <UniversalLoader/>
        </div> : 
        <>
          <TeamPrimary team={team} isFetchError={isFetchError}/>
          <TeamDescription team={team} isFetchError={isFetchError}/>
          <PlayerList team={team} isFetchError={isFetchError}/>
          <Footer isFetching={isLoading} isFetchError={isFetchError}/>
        </>
      }
    </div>
  )
}

export default Team;