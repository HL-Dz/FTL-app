import React from 'react';
import "./Primera.scss";
import bernabeu from './Bernabeu.jpg'
import players from '../../../common/Players/playersData';
import Players from '../../../common/Players/Players';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';



let PrimeraBackground = {
  backgroundImage: `url(${bernabeu})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Primera = ({league, isFetching}) => {
  return (
    <div className="primera" style={PrimeraBackground}>
      <Players isFetching={isFetching} players={players.primera}/>
      <div className="container">
      <LeagueTemplate league={league} isFetching={isFetching} color="multi"/>
      </div>
    </div>
  )
}

export default Primera;