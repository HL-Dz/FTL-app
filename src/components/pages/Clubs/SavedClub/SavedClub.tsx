import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import noPhoto from '../../../../assets/images/no-image.png';
import { changeOrderOfClubs, removeSavedClub, setCurrentClub } from '../../../../redux/clubs-reducer';
import { getTeamProfile } from '../../../../redux/team-reducer';
import { IClub } from '../../../../types/clubs';

interface ISavedClub {
  elem: IClub
  inActiveItem: number | null
}


const SavedClub: FC<ISavedClub> = ({elem, inActiveItem}) => {
  const dispatch = useDispatch();

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, club: IClub) => {
    dispatch(setCurrentClub(club));
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = '#333333b3';
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.background = 'none';
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, club: IClub) => {
    e.preventDefault();
    dispatch(changeOrderOfClubs(club));
    e.currentTarget.style.background = '#333333b3';
    e.currentTarget.style.marginBottom = '5px';
  }

  const showCurrentTeam = (e: React.MouseEvent<HTMLDivElement>, club: IClub) => {
    if(e.currentTarget.className === 'club-remove') return;
    dispatch(getTeamProfile(club.id));
  }

  const removeClub = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    if(!e.currentTarget.closest('club-remove')) {
      e.stopPropagation();
    }
    dispatch(removeSavedClub(id));
  }
  
  return (
    <div 
      className={`${elem.cls} ${elem.id === inActiveItem ? "current-club_inactive" : ""}`}
      draggable={true}
      onDragStart={(e) => {dragStartHandler(e, elem)}}
      onDragLeave={(e) => {dragEndHandler(e)}}
      onDragEnd={(e) => {dragEndHandler(e)}}
      onDragOver={(e) => {dragOverHandler(e)}}
      onDrop={(e) => {dropHandler(e, elem)}}
      onClick={(e) => {showCurrentTeam(e, elem)}}
    >
      <div className="club-pic">
        <img className="club-img" src={elem.crestUrl || noPhoto} alt={elem.name || 'Club'} title={elem.name || 'Club'}/>
      </div>
      <div className="club-name">{elem.name}</div>
      <button className="club-remove" onClick={(e) => {removeClub(e, elem.id)}}>
        <i className="fas fa-minus"></i>
      </button>
    </div>
  )
}

export default SavedClub;