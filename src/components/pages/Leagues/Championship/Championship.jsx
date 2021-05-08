import React from 'react'
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import "./Championship.scss";
import Vicarage from './Watford.jpg';

let championshipBackground = {
  backgroundImage: `url(${Vicarage})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const Championship = ({league, isFetching, isFetchError}) => {
  return (
    <div className="championship" style={championshipBackground}>
      <Players isFetching={isFetching} players={players.chapmionship} isFetchError={isFetchError}/>
      <div className="container"> 
        <LeagueTemplate league={league} isFetching={isFetching} color="bchb" isFetchError={isFetchError}/>
      </div>
    </div>
  )
}

export default Championship;