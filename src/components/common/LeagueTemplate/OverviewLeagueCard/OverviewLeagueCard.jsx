import React from 'react';

const OverviewLeagueCard = ({league, isFetchError}) => {
  if(isFetchError) {
    return null;
  }

  let imgSrc = `./images/${league.competition.code}/${league.competition.code}.png`;
  return (
    <div className="overview-card">
      <div className="overview-league">
        <div className="overview-pic">
          <img className="overview-img" src={imgSrc} alt={league.competition.code}/>
        </div>
        <div className="overview-country">{league.competition.area.name || '------'}</div>
      </div>
      <div className="overview-info">
        <div className="overview-card__text">Overview League Card</div>
        <div className="overview-card__name">
          <span>name:</span>
          <span>{league.competition.name || '------'}</span>
        </div>
        <div className="overview-card__stage">
          <span>stage: </span>
          <span>Regular season</span>
        </div>
        <div className="start-date">
          <span>start date:</span>
          <span>{league.season.startDate || '------'}</span>
        </div>
        <div className="finish-date">
          <span>finish date:</span>
          <span>{league.season.endDate || '------'}</span>
        </div>
        <div className="current-matchday">
          <span>matchday:</span>
          <span>{league.season.currentMatchday || '------'}</span>
        </div>
        <div className="winner">
          <span>winner:</span>
          <span>{!league.season.winner ? '-------' : league.season.winner.name}</span>
        </div>
      </div>
    </div>
  )
}

export default OverviewLeagueCard;