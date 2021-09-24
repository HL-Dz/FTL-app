import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { resetTeam, setErrorModal } from '../../../../redux/team-reducer';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import TeamDescription from '../../Team/TeamDescription/TeamDescription';
import TeamPrimary from '../../Team/TeamPrimary/TeamPrimary';
import InfoHelper from '../InfoHelper/InfoHelper';
import './ClubContent.scss';

const ClubContent = () => {
  const dispatch = useDispatch();
  const {errorModal, team, isFetchError, isLoading, teamErrorMessage} = useTypedSelector(state => state.teamPage);

  const setErrorModalHandler = (val: boolean) => {
    dispatch(setErrorModal(val));
  }

  useEffect(() => {
    return () => {
      dispatch(resetTeam());
    }
  }, [])

  return (
    <>
      {isFetchError && errorModal ? <ErrorModal errorMessage={teamErrorMessage} setErrorModal={setErrorModalHandler}/> : null}
      <div className="club-content">
        { isLoading ? (
          <div className="app-loading">
            <UniversalLoader/>
          </div>
        ) : 
          !team ? <InfoHelper isFetchError={isFetchError}/> : 
          <>
            <TeamPrimary team={team} isFetchError={isFetchError} shortList={true}/>
            <TeamDescription team={team} isFetchError={isFetchError}/>
          </>
        }
      </div>
    </>
  )
}

export default ClubContent;