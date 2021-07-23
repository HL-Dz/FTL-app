import React from 'react';
import "./MatchDetails.scss";

const MatchDetails = ({hideDetailsModal}) => {
  const nationality = `../../images/Countries/Argentina.png`;
  
  return (
    <div className="match-details">
      <div className="matchday">

        <div className="matchday__bg">
          <div className="matchday__date">
            December 16,2021
          </div>
        </div>

        <div className="matchday__desc">
          <div className="matchday__league">
            Eredivise
          </div>
          <div className="matchday__full matchday__row">
            <span>9</span> Fulltime <span>7</span>
          </div>
          <div className="matchday__half matchday__row">
            <span>0</span> Halftime <span>8</span>
          </div>
          <div className="matchday__extra matchday__row">
            <span>0</span> Extratime <span>0</span>
          </div>
          <div className="matchday__penalties matchday__row">
            <span>0</span> Penalties <span>0</span>
          </div>
          <div className="matchday__referees">
            <div className="referees">
              <div className="referees__title">Referees</div>
              <div className="referee">
                <div className="referee__name">Carlos Oliveera</div>
                <div className="referee__nationality">
                  <img className="flag" src={nationality} alt="Nationality" />
                </div>
              </div>

              <div className="referee">
                <div className="referee__name">Gilberto</div>
                <div className="referee__nationality">
                  <img className="flag" src={nationality} alt="Nationality" />
                </div>
              </div>
              <div className="referee">
                <div className="referee__name">Gilberto</div>
                <div className="referee__nationality">
                  <img className="flag" src={nationality} alt="Nationality" />
                </div>
              </div>
              <div className="referee">
                <div className="referee__name">Gilberto</div>
                <div className="referee__nationality">
                  <img className="flag" src={nationality} alt="Nationality" />
                </div>
              </div>

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


{/* <div className="match__details">
  <div className="matchday">Matchday: {match.matchday ? match.matchday : ' - '}</div>
  <div className="full-time">
    <span>{match.score.fullTime.homeTeam}</span> Fulltime <span>{match.score.fullTime.awayTeam}</span>
  </div>
  <div className="half-time">
    <span>{match.score.halfTime.homeTeam}</span> Halftime <span>{match.score.halfTime.awayTeam}</span>
  </div>
  <div className="extra-time">
    <span>{match.score.extraTime.homeTeam || '0'}</span>Extratime<span>{match.score.extraTime.awayTeam || '0'}</span>
  </div>
  <div className="penalties">
    <span>{match.score.extraTime.homeTeam || '0'}</span>Penalties<span>{match.score.extraTime.awayTeam || '0'}</span>
  </div>
  <div className="referees-title">Referees</div>
  <div className="referees">
    {
      match.referees.map((elem, ind) => {
        const nationality = `../../images/Countries/${elem.nationality}.png`;
        return (
          <div className="referee" key={ind}>
            {elem.name && <div className="referee__name">{elem.name}</div>}
            {elem.nationality && <div className="referee__nationality">
              <img className="flag" src={nationality} alt={elem.nationality} title={elem.nationality}/>
            </div>}
          </div>
        )
      })
    }
  </div>
</div> */}