import React, { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { delay } from '../../../helpers/helpers';
import "./ErrorModal.scss";

interface ErrorModalProps {
  errorMessage: string
  setErrorModal: (err: boolean) => void
}

const ErrorModal: FC<ErrorModalProps> = ({errorMessage, setErrorModal}) => {
  const [slowlyInActive, setSlowlyInActive] = useState(false);

  const closeModal = async () => {
    setSlowlyInActive(true);
    await delay(250);
    setErrorModal(false);
  }

  const closeModalForm = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.className === 'errorModal') {
      closeModal()
    }
  }

  const handleEscape = (e:any) => {
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
      <button className="errorModal__close fas fa-times" onClick={closeModal}></button>
      <div className={slowlyInActive ? "errorModal__content errorModal__content_inactive" : "errorModal__content"}>
        <div className="errorModal__text">
          <i className="fas fa-exclamation-triangle"></i>
          {errorMessage}
        </div>
      </div>
    </div>
  )
}

export default ErrorModal;