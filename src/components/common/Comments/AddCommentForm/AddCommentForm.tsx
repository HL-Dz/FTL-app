import React, { useState } from 'react'
import { delay } from '../../../../helpers/helpers';
import UniversalLoader from '../../UniversalLoader/UniversalLoader';
import "./AddCommentForm.scss";

const AddCommentForm = () => {
  const [comment, setComment] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addComment = async (e: any) => {
    e.preventDefault()
    setIsLoading(true);
    await delay(1000);
    let comment = {
      id: 1,
      text: 'Something interesting',
      createdAt: 'May 20, 2021'
    }
    setIsSuccess(true);
    await delay(500);
    setIsLoading(false);
    setIsSuccess(false);
  }

  return (
    <div className="comments__form">
      <form onSubmit={addComment}>
        <textarea 
          className="comments__textarea" 
          name="comment"
          placeholder="What do you think?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          autoFocus
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