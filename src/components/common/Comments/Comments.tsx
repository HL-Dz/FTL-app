import React from 'react';
import "./Comments.scss";
import commentIcon from '../../../assets/images/comment.png';
import AddCommentForm from './AddCommentForm/AddCommentForm';

const Comments = () => {
  return (
    <div className="comments">
      <div className="commnets__title">
        Comments
        <img className="comments__icon" src={commentIcon} alt="Comment" />
      </div>
      <AddCommentForm/>
    </div>
  )
}

export default Comments;