import React from 'react';
import "./SerieA.scss";
import Olimpico from './Olimpico.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';


let SerieABackground = {
  backgroundImage: `url(${Olimpico})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const SerieA = ({isFetching, league, isFetchError}) => {
  return (
    <div className="serieA flex-container-column" style={SerieABackground}>
      <Players isFetching={isFetching} players={players.italy} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} isFetchError={isFetchError}/>
      </div>
      <Footer isFetchError={isFetchError} isFetching={isFetching}/>
    </div>
  )
}

export default SerieA;