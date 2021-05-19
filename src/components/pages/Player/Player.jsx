import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPlayerProfile } from '../../../redux/player-reducer';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";
import photo from '../../../images/noname.jpg'
import ErrorPopup from '../../common/ErrorPopup/ErrorPopup';

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.playerPage.player);
  const isFetchError = useSelector(state => state.playerPage.isFetchError);
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
      {isFetchError && <ErrorPopup/>}
      {
        (!player) ? null :
        <div className="container">
          <div className="player-card">
            <div className="player-card__pic">
              <img src={photo} alt="No user" className="player-card__img"/>
            </div>
            <div className="player-card__description">
              <div className="player-card__first-name">{player.firstName}</div>
              <div className="player-card_name">{player.name}</div>
              <div className="player-card__birth">
                <span>Date of birth: </span>{player.dateOfBirth}
              </div>
              <div className="player-card__country">
                <span>Country of birth: </span>
                <img className="flag" src={countryOfBirth} alt={player.countryOfBirth} title={player.countryOfBirth}/>
              </div>
              <div className="player-card-position">
                <span>Position: </span>
                {player.position || '-------'}
              </div>
            </div>
          </div>
        </div>
      }
      <Footer/>
    </div>
  )
}

export default Player;