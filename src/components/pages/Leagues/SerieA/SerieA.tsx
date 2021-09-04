import React, { FC } from 'react';
import "./SerieA.scss";
import Olimpico from './Olimpico.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';
import { LeagueProps } from '../../../../types/common';

let SerieABackground = {
  backgroundImage: `url(${Olimpico})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const SerieA: FC<LeagueProps> = ({isFetching, league, isFetchError}) => {
  return (
    <div className="primary-container serieA" style={SerieABackground}>
      <Players isFetching={isFetching} players={players.italy} isFetchError={isFetchError}/>
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

export default SerieA;