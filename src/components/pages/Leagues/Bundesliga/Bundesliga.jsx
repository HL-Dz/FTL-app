import React from 'react';
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

const Bundesliga = () => {
  return (
    <div className="bundesliga" style={bundesligaBackground}>
      <Players isFetching={false} players={players.bundesliga}/>
      <div className="container">

      </div>
    </div>
  )
}

export default Bundesliga;