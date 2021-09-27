import React, { FC, useState } from 'react';
import { LeagueProps } from '../../../../types/common';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';
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

const Bundesliga: FC<LeagueProps> = ({league, isFetching, isFetchError, errorLeagueMessage}) => {
  const [errorModal, setErroModal] = useState(true);
  return (
    <div className="primary-container bundesliga scroll-container" style={bundesligaBackground}>
      {isFetchError && errorModal ? <ErrorModal errorMessage={errorLeagueMessage} setErrorModal={setErroModal}/> : null}
      <Players isFetching={isFetching} players={players.bundesliga} isFetchError={isFetchError}/>
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

export default Bundesliga;