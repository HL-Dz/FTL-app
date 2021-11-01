import React, { FC } from 'react';
import "./Comment.scss";
import userPhoto from '../../../../assets/images/comment-user.png';
import { IComment } from '../../../../types/articles';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import OwnerLabel from '../../OwnerLabel/OwnerLabel';
import { getArticleTime } from '../../../../helpers/helpers';

interface CommentProps {
  adminAccess?: boolean
  comment: IComment
  deleteComment?: any
}

const Comment: FC<CommentProps> = ({adminAccess, comment, deleteComment}) => {
  const {user} = useTypedSelector(state => state.auth);

  const setImageError = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLImageElement;
    target.src = userPhoto;
  }
  
  return (
    <div className="comment">
      {
        user?.uid === comment.ownerId ? <OwnerLabel/>: null
      }
      <div className="comment__photo">
        <div className="comment__pic">
          {
            adminAccess ? (
              <div className="comment__delete" title="Delete comment">
                <div className="comment__delete-btn" onClick={() => deleteComment(comment)}>
                  <i className="fas fa-minus"></i>
                </div>
              </div>
            ) : null
          }
          <img src={comment.photoUrl || userPhoto} alt="User" className="comment__img" onError={setImageError}/>
        </div>
      </div>
      <div className="comment__info">
        <div className="comment__user">{comment.ownerName || 'User'}</div>
        <div className="comment__date">
          {getArticleTime(comment.createdAt)}
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
