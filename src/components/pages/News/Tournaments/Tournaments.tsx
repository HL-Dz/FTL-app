import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delay } from '../../../../helpers/helpers';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { getLeague } from '../../../../redux/league-reducer';
import { LeaguesData } from '../../Leagues/LeaguesData'
import Tournament from './Tournament';
import TournamentStandings from './TournamentStandings/TournamentStandings';

interface TournamentsProps {
  disTournament?: boolean
}

const Tournaments: FC<TournamentsProps> = ({disTournament}) => {
  const [isVisibleStandings, setIsVisibleStandings] = useState(false);
  const [isCloseStandings, setIsCloseStandings] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { league, isFetchError } = useTypedSelector(state => state.leaguePage);


  const dispatch = useDispatch();

  let unsbscribe:any;

  const getTournament = async (code:string) => {
    setIsCloseStandings(false);
    setIsFetching(true);
    await dispatch(getLeague(code));
    localStorage.setItem('competitionCode', code);
    setIsVisibleStandings(true);
    setIsFetching(false);
  }

  const closeCurrentStandings = async () => {
    setIsCloseStandings(true);
    await delay(490);
    setIsVisibleStandings(false);
  }

  useEffect(() => {
    if(disTournament) {
      return;
    } else {
      let competitionCode = localStorage.getItem('competitionCode')  || 'BL1';
      unsbscribe = getTournament(competitionCode);
    }

    return unsbscribe;
  }, [])


  return (
    <div className="tournaments">
      <div className="tournaments__title">Standings</div>
      {
        isFetchError ? <div className="tournaments__error">Network error. Try get data a little later.</div> : null
      }
      {
        isFetching ? (
          <div className="tournaments__loading"></div>
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
