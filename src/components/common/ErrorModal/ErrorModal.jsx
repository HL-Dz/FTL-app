import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { delay } from '../../../helpers/helpers';
import "./ErrorModal.scss";

const ErrorModal = ({errorMessage, setErrorModal}) => {
  const [slowlyInActive, setSlowlyInActive] = useState(false);

  const closeModal = async () => {
    setSlowlyInActive(true);
    await delay(250);
    setErrorModal(false);
  }

  const closeModalForm = (e) => {
    if(e.target.className === 'errorModal') {
      closeModal()
    }
  }

  const handleEscape = (e) => {
    if(e.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleEscape);

    return () => {
      window.removeEventListener('keyup', handleEscape);
    }
  })

  return (
    <div className={slowlyInActive ? "errorModal errorModal_temp" : "errorModal"} onClick={closeModalForm}>
      <div className="errorModal__content">
        <button className="errorModal__close fas fa-times" onClick={closeModal}></button>
        <div className="errorModal__text">
          <i className="fas fa-exclamation-triangle"></i>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}

export default ErrorModal;