import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile, resetTeam } from '../../../redux/team-reducer';
import TeamDescription from './TeamDescription/TeamDescription';
import TeamPrimary from './TeamPrimary/TeamPrimary';
import "./Team.scss";
import PlayerList from './PlayerList/PlayerList';
import ErrorPopup from '../../common/ErrorPopup/ErrorPopup';
import Footer from '../../common/Footer/Footer';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface TeamParams {
  id: string
}

const Team: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<TeamParams>();
  const { isFetchError, isLoading, team } = useTypedSelector(state => state.teamPage);

  useEffect(() => {
    dispatch(getTeamProfile(id));

    return () => { dispatch(resetTeam())}
  }, [dispatch, id])


  return (
    <div className="primary-container team">
      {isFetchError && <ErrorPopup/>}
      <TeamPrimary team={team} isFetchError={isFetchError}/>
      <TeamDescription team={team} isFetchError={isFetchError}/>
      <PlayerList team={team} isFetchError={isFetchError}/>
      <Footer isFetching={isLoading} isFetchError={isFetchError}/>
    </div>
  )
}

export default Team;