import React from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import "./FranceLeague.scss";
import velodrom from './Velodrom.jpg'

let fl1Background = {
  backgroundImage: `url(${velodrom})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const FranceLeague = ({league, isFetching}) => {
  return (
    <div className="france-league" style={fl1Background}>
      <Players isFetching={isFetching} players={players.france}/>
      <div className="container">
      <LeagueTemplate league={league} isFetching={isFetching} color="grey"/>
      </div>
    </div>
  )
}

export default FranceLeague;