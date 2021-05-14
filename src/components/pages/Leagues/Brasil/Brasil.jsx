import React from 'react'
import "./Brasil.scss";
import Maracana from './Maracana.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';

let brasilbackground = {
  backgroundImage: `url(${Maracana})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Brasil = ({league, isFetching, isFetchError}) => {
  return (
    <div className="brasil-division flex-container-column" style={brasilbackground}>
      <Players isFetching={isFetching} players={players.brasil} isFetchError={isFetchError}/>
      <div className="container">
        <LeagueTemplate league={league} isFetching={isFetching} isFetchError={isFetchError}/>
      </div>
      <Footer isFetchError={isFetchError} isFetching={isFetching}/>
    </div>
  )
}

export default Brasil;