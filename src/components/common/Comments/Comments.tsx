import React, { useState } from 'react';
import "./Comments.scss";
import commentIcon from '../../../assets/images/comment.png';
import AddCommentForm from './AddCommentForm/AddCommentForm';
import Comment from './Comment/Comment';
import { IComment } from '../../../types/articles';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import firebase from 'firebase';

const Comments = () => {
  const [comments, setComments] = useState<IComment[] | []>([]);
  const { user } = useTypedSelector(state => state.auth);

  const addComment = ( text:string ) => {
    const ownerId = user ? user.uid : '';
    const ownerEmail = user?.email ? user?.email : '';
    const ownerName = user ? user.displayName : null;
    const photoUrl = user ? user.photoURL : null;

    let comment: IComment = {
      id: uuidv4(),
      ownerId,
      ownerEmail,
      ownerName,
      photoUrl,
      text,
      createdAt: new Date().toLocaleString(),
      lastUpdate: new Date().toLocaleString()
    }

    setComments((prev: Array<IComment>)=> [...prev, comment]);
  }

  
  return (
    <div className="comments">
      <div className="commnets__title">
        Comments
        <img className="comments__icon" src={commentIcon} alt="Comment" />
        {
          comments.length > 0 ? <span className="comments__length">{comments.length}</span> : null
        }
      </div>
      <AddCommentForm 
        addComment={addComment}  
      />
      <div className="comments__list">
        {
          comments.length < 1 ? <div className="no-comments">There is nothing here yet...</div> : 
          (
            comments.map((comment) => <Comment key={comment.id} {...comment}/>)
          )
        }
      </div>
    </div>
  )
}

export default Comments;