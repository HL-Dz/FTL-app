import React from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import allianz from './Bayern.jpg';
import "./Bundesliga.scss";


let bundesligaBackground = {
  backgroundImage: `url(${allianz})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Bundesliga = ({league, isFetching}) => {
  return (
    <div className="bundesliga" style={bundesligaBackground}>
      <Players isFetching={isFetching} players={players.bundesliga}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} color="red"/>
      </div>
    </div>
  )
}

export default Bundesliga;