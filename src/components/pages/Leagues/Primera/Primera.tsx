import React, { FC, useState } from 'react';
import "./Primera.scss";
import bernabeu from './Bernabeu.jpg'
import players from '../../../common/Players/playersData';
import Players from '../../../common/Players/Players';
import LeagueTemplate from '../../../common/LeagueTemplate/LeagueTemplate';
import Footer from '../../../common/Footer/Footer';
import { LeagueProps } from '../../../../types/common';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';

let PrimeraBackground = {
  backgroundImage: `url(${bernabeu})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const Primera: FC<LeagueProps> = ({league, isFetching, isFetchError, errorLeagueMessage}) => {
  const [errorModal, setErroModal] = useState(true);
  return (
    <div className="primary-container primera" style={PrimeraBackground}>
      {isFetchError && errorModal ? <ErrorModal errorMessage={errorLeagueMessage} setErrorModal={setErroModal}/> : null}
      <Players isFetching={isFetching} players={players.primera} isFetchError={isFetchError}/>
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

export default Primera;