import React, { FC, useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import { isValidation } from '../../../../helpers/validation';
import UniversalLoader from '../../UniversalLoader/UniversalLoader';
import "./AddCommentForm.scss";

interface AddCommentFormProps {
  isValidationError: string
  isLoadingComment: boolean
  isSuccessComment: boolean
  addComment: (text: string) => void
  setIsValidationError: (text: string ) => void
}

const AddCommentForm: FC<AddCommentFormProps> = ({
  addComment, 
  isValidationError, 
  setIsValidationError,
  isLoadingComment,
  isSuccessComment
}) => {
  const [commentText, setCommentText] = useState('');


  const addCommentHandler = async (e: any) => {
    let errorValidation = isValidation(commentText);
    e.preventDefault()
    if(errorValidation) {
      setIsValidationError(errorValidation);
    } else {
      await addComment(commentText);
      setCommentText('');
    }
  }

  return (
    <div className="comments__form">
      <form onSubmit={addCommentHandler}>
        <textarea 
          className="comments__textarea" 
          name="comment"
          placeholder="What do you think?"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <div className="comments__error">
          {isValidationError}
        </div>
        <div className="comments__send">
          <div className="comments__send-text">
            Comments are moderated. Please write in a correct and friendly manner.
            <i className="fas fa-handshake comments__manner"></i>
          </div>
          <div className="comments__wrap-button">
            {
              isLoadingComment ? (
                <div className="comments__load">
                  {isSuccessComment ? <i className="far fa-check-circle comments__load-success"></i> : null}
                  {!isSuccessComment ? <UniversalLoader/> : null}
                </div>
              ) : null
            }
            <button className="comments__button">
              Add comment
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCommentForm;