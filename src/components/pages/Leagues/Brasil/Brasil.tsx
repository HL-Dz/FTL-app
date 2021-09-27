import React, { FC, useState } from 'react'
import "./Brasil.scss";
import Maracana from './Maracana.jpg';
import Players from '../../../common/Players/Players';
import players from '../../../common/Players/playersData';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';
import { LeagueProps } from '../../../../types/common';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';

let brasilbackground = {
  backgroundImage: `url(${Maracana})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Brasil: FC<LeagueProps> = ({league, isFetching, isFetchError, errorLeagueMessage}) => {
  const [errorModal, setErroModal] = useState(true);
  return (
    <div className="primary-container brasil-division scroll-container" style={brasilbackground}>
      {isFetchError && errorModal ? <ErrorModal errorMessage={errorLeagueMessage} setErrorModal={setErroModal}/> : null}
      <Players isFetching={isFetching} players={players.brasil} isFetchError={isFetchError}/>
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

export default Brasil;