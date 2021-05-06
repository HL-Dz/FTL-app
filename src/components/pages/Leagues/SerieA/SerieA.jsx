import React from 'react';
import "./SerieA.scss";
import Olimpico from './Olimpico.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';


let SerieABackground = {
  backgroundImage: `url(${Olimpico})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const SerieA = ({isFetching, league, isFetchError}) => {
  return (
    <div className="serieA" style={SerieABackground}>
      <Players isFetching={isFetching} players={players.italy} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} color="blue" isFetchError={isFetchError}/>
      </div>
    </div>
  )
}

export default SerieA;