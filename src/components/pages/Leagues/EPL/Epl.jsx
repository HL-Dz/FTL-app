import React  from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import "./Epl.scss";

import emirates from "./Emirates.jpg";


let eplBackground = {
  backgroundImage: `url(${emirates})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Epl = ({league, isFetching}) => {
  return (
    <div className="epl" style={eplBackground}>
        <div className={isFetching ? "players" : "players players_visible"}>
          <div className="player">
            <img src="./images/Epl/Leno.png" alt="Leno"/>
          </div>
          <div className="player">
            <img src="./images/Epl/Pogba.png" alt="Pogba"/>
          </div>
        </div>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching}/>
      </div>
    </div>
  )
}

export default Epl;