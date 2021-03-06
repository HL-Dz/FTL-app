import React, { FC } from 'react';
import tournament from '../../../../assets/images/tournament.png';
import './NoClubsInfo.scss';

const NoClubs: FC = () => {
  return (
    <div className="no-clubs">
      <div className="no-clubs__pic">
        <img className="no-clubs__img" src={tournament} alt="Tournament" />
      </div>
      <div className="no-clubs__text">
        <p>No saved clubs...</p>
        <p>Please, select a league and save the clubs.</p>
      </div>
    </div>
  )
}

export default NoClubs;