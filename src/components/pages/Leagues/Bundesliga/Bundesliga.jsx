import React from 'react';
import Footer from '../../../common/Footer/Footer';
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

const Bundesliga = ({league, isFetching, isFetchError, scorers}) => {
  return (
    <div className="bundesliga flex-container-column" style={bundesligaBackground}>
      <Players isFetching={isFetching} players={players.bundesliga} isFetchError={isFetchError}/>
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

export default Bundesliga;