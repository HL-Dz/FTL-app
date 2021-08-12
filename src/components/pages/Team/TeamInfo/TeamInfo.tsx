import React, { FC } from 'react'
import { ITeam } from '../../../../types/team';

interface TeamInfoProp {
  team: ITeam | null
  showMap: (value: string) => void
}

const TeamInfo: FC<TeamInfoProp> = ({team, showMap }) => {

  let clubColors = team?.clubColors?.split(' / ');
  
  const detailListWithoutContent = 
    <div className="team__details">
      <dl className="detail-list loading-bg">
        Loading data...
      </dl>
    </div>;
  
  return (
  <div className="team__info">
    {
      !team ? detailListWithoutContent : 
      <div className="team__details">
        <dl className="detail-list">
          <dt>
            <span className="detail-text">Location</span>
            <i className="fas fa-map-marker-alt icon-setting icon-location"></i>
            <i 
              className="fas fa-street-view icon-setting icon-address" 
              title="Show on the map"
              onClick={() => showMap(team.address)}
            >
            </i>
          </dt>
          <dd>{team.address || '-------'}</dd>
          <dt>
            <span className="detail-text">Club colors</span>
            <i className="fas fa-palette icon-setting"></i>
          </dt>
          <dd>
            {clubColors?.map((color, ind) =>
              <span key={ind} className="team-color" style={{background: color}} title={color}></span>
            )}
          </dd>
          <dt>
            <span className="detail-text">Founded</span>
            <i className="far fa-clock icon-setting"></i>
          </dt>
          <dd>{team.founded || '-------'}</dd>
          <dt>
            <span className="detail-text">Stadium</span>
            <i className="fas fa-house-user icon-setting"></i>
          </dt>
          <dd>{team.venue}</dd>
        </dl>
      </div>
    }
    {
      !team ? detailListWithoutContent : 
      <div className="team__contacts">
        <dl className="detail-list">
          <dt>
            <span className="detail-text">Email</span>
            <i className="fas fa-envelope icon-setting"></i>
          </dt>
          <dd>
            {
              team.email ? <a href={`mailto:${team.email}`}>{team.email}</a> :
              <span>No email...</span>
            }
          </dd>
          <dt>
            <span className="detail-text">Phone</span>
            <i className="fas fa-phone icon-setting"></i>
          </dt>
          <dd>{team.phone || '-------'}</dd>
          <dt>
            <span className="detail-text">Website</span>
            <i className="fas fa-globe icon-setting"></i>
          </dt>
          <dd>
            <a href={`${team.website}`} target="_blank" rel="noreferrer">
              {team.website || '-------'}
            </a>
          </dd>
          <dt>
            <span className="detail-text">TLA (Text Link Ads)</span>
            <i className="fas fa-file-word icon-setting"></i>
          </dt>
          <dd>{team.tla}</dd>
        </dl>
      </div>
    }
  </div>
  )
}

export default TeamInfo
