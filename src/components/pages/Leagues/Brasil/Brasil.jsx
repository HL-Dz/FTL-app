import React from 'react'
import "./Brasil.scss";
import Maracana from './Maracana.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';

let brasilbackground = {
  backgroundImage: `url(${Maracana})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Brasil = ({league, isFetching, isFetchError}) => {
  return (
    <div className="brasil-division" style={brasilbackground}>
      <Players isFetching={isFetching} players={players.brasil} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} isFetchError={isFetchError}/>
      </div>
    </div>
  )
}

export default Brasil;