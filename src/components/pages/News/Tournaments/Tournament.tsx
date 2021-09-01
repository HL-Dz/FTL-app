import React, { FC, useEffect } from 'react'
import { LeagueDataCardProps } from '../../../../types/common';
import './Tournament.scss';

interface TournamentProps {
  dataLeague: LeagueDataCardProps,
  getTournament: (code: string) => void,
}

const Tournament: FC<TournamentProps> = ({dataLeague, getTournament}) => {
  return (
    <div className="tournament" onClick={() => getTournament(dataLeague.code)}>
      <div className="tournament__name">{dataLeague.title}</div>
      <div className="tournament__pic">
        <img className="tournament__img" src={dataLeague.imgSrcMini} alt={dataLeague.title} />
      </div>
    </div>
  )
}

export default Tournament;