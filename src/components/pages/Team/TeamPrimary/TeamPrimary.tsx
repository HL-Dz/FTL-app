import React, { FC } from 'react'
import { ITeam } from '../../../../types/team';
import ShortList from '../../Clubs/ShortList/ShortList';

interface ITeamPrimary {
  team: ITeam | null
  isFetchError: boolean
  shortList?: boolean
}

const TeamPrimary: FC<ITeamPrimary> = ({team, isFetchError, shortList}) => {
  
  if(isFetchError) return null;
  
  return (
    <section className="section-primary">
      {!shortList ? null : <ShortList team={team}/>}
      <div className="team-container">
        <h1 className='team__name'>{team?.name || '-------'}</h1>
        <div className="breadcrumbs">
          <span>Home / </span>
          <span>{team?.area.name || '-------'} / </span>
          <span>{team?.name || '-------'}</span>
        </div>
      </div>
    </section>
  )
}

export default TeamPrimary;