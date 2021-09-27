import React, { FC } from 'react'
import { useEffect } from 'react';
import "./Modal.scss";

interface ModalProps {
  isHideModal: boolean
  children: React.ReactNode
  hideDetailsModal: () => void
}

const Modal: FC<ModalProps> = ({children, hideDetailsModal, isHideModal}) => {  

  const hideModal = async (e: React.SyntheticEvent<HTMLDivElement>) => {
    let target = e.target as HTMLDivElement;
    if(target.classList.contains('modal-overlay')) {
      hideDetailsModal()
    }
  }

  const hideModalWithEscape = (e: any) => {
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
    <div className={isHideModal ? "modal-overlay modal-overlay_inactive scroll-container" : "modal-overlay scroll-container"} onClick={hideModal}>
      <div className={isHideModal ? "modal-content modal-content_inactive" : "modal-content"}>
        {children}
      </div>
    </div>
  )
}

export default Modal;