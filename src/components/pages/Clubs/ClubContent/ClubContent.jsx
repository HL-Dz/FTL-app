import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTeam } from '../../../../redux/team-reducer';
import ErrorPopup from '../../../common/ErrorPopup/ErrorPopup';
import Loading from '../../../common/Loading/Loading';
import TeamDescription from '../../Team/TeamDescription/TeamDescription';
import TeamPrimary from '../../Team/TeamPrimary/TeamPrimary';
import './ClubContent.scss';

const ClubContent = () => {
  const dispatch = useDispatch();
  const team = useSelector(state => state.teamPage.team);
  const isFetchError = useSelector(state => state.teamPage.isFetchError);
  const isLoading = useSelector(state => state.teamPage.isLoading);

  useEffect(() => {
    return () => { dispatch(resetTeam())}
  }, [dispatch])


  return (
    <div className="club-content">
      {isFetchError && <ErrorPopup/>}
      { (isLoading) ? <Loading/> : 
        !team ? null : 
        <>
          <TeamPrimary team={team} isFetchError={isFetchError}/>
          <TeamDescription team={team} isFetchError={isFetchError}/>
        </>
      }
    </div>
  )
}

export default ClubContent;