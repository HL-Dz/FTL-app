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
import { useDispatch } from 'react-redux';
import { setArticleErrorMessage, setArticleErrorModal } from '../../../redux/articles-reducer';

interface CommentsProps {
  comments: Array<IComment>
  adminAccess?: boolean,
  articleUrl?: string
}

const ref = firebase.firestore().collection('articles');

const Comments: FC<CommentsProps> = ({comments, adminAccess, articleUrl}) => {
  const [commentText, setCommentText] = useState('');
  const [isValidationError, setIsValidationError] = useState('');
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [isSuccessComment, setIsSuccessComment] = useState(false);

  const { user } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();
  

  const addComment = async ( text:string ) => {
    const ownerId = user ? user.uid : '';
    const ownerEmail = user?.email ? user?.email : '';
    const ownerName = user ? user.displayName : null;
    const photoUrl = user ? user.photoURL : null;
    
    setIsValidationError('');
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
    await delay(500);
    ref.doc(articleUrl).update({
      comments: firebase.firestore.FieldValue.arrayUnion(comment)
    }).then(async () => {
      setIsSuccessComment(true);
      await delay(500);
      setIsLoadingComment(false);
      setIsSuccessComment(false);
      setCommentText('');
    })
    .catch(() => {
      setIsLoadingComment(false);
      setIsValidationError('Sorry, adding comments is temporarily unavailable.');
    })
  }

  const deleteComment = (comment: IComment) => {
    ref.doc(articleUrl).update({
      comments: firebase.firestore.FieldValue.arrayRemove(comment)
    })
    .then(() => {
      
    })
    .catch(() => {
      dispatch(setArticleErrorModal(true));
      dispatch(setArticleErrorMessage('Deleting comments is temporarily unavailable.'));
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
        commentText={commentText}
        setCommentText={setCommentText}
      />
      <div className="comments__list">
        {
          comments.length === 0 ? <div className="no-comments">There is nothing here yet...</div> : 
          (
            comments.map((elem) => 
            <Comment
              key={elem.id}
              comment={elem}
              adminAccess={adminAccess && true}
              deleteComment={deleteComment}
            />)
          )
        }
      </div>
    </div>
  )
}

export default Comments;