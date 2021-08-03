import React, { FC } from 'react';
import { LeagueProps } from '../../../../types/common';
import Footer from '../../../common/Footer/Footer';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import "./FranceLeague.scss";
import velodrom from './Velodrom.jpg'

let fl1Background = {
  backgroundImage: `url(${velodrom})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const FranceLeague: FC<LeagueProps> = ({league, isFetching, isFetchError }) => {
  return (
    <div className="primary-container france-league" style={fl1Background}>
      <Players isFetching={isFetching} players={players.france} isFetchError={isFetchError}/>
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

export default FranceLeague;