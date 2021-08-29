import React, { FC, useState } from 'react';
import "./Comments.scss";
import commentIcon from '../../../assets/images/comment.png';
import AddCommentForm from './AddCommentForm/AddCommentForm';
import Comment from './Comment/Comment';
import { IComment } from '../../../types/articles';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import firebase from '../../../firebase';
import { delay } from '../../../helpers/helpers';

interface CommetnsProps {
  comments: Array<IComment>
}


const Comments: FC<CommetnsProps> = ({comments}) => {
  // const [comments, setComments] = useState<IComment[] | []>([]);
  const [isValidationError, setIsValidationError] = useState('');
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [isSuccessComment, setIsSuccessComment] = useState(false);

  const { user } = useTypedSelector(state => state.auth);

  const ref = firebase.firestore().collection('articles').doc('fZGoUeMHbbdic0vxw7TM');

  const addComment = async ( text:string ) => {
    const ownerId = user ? user.uid : '';
    const ownerEmail = user?.email ? user?.email : '';
    const ownerName = user ? user.displayName : null;
    const photoUrl = user ? user.photoURL : null;
    
    setIsValidationError('')
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
    setIsLoadingComment(true);
    await delay(100);
    ref.update({
      comments: firebase.firestore.FieldValue.arrayUnion(comment)
    })
    .then(async () => {
      setIsSuccessComment(true);
      await delay(500);
      setIsLoadingComment(false);
      setIsSuccessComment(false);
    })
    .catch((err) => {
      setIsLoadingComment(false);
      setIsValidationError(err.message);
    })
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
        isValidationError={isValidationError}
        setIsValidationError={setIsValidationError}
        isLoadingComment={isLoadingComment}
        isSuccessComment={isSuccessComment}
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