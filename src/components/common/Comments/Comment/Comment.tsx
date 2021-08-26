import React, { FC } from 'react';
import "./Comment.scss";
import user from '../../../../assets/images/comment-user.png';
import { IComment } from '../../../../types/articles';

const Comment: FC<IComment> = ({...comment}) => {
  return (
    <div className="comment">
      <div className="comment__photo">
        <div className="comment__pic">
          <img src={comment.photoUrl || user} alt="User" className="comment__img" />
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
