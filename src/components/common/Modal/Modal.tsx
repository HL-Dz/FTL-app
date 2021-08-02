import React, { FC } from 'react'
import { useEffect } from 'react';
import "./Modal.scss";

interface ModalProps {
  isHideModal: boolean
  children: React.ReactNode
  hideDetailsModal: () => void
}

const Modal: FC<ModalProps> = ({children, hideDetailsModal, isHideModal}) => {  

  const hideModal = async (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.currentTarget.className === 'modal-overlay') {
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
    <div className={isHideModal ? "modal-overlay modal-overlay_inactive" : "modal-overlay"} onClick={hideModal}>
      <div className={isHideModal ? "modal-content modal-content_inactive" : "modal-content"}>
        {children}
      </div>
    </div>
  )
}

export default Modal;