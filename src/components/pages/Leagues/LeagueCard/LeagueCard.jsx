import React from 'react';
import { Link } from 'react-router-dom';

const LeagueCard = ({path,imgSrc,title}) => {
  return (
    <div className="league">
      <Link to={path} className="league__link">
        <div className="league__pic">
          <img src={imgSrc} alt={title} className="league__img"/>
        </div>
        <div className="league__name">{title}</div>
      </Link>
    </div>
  )
}

export default LeagueCard;