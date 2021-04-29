import React  from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Preloader from '../../../common/Preloader/Preloader';
import "./Epl.scss";

import emirates from "./Emirates.jpg";


let eplStyles = {
  backgroundImage: `url(${emirates})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain"
}


const Epl = ({league, isFetching}) => {
  return (
    <div className="epl" style={eplStyles}>
        <div className="players">
          <div className="player">
            <img src="./images/Epl/Leno.png" alt="Leno"/>
          </div>
          <div className="player">
            <img src="./images/Epl/Pogba.png" alt="Pogba"/>
          </div>
        </div>
      <div className="container">
        {isFetching ? <Preloader/> : <LeagueTemplate league={league}/>}
      </div>
    </div>
  )
}

export default Epl;