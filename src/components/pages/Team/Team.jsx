import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile } from '../../../redux/team-reducer';
import TeamDescription from './TeamDescription/TeamDescription';
import TeamPrimary from './TeamPrimary/TeamPrimary';
import "./Team.scss";

const Team = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const team = useSelector(state => state.teamPage.team);

  useEffect(() => {
    dispatch(getTeamProfile(id));
  }, [dispatch, id])

  return (
    <div className="team">
      <TeamPrimary team={team}/>
      <TeamDescription team={team}/>
    </div>
  )
}

export default Team;