import React, { FC } from 'react';
import "./Comment.scss";
import userPhoto from '../../../../assets/images/comment-user.png';
import { IComment } from '../../../../types/articles';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import OwnerLabel from '../../OwnerLabel/OwnerLabel';

const Comment: FC<IComment> = ({...comment}) => {
  const {user} = useTypedSelector(state => state.auth);
  
  return (
    <div className="comment">
      {
        user?.uid === comment.ownerId ? <OwnerLabel/>: null
      }
      <div className="comment__photo">
        <div className="comment__pic">
          <img src={comment.photoUrl || userPhoto} alt="User" className="comment__img" />
        </div>
      </div>
      <div className="comment__info">
        <div className="comment__user">{comment.ownerName || 'User'}</div>
        <div className="comment__date">
          {comment.createdAt}
          <i className="far fa-clock comment__clock"></i>
        </div>
        <div className="comment__text">
          {comment.text}
        </div>
      </div>
    </div>
  )
}

export default Comment
