import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delay } from '../../../../helpers/helpers';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { getLeague, resetLeagueProfile, toggleIsFetching } from '../../../../redux/league-reducer';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import { LeaguesData } from '../../Leagues/LeaguesData'
import Tournament from './Tournament';
import TournamentStandings from './TournamentStandings/TournamentStandings';

interface TournamentsProps {
  disTournament?: boolean
}


const Tournaments: FC<TournamentsProps> = ({disTournament}) => {
  const [isVisibleStandings, setIsVisibleStandings] = useState(false);
  const [isCloseStandings, setIsCloseStandings] = useState(false);
  const { league, isFetchError, isFetching } = useTypedSelector(state => state.leaguePage);


  const dispatch = useDispatch();

  const getTournament = async (code:string) => {
    setIsCloseStandings(false);
    dispatch(getLeague(code));
    await delay(490);
    localStorage.setItem('competitionCode', code);
    setIsVisibleStandings(true);
  }

  const closeCurrentStandings = async () => {
    setIsCloseStandings(true);
    await delay(490);
    setIsVisibleStandings(false);
  }

  useEffect(() => {
    let competitionCode = localStorage.getItem('competitionCode')  || 'BL1';
    if(!disTournament) {
      getTournament(competitionCode);
    }
  }, [])


  return (
    <div className="tournaments">
      <div className="tournaments__title">Standings</div>
      {
        isFetchError ? <div className="tournaments__error">Network error. Try get data a little later.</div> : null
      }
      {
        isFetching ? (
          <div className="tournaments__loading">
            <UniversalLoader/>
          </div>
        ) : null
      }
      {
        LeaguesData.map((elem) => {
          return <Tournament 
            key={elem.id} 
            dataLeague={elem} 
            getTournament={getTournament} 
          />
        })
      }
      {
        (isVisibleStandings && league) ? <TournamentStandings 
          league={league}
          closeCurrentStandings={closeCurrentStandings}
          isCloseStandings={isCloseStandings}
        /> : null
      }
    </div>
  )
}

export default Tournaments;
