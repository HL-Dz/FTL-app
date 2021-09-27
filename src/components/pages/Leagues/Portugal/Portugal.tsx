import React, { FC, useState } from 'react';
import "./Portugal.scss";
import alvalade from './Alvalade.jpg'
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';
import { LeagueProps } from '../../../../types/common';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';

let portugalBackground = {
  backgroundImage: `url(${alvalade})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}


const PortugalLeague: FC<LeagueProps> = ({league, isFetching, isFetchError, errorLeagueMessage}) => {
  const [errorModal, setErroModal] = useState(true);
  return (
    <div className="primary-container portugal scroll-container" style={portugalBackground}>
      {isFetchError && errorModal ? <ErrorModal errorMessage={errorLeagueMessage} setErrorModal={setErroModal}/> : null}
      <Players isFetching={isFetching} players={players.portugal} isFetchError={isFetchError}/>
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

export default PortugalLeague;