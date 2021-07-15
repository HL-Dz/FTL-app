import React from 'react';
import { useDispatch } from 'react-redux';
import noPhoto from '../../../../assets/images/no-image.png';
import { changeOrderOfClubs, removeSavedClub, setCurrentClub } from '../../../../redux/clubs-reducer';
import { getTeamProfile } from '../../../../redux/team-reducer';

const SavedClub = (props) => {
  const dispatch = useDispatch();
  const {id, cls, crestUrl, name} = props.elem;
  const {elem, inActiveItem} = props;

  const removeClub = (id) => {
    dispatch(removeSavedClub(id));
  }

  const dragStartHandler = (e, club) => {
    dispatch(setCurrentClub(club));
  };

  const dragEndHandler = (e) => {
    e.currentTarget.style.background = '#333333b3';
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.background = 'none';
  }

  const dropHandler = (e, club) => {
    e.preventDefault();
    dispatch(changeOrderOfClubs(club));
    e.currentTarget.style.background = '#333333b3';
    e.currentTarget.style.marginBottom = '5px';
  }

  const showCurrentTeam = (e, elem) => {
    if(e.target.className === 'club-remove' || e.target.className === 'club-remove' || e.target.className === 'fas fa-minus') return;
    dispatch(getTeamProfile(elem.id));
  }
  
  return (
    <div 
      className={`${cls} ${id === inActiveItem ? "current-club_inactive" : ""}`}
      draggable={true}
      onDragStart={(e) => {dragStartHandler(e, elem)}}
      onDragLeave={(e) => {dragEndHandler(e)}}
      onDragEnd={(e) => {dragEndHandler(e)}}
      onDragOver={(e) => {dragOverHandler(e)}}
      onDrop={(e) => {dropHandler(e, elem)}}
      onClick={(e) => {showCurrentTeam(e, elem)}}
    >
      <div className="club-pic">
        <img className="club-img" src={crestUrl || noPhoto} alt={name} title={name}/>
      </div>
      <div className="club-name">{name}</div>
      <div className={"club-remove"} title="Remove club" onClick={() => {removeClub(id)}}>
        <div className="remove-icon">
          <i className="fas fa-minus"></i>
        </div>
      </div>
    </div>
  )
}

export default SavedClub;