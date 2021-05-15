import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPlayerProfile } from '../../../redux/player-reducer';
import Footer from '../../common/Footer/Footer';
import "./Player.scss";

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
          <h1>{player.name}</h1>
        </div>
      }
      <Footer/>
    </div>
  )
}

export default Player;