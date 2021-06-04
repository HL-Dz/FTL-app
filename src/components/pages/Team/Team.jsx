import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile } from '../../../redux/team-reducer';
import TeamDescription from './TeamDescription/TeamDescription';
import TeamPrimary from './TeamPrimary/TeamPrimary';
import "./Team.scss";
import PlayerList from './PlayerList/PlayerList';
import ErrorPopup from '../../common/ErrorPopup/ErrorPopup';
import Footer from '../../common/Footer/Footer';

const Team = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const team = useSelector(state => state.teamPage.team);
  const isFetchError = useSelector(state => state.teamPage.isFetchError);
  const isLoading = useSelector(state => state.teamPage.isLoading);

  useEffect(() => {
    dispatch(getTeamProfile(id));
  }, [dispatch, id])


  return (
    <div className="team flex-container-column">
      {isFetchError && <ErrorPopup/>}
      <TeamPrimary team={team} isFetchError={isFetchError}/>
      <TeamDescription team={team} isFetchError={isFetchError}/>
      <PlayerList team={team} isFetchError={isFetchError}/>
      <Footer isFetching={isLoading} isFetchError={isFetchError}/>
    </div>
  )
}

export default Team;