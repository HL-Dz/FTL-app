import React, { FC, useEffect } from 'react';
import "./AdminModal.scss";

interface AdminModalProps {
  isFadeOutModal: boolean
  hideAdminModalWithEscape: (e:any) => void
}


const AdminModal :FC<AdminModalProps> = ({children, isFadeOutModal, hideAdminModalWithEscape}) => {
  useEffect(() => {
    window.addEventListener('keyup', hideAdminModalWithEscape);

    return () => {
      window.removeEventListener('keyup', hideAdminModalWithEscape)
    }
  })

  return (
    <div className={isFadeOutModal ? "admin-modal admin-modal_inactive" : "admin-modal"}>
      <div className={isFadeOutModal ? "admin-modal__content admin-modal__content_inactive" : "admin-modal__content"}>
        {children}
      </div>
    </div>
  )
}

export default AdminModal;