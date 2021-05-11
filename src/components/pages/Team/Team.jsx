import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTeamProfile } from '../../../redux/team-reducer';
import "./Team.scss";

const Team = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const team = useSelector(state => state.teamPage.team);
  const isLoading = useSelector(state => state.teamPage.isLoading);

  useEffect(() => {
    dispatch(getTeamProfile(id));
  }, [dispatch, id])


  return (
    <div className="team">

      <section className="section-primary">
        <div className="team-container">
          {
            !team ? <h1 className='team__name loading-bg'>Loading data...</h1> :
            <h1 className='team__name'>{team.name}</h1>
          }
          {
            !team ? 
            <div className="breadcrumbs loading-bg">
              Loading data...
            </div> :
            <div className="breadcrumbs">
              <span>Home / </span>
              <span>{team.area.name} / </span>
              <span>{team.name}</span>
            </div>
          }
        </div>
      </section>

      <section className="section-description">
        <div className="team-container team-container-flex">
          { !team ? 
          <div className="team__pic loading-bg">
            Loading data...
          </div> :
          <div className="team__pic">
            <img className="team__img" src={`${team.crestUrl}`} alt={team.name} />
          </div>
          }
          <div className="team__info">
            {
              !team ? 
              <div className="team__details">
                <dl className="detail-list loading-bg">
                  Loading data...
                </dl>
              </div> : 
              <div className="team__details">
                <dl className="detail-list">
                  <dt>Address</dt>
                  <dd>{team.address}</dd>
                  <dt>Club colors</dt>
                  <dd>{team.clubColors}</dd>
                  <dt>Founded</dt>
                  <dd>{team.founded}</dd>
                </dl>
              </div>
            }
            {
              !team ?
              <div className="team__contacts">
                <dl className="detail-list loading-bg">
                  Loading data...
                </dl>
              </div> : 
              <div className="team__contacts">
                <dl className="detail-list">
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${team.email}`}>{team.email}</a>
                  </dd>
                  <dt>Phone</dt>
                  <dd>{team.phone}</dd>
                  <dt>Website</dt>
                  <dd>
                    <a href={`${team.website}`} target="_blank" rel="noreferrer">
                      {team.website}
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
    </div>
  )
}

export default Team;