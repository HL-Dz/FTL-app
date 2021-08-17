import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delay } from '../../../../helpers/helpers';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { getLeague, toggleIsFetching } from '../../../../redux/league-reducer';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';
import { LeaguesData } from '../../Leagues/LeaguesData'
import Tournament from './Tournament';
import TournamentStandings from './TournamentStandings/TournamentStandings';


const Tournaments: FC = () => {
  const [isVisibleStandings, setIsVisibleStandings] = useState(false);
  const [isCloseStandings, setIsCloseStandings] = useState(false);
  const { league, isFetchError, isFetching } = useTypedSelector(state => state.leaguePage);

  const dispatch = useDispatch();

  const getTournament = async (code:string) => {
    setIsCloseStandings(false);
    dispatch(getLeague(code));
    await delay(490);
    setIsVisibleStandings(true);
  }

  const closeCurrentStandings = async () => {
    setIsCloseStandings(true);
    await delay(490);
    setIsVisibleStandings(false);
  }

  useEffect(() => {
    dispatch(toggleIsFetching(false));
  }, [])
  
  return (
    <div className="tournaments">
      <div className="tournaments__title">Standings</div>
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
