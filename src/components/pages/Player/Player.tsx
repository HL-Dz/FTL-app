import React, {useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getPlayerProfile, resetAllData } from '../../../redux/player-reducer';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";
import photo from '../../../assets/images/noname.jpg'
import ErrorPopup from '../../common/ErrorPopup/ErrorPopup';
import YearSelection from '../../common/YearSelection/YearSelection';
import dataYears from '../../common/YearSelection/dataYears';
import Matches from './Matches/Matches';
import Loading from '../../common/Loading/Loading';
import { getCurrentAge } from '../../../helpers/helpers';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface PlayerParams {
  id: string
}

const Player: FC = () => {
  const dispatch = useDispatch();
  const {player, isFetchError, isLoading} = useTypedSelector(state => state.playerPage)
  const {id} = useParams<PlayerParams>();

  useEffect(() => {
    dispatch(getPlayerProfile(id));

    return () => { dispatch(resetAllData())}
  }, [dispatch, id]);

  let countryOfBirth = '';

  if(player) {
    countryOfBirth = `../../images/Countries/${player.countryOfBirth}.png`;
  }

  return (
    <div className="primary-container football-player">
      {isLoading && <Loading/>}
      {isFetchError && <ErrorPopup/>}
      {
        player && 
        <>
          <div className="container-width">
            <div className="player-card">
              <YearSelection  selection={dataYears} player={player}/>
              <div className="player-card__pic">
                <img src={photo} alt="No user" className="player-card__img"/>
              </div>
              <div className="player-card__description">
                <div className="player-card__first-name">{player.firstName}</div>
                <div className="player-card_name">{player.name}</div>
                <div className="player-card__birth">
                <span>Date of birth: </span>
                {player.dateOfBirth ? `${player.dateOfBirth} ( ${getCurrentAge(player.dateOfBirth)} )` : "No data..."}
                </div>
                <div className="player-card__country">
                  <span>Country of birth: </span>
                  {
                    !player.countryOfBirth ? <span className="no-flag">?</span> :
                    <img className="flag" src={countryOfBirth} alt={player.countryOfBirth} title={player.countryOfBirth}/>
                  }
                </div>
                <div className="player-card-position">
                  <span>Position: </span>
                  {player.position || 'No data...'}
                </div>
              </div>
            </div>
          </div>
          <Matches/>
        </>
      }
      <Footer isFetchError={isFetchError} isFetching={isLoading}/>
    </div>
  )
}

export default Player;