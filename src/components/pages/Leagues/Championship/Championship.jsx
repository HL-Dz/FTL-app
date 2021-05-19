import React from 'react'
import Footer from '../../../common/Footer/Footer';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import "./Championship.scss";
import Liberty from './Swansea.jpg';

let championshipBackground = {
  backgroundImage: `url(${Liberty})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const Championship = ({league, isFetching, isFetchError}) => {
  return (
    <div className="championship flex-container-column" style={championshipBackground}>
      <Players isFetching={isFetching} players={players.chapmionship} isFetchError={isFetchError}/>
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

export default Championship;