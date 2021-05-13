import React from 'react';
import noPhoto from '../../../../images/no-image.png';

const TeamDescription = ({team, isFetchError}) => {
  if(isFetchError) return null;
  
  const detailListWithoutContent = 
    <div className="team__details">
      <dl className="detail-list loading-bg">
        Loading data...
      </dl>
    </div>;

    console.log(team);

  return (
    <section className="section-description">
      <div className="team-container team-container-flex">
        { !team ? 
        <div className="team__pic loading-bg">
          Loading data...
        </div> :
        <div className="team__pic">
          <img className="team__img" src={team.crestUrl || noPhoto} alt={team.name} />
        </div>
        }
        <div className="team__info">
          {
            !team ? detailListWithoutContent : 
            <div className="team__details">
              <dl className="detail-list">
                <dt>Address</dt>
                <dd>{team.address || '-------'}</dd>
                <dt>Club colors</dt>
                <dd>{team.clubColors || '-------'}</dd>
                <dt>Founded</dt>
                <dd>{team.founded || '-------'}</dd>
              </dl>
            </div>
          }
          {
            !team ? detailListWithoutContent : 
            <div className="team__contacts">
              <dl className="detail-list">
                <dt>Email</dt>
                <dd>
                  {
                    team.email ? <a href={`mailto:${team.email}`}>{team.email}</a> :
                    <span>No email...</span>
                  }
                </dd>
                <dt>Phone</dt>
                <dd>{team.phone}</dd>
                <dt>Website</dt>
                <dd>
                  <a href={`${team.website}`} target="_blank" rel="noreferrer">
                    {team.website || '-------'}
                  </a>
                </dd>
                <dt>Stadium</dt>
                <dd>{team.venue}</dd>
                <dt>TLA (Text Link Ads)</dt>
                <dd>{team.tla}</dd>
              </dl>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default TeamDescription;