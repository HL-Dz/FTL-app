import React, { FC } from 'react';
import './InfoHelper.scss';
import gifClubs from '../../../../assets/images/SelectClub.gif';

interface InfoHelperProps {
  isFetchError: boolean
}

const InfoHelper: FC<InfoHelperProps> = ({isFetchError}) => {
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
