import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { resetTeam } from '../../../../redux/team-reducer';
import ErrorPopup from '../../../common/ErrorPopup/ErrorPopup';
import Loading from '../../../common/Loading/Loading';
import TeamDescription from '../../Team/TeamDescription/TeamDescription';
import TeamPrimary from '../../Team/TeamPrimary/TeamPrimary';
import InfoHelper from '../InfoHelper/InfoHelper';
import './ClubContent.scss';

const ClubContent = () => {
  const dispatch = useDispatch();
  const {team, isFetchError, isLoading} = useTypedSelector(state => state.teamPage);

  const errorMessage = ' Please, select the club a little later.';
  

  useEffect(() => {
    return () => {
      dispatch(resetTeam());
    }
  }, [dispatch])

  return (
    <div className="club-content">
      {isFetchError && <ErrorPopup message={errorMessage}/>}
      { isLoading ? <Loading/> : 
        !team  ? <InfoHelper isFetchError={isFetchError}/> : 
        <>
          <TeamPrimary team={team} isFetchError={isFetchError} shortList={true}/>
          <TeamDescription team={team} isFetchError={isFetchError}/>
        </>
      }
    </div>
  )
}

export default ClubContent;