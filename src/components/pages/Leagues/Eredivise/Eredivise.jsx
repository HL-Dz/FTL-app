import React from 'react';
import Footer from '../../../common/Footer/Footer';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import "./Eredivise.scss";
import Philips from './Philips.jpg';

let ErediviseBackground = {
  backgroundImage: `url(${Philips})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Eredivise = ({league, isFetching, isFetchError}) => {
  return (
    <div className="primary-container eredivise" style={ErediviseBackground}>
      <Players isFetching={isFetching} players={players.netherlands} isFetchError={isFetchError}/>
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

export default Eredivise;