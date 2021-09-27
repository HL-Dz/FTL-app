import React, { FC, useState } from 'react';
import noPhoto from '../../../../assets/images/no-image.png';
import { delay } from '../../../../helpers/helpers';
import { ITeam } from '../../../../types/team';
import MapContainer from '../../../common/Map/MapContainer';
import TeamInfo from '../TeamInfo/TeamInfo';

interface ITeamDescription {
  team: ITeam | null
  isFetchError: boolean
}

const TeamDescription: FC<ITeamDescription> = ({team, isFetchError}) => {
  const [isMap, setIsMap] = useState(false);
  const [isActiveCloseAnim, setIsActiveCloseAnim] = useState(false);
  const [currentAddress, setCurrentAddres] = useState('');

  const closeMap = async () => {
    setIsActiveCloseAnim(true);
    await delay(80);
    setIsMap(false);
    setIsActiveCloseAnim(false);
  }

  const showMap = async (address: string) => {
    setIsMap(true);
    setCurrentAddres(address);
  }
  
  if(isFetchError) return null;

  return (
    <section className="section-description">
      {isMap ? <MapContainer 
        closeMap={closeMap} 
        isActiveCloseAnim={isActiveCloseAnim}
        currentAddress={currentAddress}
      /> : null}
      <div className="team-container team-container-flex">
        <div className="team__pic">
          <img className="team__img" src={team?.crestUrl || noPhoto} alt={team?.name || 'Team'} />
        </div>
        <TeamInfo team={team} showMap={showMap}/>
      </div>
    </section>
  )
}

export default TeamDescription;