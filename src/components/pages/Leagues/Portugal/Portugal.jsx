import React from 'react';
import "./Portugal.scss";
import alvalade from './Alvalade.jpg'
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';

let portugalBackground = {
  backgroundImage: `url(${alvalade})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const PortugalLeague = ({league, isFetching, isFetchError, scorers}) => {
  return (
    <div className="portugal flex-container-column" style={portugalBackground}>
      <Players isFetching={isFetching} players={players.portugal} isFetchError={isFetchError}/>
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

export default PortugalLeague;