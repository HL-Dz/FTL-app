import React, { FC, useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import UniversalLoader from '../../UniversalLoader/UniversalLoader';
import "./AddCommentForm.scss";

interface AddCommentFormProps {
  addComment: (text: string) => void
}

const AddCommentForm: FC<AddCommentFormProps> = ({addComment}) => {
  const [commentText, setCommentText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addCommentHandler = async (e: any) => {
    e.preventDefault()
    setIsLoading(true);
    await delay(500);
    setIsSuccess(true);
    await delay(500);
    addComment(commentText);
    setIsLoading(false);
    setIsSuccess(false);
    setCommentText('');
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
        <div className="comments__send">
          <div className="comments__send-text">
            Comments are moderated. Please write in a correct and friendly manner.
            <i className="fas fa-handshake comments__manner"></i>
          </div>
          <div className="comments__wrap-button">
            {
              isLoading ? (
                <div className="comments__load">
                  {isSuccess ? <i className="far fa-check-circle comments__load-success"></i> : null}
                  {!isSuccess ? <UniversalLoader/> : null}
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