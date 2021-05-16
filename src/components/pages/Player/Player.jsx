import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPlayerProfile } from '../../../redux/player-reducer';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";
import photo from '../../../images/noname.jpg'

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector(state => state.playerPage.player);
  const {id} = useParams();

  useEffect(() => {
    dispatch(getPlayerProfile(id));
  }, [dispatch, id]);


  return (
    <div className="football-player flex-container-column">
      {
        !player ? null :
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
                {player.countryOfBirth}
              </div>
              <div className="player-card-position">
                <span>Position: </span>
                {player.position}
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