import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile } from '../../../redux/team-reducer';
import "./Team.scss";

const Team = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const team = useSelector(state => state.teamPage.team);

  useEffect(() => {
    dispatch(getTeamProfile(id));
  }, [dispatch, id])
  
  if(!team) return null;

  return (
    <div className="team">
      <div className="container">
        <div>
          <img src={team.crestUrl} alt={team.shortName} title={team.shortName}/>
        </div>
        <div>Name: {team.name || "---"}</div>
        <div>Address: {team.address || "---"}</div>
        <div>Founded: {team.founded || "---"}</div>
        <div>Venue: {team.venue || "---"}</div>
        <div>Club colors: {team.clubColors || "---"}</div>
        <div>Phone: {team.phone || "---"}</div>
        <div>Email: {team.email || "---"}</div>
        <div>ShortName: {team.shortName || "---"}</div>
        <div>Website: {team.website || "---"}</div>
      </div>
    </div>
  )
}

export default Team;