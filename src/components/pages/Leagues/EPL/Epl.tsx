import React, { FC }  from 'react';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import "./Epl.scss";
import stadium from "./Emirates.jpg";
import players from '../../../common/Players/playersData';
import Players from '../../../common/Players/Players';
import Footer from '../../../common/Footer/Footer';
import { LeagueProps } from '../../../../types/common';



let eplBackground = {
  backgroundImage: `url(${stadium})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Epl: FC<LeagueProps> = ({league, isFetching, isFetchError}) => {
  return (
    <div className="primary-container epl" style={eplBackground}>
      <Players isFetching={isFetching} players={players.english} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate 
          league={league} 
          isFetching={isFetching} 
          isFetchError={isFetchError}
        />
      </div>
      <Footer isFetchError={isFetchError} isFetching={isFetching}/>
    </div>
  )
}

export default Epl;