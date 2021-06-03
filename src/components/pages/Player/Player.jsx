import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPlayerProfile } from '../../../redux/player-reducer';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";
import photo from '../../../images/noname.jpg'
import ErrorPopup from '../../common/ErrorPopup/ErrorPopup';
import YearSelection from '../../common/YearSelection/YearSelection';
import dataYears from '../../common/YearSelection/dataYears';
import Matches from './Matches/Matches';
import Loading from '../../common/Loading/Loading';
import { getCurrentAge } from '../../../helpers/helpers';

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.playerPage.player);
  const isFetchError = useSelector(state => state.playerPage.isFetchError);
  const isLoading = useSelector(state => state.playerPage.isLoading);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getPlayerProfile(id));
  }, [dispatch, id]);

  let countryOfBirth = '';

  if(player) {
    countryOfBirth = `../../images/Countries/${player.countryOfBirth}.png`;
  }

  return (
    <div className="football-player flex-container-column">
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
                <span>Date of birth: </span>{`${player.dateOfBirth} ( ${getCurrentAge(player.dateOfBirth)} )`}
                </div>
                <div className="player-card__country">
                  <span>Country of birth: </span>
                  {
                    !player.countryOfBirth ? <span class="no-flag">?</span> :
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
      <Footer/>
    </div>
  )
}

export default Player;