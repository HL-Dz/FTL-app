import React from 'react'

const TeamPrimary = ({team, isFetchError}) => {
  if(isFetchError) return null;
  
  return (
    <section className="section-primary">
      <div className="team-container">
        {
          !team ? <h1 className='team__name loading-bg'>Loading data...</h1> :
          <h1 className='team__name'>{team.name || '-------'}</h1>
        }
        {
          !team ? 
          <div className="breadcrumbs loading-bg">
            Loading data...
          </div> :
          <div className="breadcrumbs">
            <span>Home / </span>
            <span>{team.area.name || '-------'} / </span>
            <span>{team.name || '-------'}</span>
          </div>
        }
      </div>
    </section>
  )
}

export default TeamPrimary;