import React from 'react'
import { useEffect } from 'react';
import "./Modal.scss";

const Modal = ({children, hideDetailsModal, isHideModal}) => {  

  const hideModal = async (e) => {
    if(e.target.className === 'modal-overlay') {
      hideDetailsModal()
    }
  }

  const hideModalWithEscape = (e) => {
    if(e.key === 'Escape') {
      hideDetailsModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', hideModalWithEscape);

    return () => {
      window.removeEventListener('keyup', hideModalWithEscape);
    }
  })
  
  return (
    <div className={isHideModal ? "modal-overlay modal-overlay_inactive" : "modal-overlay"} onClick={hideModal}>
      <div className={isHideModal ? "modal-content modal-content_inactive" : "modal-content"}>
        {children}
      </div>
    </div>
  )
}

export default Modal;