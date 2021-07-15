import React from 'react';
import './InfoHelper.scss';
import gifClubs from '../../../../assets/images/SelectClub.gif';

const InfoHelper = ({isFetchError}) => {
  if(isFetchError) return null;
  
  return (
    <div className="info-helper">
      <div className="gif-pic">
        <img className="gif-pic__img" src={gifClubs} alt="Clubs" />
      </div>
    </div>
  )
}

export default InfoHelper
