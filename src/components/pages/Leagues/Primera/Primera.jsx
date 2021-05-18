import React from 'react';
import "./Primera.scss";
import bernabeu from './Bernabeu.jpg'
import players from '../../../common/Players/playersData';
import Players from '../../../common/Players/Players';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';



let PrimeraBackground = {
  backgroundImage: `url(${bernabeu})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Primera = ({league, isFetching, isFetchError, scorers}) => {
  return (
    <div className="primera flex-container-column" style={PrimeraBackground}>
      <Players isFetching={isFetching} players={players.primera} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate 
          league={league} 
          isFetching={isFetching} 
          isFetchError={isFetchError}
          scorers={scorers}
        />
      </div>
      <Footer isFetchError={isFetchError} isFetching={isFetching}/>
    </div>
  )
}

export default Primera;