import React, { FC } from 'react';
import {getCurrnetDate} from '../../../../../helpers/helpers';
import { IMatch } from '../../../../../types/player';

interface MatchProps {
  match: IMatch
  showDetailsModal: (e: React.MouseEvent<HTMLDivElement>, match: IMatch) => void
}

const Match: FC<MatchProps> = ({match, showDetailsModal}) => {  
  return (
    <div className="match" onClick={(e) => showDetailsModal(e, match)}>
      <div className="short-match-info">
        <div className="match__date">{getCurrnetDate(match.utcDate.slice(0, 10))}</div>
        <div className="match__rivals">
          <div className="home-team">{match.homeTeam.name}</div>
          <div className="match__score">
            <span>{match.score.fullTime.homeTeam}</span>-
            <span>{match.score.fullTime.awayTeam}</span>
          </div>
          <div className="away-team">{match.awayTeam.name}</div>
        </div>
        <div className="match__competition">{match.competition.name}</div>
      </div>
    </div>
  )
}

export default Match;