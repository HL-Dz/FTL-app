import React from 'react';

const Referee = ({referee}) => {
  const nationality = `../../images/Countries/${referee.nationality}.png`;
  return (
    <div className="referee">
      <div className="referee__name">{referee.name || 'No data'}</div>
      <div className="referee__nationality">
        {
          !referee.nationality ? <span className="no-flag"title="No flag">?</span> :
          <img className="flag" src={nationality} alt={referee.nationality} title={referee.nationality}/>
        }
      </div>
    </div>
  )
}

export default Referee;