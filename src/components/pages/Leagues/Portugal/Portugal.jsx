import React from 'react';
import "./Portugal.scss";
import alvalade from './Alvalade.jpg'
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';

let portugalBackground = {
  backgroundImage: `url(${alvalade})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const PortugalLeague = ({league, isFetching, isFetchError}) => {
  return (
    <div className="portugal" style={portugalBackground}>
      <Players isFetching={isFetching} players={players.portugal} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} color="multi" isFetchError={isFetchError}/>
      </div>
    </div>
  )
}

export default PortugalLeague;