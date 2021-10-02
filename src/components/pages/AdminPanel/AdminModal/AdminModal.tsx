import React, { FC } from 'react';
import "./AdminModal.scss";

interface AdminModalProps {
  isFadeOutModal: boolean
  hideAdminModalWithEscape?: (e:any) => void
  hideAdminModal: () => void
}


const AdminModal :FC<AdminModalProps> = ({children, isFadeOutModal, hideAdminModal}) => {

  const closemodal = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.className === 'admin-modal') {
      hideAdminModal();
    }
  }
  
  return (
    <div className={isFadeOutModal ? "admin-modal admin-modal_inactive" : "admin-modal"} onClick={closemodal}>
      <div className={isFadeOutModal ? "admin-modal__content admin-modal__content_inactive" : "admin-modal__content"}>
        {children}
      </div>
    </div>
  )
}

export default AdminModal;