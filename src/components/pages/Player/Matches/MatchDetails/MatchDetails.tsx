import React, { FC } from 'react';
import { getCurrnetDate } from '../../../../../helpers/helpers';
import { IMatch } from '../../../../../types/player';
import "./MatchDetails.scss";
import Referee from './Referee/Referee';

interface MatchDetailsProps {
  selectedMatch: IMatch | null
  hideDetailsModal: () => void
}

const MatchDetails: FC<MatchDetailsProps> = ({hideDetailsModal, selectedMatch}) => {

  if(!selectedMatch) return null;

  const competition = selectedMatch.competition.name ? selectedMatch.competition.name : "No data";

  const scoreHomeFull = selectedMatch.score.fullTime.homeTeam ? selectedMatch.score.fullTime.homeTeam : 0;
  const scoreAwayFull = selectedMatch.score.fullTime.awayTeam ? selectedMatch.score.fullTime.awayTeam : 0;

  const scoreHomeHalf = selectedMatch.score.halfTime.homeTeam ? selectedMatch.score.halfTime.homeTeam : 0;
  const scoreAwayHalf = selectedMatch.score.halfTime.awayTeam ? selectedMatch.score.halfTime.awayTeam : 0;

  const scoreHomeExtra = selectedMatch.score.extraTime.homeTeam ? selectedMatch.score.extraTime.homeTeam : 0;
  const scoreAwayExtra = selectedMatch.score.extraTime.awayTeam ? selectedMatch.score.extraTime.awayTeam : 0;

  const petaltiesHomeTeam = selectedMatch.score.penalties.homeTeam ? selectedMatch.score.penalties.homeTeam : 0;
  const petaltiesAwayTeam = selectedMatch.score.penalties.awayTeam ? selectedMatch.score.penalties.awayTeam : 0;

  return (
    <div className="match-details">
      <div className="matchday">
        <div className="matchday__bg">
          <div className="matchday__wrap">
            <div className="matchday__date">
              {getCurrnetDate(selectedMatch.utcDate.slice(0, 10))}
            </div>
            <div className="matchday__teams">
              <div className="matchday__team">{selectedMatch.homeTeam.name}</div>
              <div className="matchday__vs">
                <span>vs</span>
              </div>
              <div className="matchday__team">{selectedMatch.awayTeam.name}</div>
            </div>
          </div>
        </div>
        <div className="matchday__desc">
          <div className="matchday__league">
            {competition}
          </div>
          <div className="matchday__full matchday__row">
            <span>{scoreHomeFull}</span> Fulltime <span>{scoreAwayFull}</span>
          </div>
          <div className="matchday__half matchday__row">
            <span>{scoreHomeHalf}</span> Halftime <span>{scoreAwayHalf}</span>
          </div>
          <div className="matchday__extra matchday__row">
            <span>{scoreHomeExtra}</span> Extratime <span>{scoreAwayExtra}</span>
          </div>
          <div className="matchday__penalties matchday__row">
            <span>{petaltiesHomeTeam}</span> Penalties <span>{petaltiesAwayTeam}</span>
          </div>
          <div className="matchday__referees">
            <div className="referees">
              <div className="referees__title">Referees</div>
              {
                selectedMatch.referees.length === 0 ? 
                <div>No referees...</div> : 
                selectedMatch.referees.map((referee, ind) => <Referee key={ind} referee={referee}/>)
              }
            </div>
          </div>
          <div className="matchday__buttons">
            <button className="matchday__close" onClick={hideDetailsModal}>Close</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MatchDetails;
