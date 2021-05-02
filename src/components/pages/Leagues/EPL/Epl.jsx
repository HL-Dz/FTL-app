import React  from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import "./Epl.scss";
import stadium from "./Emirates.jpg";
import players from '../../../common/Players/playersData';
import Players from '../../../common/Players/Players';



let eplBackground = {
  backgroundImage: `url(${stadium})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Epl = ({league, isFetching}) => {
  return (
    <div className="epl" style={eplBackground}>
      <Players isFetching={isFetching} players={players.english}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} color="purple"/>
      </div>
    </div>
  )
}

export default Epl;